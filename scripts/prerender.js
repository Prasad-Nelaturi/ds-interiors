const fs = require("fs");
const path = require("path");
const http = require("http");
const { exec } = require("child_process");
const { chromium } = require("playwright");

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
    const cleanPath = decodeURIComponent(urlPath.split("?")[0]);

    // Homepage
    if (cleanPath === "/" || cleanPath === "") {
        return path.join(BUILD_DIR, "index.html");
    }

    // Static files
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

    // Pre-rendered route or SPA fallback
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

            const ext = path.extname(filePath);

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

            const contentType =
                contentTypes[ext] || "application/octet-stream";

            res.writeHead(200, {
                "Content-Type": contentType,
            });

            fs.createReadStream(filePath).pipe(res);
        });

        server.listen(PORT, () => {
            console.log(`🚀 Preview server running at ${BASE_URL}`);
            resolve(server);
        });
    });
}

function waitForServer() {
    return new Promise((resolve, reject) => {
        const command =
            process.platform === "win32"
                ? `powershell -Command "(Invoke-WebRequest -UseBasicParsing http://localhost:${PORT}).StatusCode"`
                : `curl -s -o /dev/null -w "%{http_code}" http://localhost:${PORT}`;

        exec(command, (error) => {
            if (error) {
                reject(error);
                return;
            }

            resolve();
        });
    });
}

async function prerender() {
    if (!fs.existsSync(BUILD_DIR)) {
        console.error("❌ build folder does not exist.");
        process.exit(1);
    }

    const server = await startServer();

    try {
        await waitForServer();

        const browser = await chromium.launch({
            headless: true,
        });

        const context = await browser.newContext({
            viewport: {
                width: 1440,
                height: 900,
            },
        });

        const page = await context.newPage();

        page.on("console", (message) => {
            if (message.type() === "error") {
                console.log("Browser error:", message.text());
            }
        });

        page.on("pageerror", (error) => {
            console.log("Page error:", error.message);
        });

        console.log("\n🚀 Starting prerendering...\n");

        for (const route of routes) {
            const url = `${BASE_URL}${route}`;

            console.log(`⏳ Rendering ${route}`);

            try {
                const response = await page.goto(url, {
                    waitUntil: "networkidle",
                    timeout: 120000,
                });

                if (!response) {
                    console.error(`❌ No response: ${route}`);
                    continue;
                }

                const status = response.status();

                if (status >= 400) {
                    console.error(
                        `❌ ${route} returned HTTP ${status}`
                    );
                    continue;
                }

                // Give React additional time to finish rendering.
                await page.waitForTimeout(1000);

                // Get the fully rendered HTML.
                const html = await page.content();

                const routePath =
                    route === "/"
                        ? BUILD_DIR
                        : path.join(
                            BUILD_DIR,
                            route.replace(/^\/+/, "")
                        );

                fs.mkdirSync(routePath, {
                    recursive: true,
                });

                const outputFile = path.join(
                    routePath,
                    "index.html"
                );

                fs.writeFileSync(
                    outputFile,
                    "<!DOCTYPE html>\n" + html,
                    "utf8"
                );

                console.log(
                    `✅ ${route} → ${path.relative(
                        BUILD_DIR,
                        outputFile
                    )}`
                );
            } catch (error) {
                console.error(
                    `❌ Failed ${route}:`,
                    error.message
                );
            }
        }

        await browser.close();

        console.log("\n🎉 PRE-RENDERING COMPLETED");
        console.log(
            `📁 Output: ${BUILD_DIR}`
        );
    } finally {
        server.close();
    }
}

prerender();