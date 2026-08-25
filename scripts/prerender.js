const fs = require("fs");
const path = require("path");
const http = require("http");
const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");

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

/**
 * Convert URL path to a file inside build/
 */
function getFilePath(urlPath) {
    const cleanPath = decodeURIComponent(
        urlPath.split("?")[0]
    );

    // Homepage
    if (cleanPath === "/" || cleanPath === "") {
        return path.join(BUILD_DIR, "index.html");
    }

    // Static file
    const relativePath = cleanPath.replace(/^\/+/, "");

    const directPath = path.join(
        BUILD_DIR,
        relativePath
    );

    if (
        fs.existsSync(directPath) &&
        fs.statSync(directPath).isFile()
    ) {
        return directPath;
    }

    // Pre-rendered route
    const routeIndex = path.join(
        BUILD_DIR,
        relativePath,
        "index.html"
    );

    if (fs.existsSync(routeIndex)) {
        return routeIndex;
    }

    // React SPA fallback
    return path.join(
        BUILD_DIR,
        "index.html"
    );
}

/**
 * Start local HTTP server
 */
function startServer() {
    return new Promise((resolve, reject) => {
        const server = http.createServer(
            (req, res) => {
                try {
                    const filePath = getFilePath(
                        req.url || "/"
                    );

                    if (!fs.existsSync(filePath)) {
                        res.writeHead(404);
                        res.end("Not Found");
                        return;
                    }

                    const ext = path
                        .extname(filePath)
                        .toLowerCase();

                    const contentTypes = {
                        ".html":
                            "text/html; charset=utf-8",
                        ".js":
                            "application/javascript",
                        ".css":
                            "text/css",
                        ".json":
                            "application/json",
                        ".png":
                            "image/png",
                        ".jpg":
                            "image/jpeg",
                        ".jpeg":
                            "image/jpeg",
                        ".webp":
                            "image/webp",
                        ".svg":
                            "image/svg+xml",
                        ".ico":
                            "image/x-icon",
                        ".woff":
                            "font/woff",
                        ".woff2":
                            "font/woff2",
                        ".ttf":
                            "font/ttf",
                    };

                    res.writeHead(200, {
                        "Content-Type":
                            contentTypes[ext] ||
                            "application/octet-stream",
                    });

                    fs.createReadStream(
                        filePath
                    ).pipe(res);
                } catch (error) {
                    console.error(
                        "Server error:",
                        error
                    );

                    res.writeHead(500);
                    res.end("Internal Server Error");
                }
            }
        );

        server.on("error", reject);

        server.listen(
            PORT,
            "127.0.0.1",
            () => {
                console.log(
                    `Preview server running at ${BASE_URL}`
                );

                resolve(server);
            }
        );
    });
}

/**
 * Get output HTML path for a route
 */
function getOutputPath(route) {
    if (route === "/") {
        return path.join(
            BUILD_DIR,
            "index.html"
        );
    }

    const relativeRoute = route.replace(
        /^\/+/,
        ""
    );

    const routeDirectory = path.join(
        BUILD_DIR,
        relativeRoute
    );

    fs.mkdirSync(routeDirectory, {
        recursive: true,
    });

    return path.join(
        routeDirectory,
        "index.html"
    );
}

/**
 * Find Chrome executable on local Windows machine
 */
function getLocalChromePath() {
    const possiblePaths = [
        process.env.CHROME_PATH,

        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",

        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",

        path.join(
            process.env.LOCALAPPDATA || "",
            "Google\\Chrome\\Application\\chrome.exe"
        ),
    ];

    for (const chromePath of possiblePaths) {
        if (
            chromePath &&
            fs.existsSync(chromePath)
        ) {
            return chromePath;
        }
    }

    return null;
}

/**
 * Launch Puppeteer
 *
 * Vercel/Linux:
 *     @sparticuz/chromium
 *
 * Windows/local:
 *     Installed Google Chrome
 */
async function launchBrowser() {
    const isWindows =
        process.platform === "win32";

    if (isWindows) {
        const localChrome =
            getLocalChromePath();

        if (!localChrome) {
            throw new Error(
                "Google Chrome was not found on this Windows machine. " +
                "Install Chrome or set CHROME_PATH."
            );
        }

        console.log(
            `Using local Chrome: ${localChrome}`
        );

        return puppeteer.launch({
            executablePath: localChrome,
            headless: true,
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
            ],
        });
    }

    console.log(
        "Using @sparticuz/chromium for Linux/Vercel..."
    );

    const executablePath =
        await chromium.executablePath();

    console.log(
        `Chromium executable: ${executablePath}`
    );

    return puppeteer.launch({
        args: chromium.args,
        defaultViewport:
            chromium.defaultViewport,
        executablePath,
        headless: "shell",
    });
}

/**
 * Main prerender function
 */
async function prerender() {
    if (!fs.existsSync(BUILD_DIR)) {
        console.error(
            "Build directory does not exist."
        );

        console.error(
            "Run npm run build first."
        );

        process.exit(1);
    }

    console.log("");
    console.log(
        "======================================"
    );
    console.log(
        "Starting Puppeteer prerender..."
    );
    console.log(
        "======================================"
    );
    console.log("");

    let server = null;
    let browser = null;

    try {
        // Start preview server
        server = await startServer();

        // Launch browser
        browser = await launchBrowser();

        const page = await browser.newPage();

        await page.setViewport({
            width: 1440,
            height: 900,
            deviceScaleFactor: 1,
        });

        // Render every route
        for (const route of routes) {
            const url = `${BASE_URL}${route}`;

            console.log(
                `Rendering: ${route}`
            );

            try {
                const response =
                    await page.goto(url, {
                        waitUntil: "networkidle2",
                        timeout: 120000,
                    });

                if (!response) {
                    console.error(
                        `No response received for ${route}`
                    );

                    continue;
                }

                const status =
                    response.status();

                if (status >= 400) {
                    console.error(
                        `${route} returned HTTP ${status}`
                    );

                    continue;
                }

                // Allow React components,
                // Sanity data and SEO metadata
                // to finish rendering.
                await new Promise(
                    (resolve) =>
                        setTimeout(
                            resolve,
                            1500
                        )
                );

                const html = await page.evaluate(() => {
                    const titles = document.head.querySelectorAll("title");

                    titles.forEach((title, index) => {
                        if (index > 0) {
                            title.remove();
                        }
                    });

                    return "<!DOCTYPE html>\n" +
                        document.documentElement.outerHTML;
                });

                const outputPath =
                    getOutputPath(route);

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

        console.log("");
        console.log(
            "======================================"
        );
        console.log(
            "Puppeteer prerender completed successfully."
        );
        console.log(
            "======================================"
        );
        console.log("");
    } catch (error) {
        console.error("");
        console.error(
            "Puppeteer prerender failed:"
        );
        console.error(error);
        console.error("");

        process.exitCode = 1;
    } finally {
        // Close browser
        if (browser) {
            try {
                await browser.close();
            } catch (error) {
                console.error(
                    "Failed to close browser:",
                    error.message
                );
            }
        }

        // Close HTTP server
        if (server) {
            try {
                await new Promise(
                    (resolve) =>
                        server.close(resolve)
                );
            } catch (error) {
                console.error(
                    "Failed to close server:",
                    error.message
                );
            }
        }
    }
}

prerender();