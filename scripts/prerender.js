const fs = require("fs");
const path = require("path");
const http = require("http");
const puppeteer = require("puppeteer");

const BUILD_DIR = path.resolve(__dirname, "../build");
const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;

const routes = [
    "/",
    "/about",
    "/contact",
    "/blogs",
    "/projects",
    "/gallery",
    "/modular-factory",
    "/privacy-policy",
    "/terms-conditions",

    "/services/interior-design",
    "/services/home-plans",
    "/services/3d-visualization",
    "/services/landscaping",
    "/services/home-automation",
    "/services/curtains-blinds",
    "/services/chimneys-hobs",
    "/services/residential",
    "/services/commercial",
    "/services/styling",
    "/services/luxury-villas",
    "/services/space-planning",
];

function getFilePath(urlPath) {
    const cleanPath = decodeURIComponent(
        urlPath.split("?")[0]
    );

    if (cleanPath === "/" || cleanPath === "") {
        return path.join(BUILD_DIR, "index.html");
    }

    const directPath = path.join(
        BUILD_DIR,
        cleanPath.replace(/^\/+/, "")
    );

    if (
        fs.existsSync(directPath) &&
        fs.statSync(directPath).isFile()
    ) {
        return directPath;
    }

    const routeIndex = path.join(
        BUILD_DIR,
        cleanPath.replace(/^\/+/, ""),
        "index.html"
    );

    if (fs.existsSync(routeIndex)) {
        return routeIndex;
    }

    return path.join(BUILD_DIR, "index.html");
}

function startServer() {
    return new Promise((resolve) => {
        const server = http.createServer((req, res) => {
            const filePath = getFilePath(req.url);

            if (!fs.existsSync(filePath)) {
                res.writeHead(404);
                res.end("Not Found");
                return;
            }

            const ext = path.extname(filePath).toLowerCase();

            const contentTypes = {
                ".html": "text/html; charset=utf-8",
                ".js": "application/javascript",
                ".css": "text/css",
                ".json": "application/json",
                ".png": "image/png",
                ".jpg": "image/jpeg",
                ".jpeg": "image/jpeg",
                ".webp": "image/webp",
                ".svg": "image/svg+xml",
                ".ico": "image/x-icon",
                ".woff": "font/woff",
                ".woff2": "font/woff2",
                ".ttf": "font/ttf",
            };

            res.writeHead(200, {
                "Content-Type":
                    contentTypes[ext] ||
                    "application/octet-stream",
            });

            fs.createReadStream(filePath).pipe(res);
        });

        server.listen(PORT, () => {
            console.log(
                `Preview server running at ${BASE_URL}`
            );

            resolve(server);
        });
    });
}

function getOutputPath(route) {
    if (route === "/") {
        return path.join(BUILD_DIR, "index.html");
    }

    const routeDirectory = path.join(
        BUILD_DIR,
        route.replace(/^\/+/, "")
    );

    fs.mkdirSync(routeDirectory, {
        recursive: true,
    });

    return path.join(routeDirectory, "index.html");
}

async function prerender() {
    if (!fs.existsSync(BUILD_DIR)) {
        console.error(
            "Build directory does not exist. Run npm run build first."
        );
        process.exit(1);
    }

    console.log("");
    console.log("Starting Puppeteer prerender...");
    console.log("");

    const server = await startServer();

    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
            ],
        });

        const page = await browser.newPage();

        await page.setViewport({
            width: 1440,
            height: 900,
        });

        for (const route of routes) {
            const url = `${BASE_URL}${route}`;

            console.log(`Rendering: ${route}`);

            try {
                const response = await page.goto(url, {
                    waitUntil: "networkidle2",
                    timeout: 120000,
                });

                if (!response) {
                    console.error(
                        `No response received for ${route}`
                    );
                    continue;
                }

                const status = response.status();

                if (status >= 400) {
                    console.error(
                        `${route} returned HTTP ${status}`
                    );
                    continue;
                }

                // Give React time to finish rendering dynamic content.
                await new Promise((resolve) =>
                    setTimeout(resolve, 1500)
                );

                const html = await page.content();

                const outputPath = getOutputPath(route);

                fs.writeFileSync(
                    outputPath,
                    html,
                    "utf8"
                );

                console.log(
                    `Generated: ${outputPath}`
                );
            } catch (error) {
                console.error(
                    `Failed to render ${route}:`,
                    error.message
                );
            }
        }

        await browser.close();

        console.log("");
        console.log(
            "Puppeteer prerender completed successfully."
        );
        console.log("");
    } catch (error) {
        console.error(
            "Puppeteer prerender failed:",
            error
        );

        process.exitCode = 1;
    } finally {
        server.close();
    }
}

prerender();