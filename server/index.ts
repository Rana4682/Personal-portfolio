import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Determine the static path based on environment
  let staticPath: string;

  if (process.env.NODE_ENV === "production") {
    // On Vercel, check multiple possible locations
    const possiblePaths = [
      path.resolve(__dirname, "..", "dist", "public"),
      path.resolve(__dirname, "..", "public"),
      path.resolve(__dirname, "public"),
    ];

    // Use the first path that could work
    staticPath = possiblePaths[0];
  } else {
    // Local development
    staticPath = path.resolve(__dirname, "..", "dist", "public");
  }

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    const indexPath = path.join(staticPath, "index.html");
    res.sendFile(indexPath, (err) => {
      if (err) {
        res.status(404).json({ error: "index.html not found" });
      }
    });
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
    console.log(`Serving static files from: ${staticPath}`);
  });
}

startServer().catch(console.error);
