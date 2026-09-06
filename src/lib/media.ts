import fs from "node:fs";
import path from "node:path";

/**
 * Checks whether a real asset exists in /public for the given site-root
 * path (e.g. "/images/gallery/wedding-01.jpg"). Runs at render/build time
 * on the server only — never in the browser — so <EditorialImage> can fall
 * back to a placeholder with zero client JS and no failed network request.
 */
export function mediaExists(publicPath: string): boolean {
  if (!publicPath.startsWith("/")) return false;
  try {
    const filePath = path.join(process.cwd(), "public", publicPath);
    const stat = fs.statSync(filePath);
    return stat.isFile() && stat.size > 0;
  } catch {
    return false;
  }
}
