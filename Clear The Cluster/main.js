import fs from 'fs/promises';
import fsn from 'fs';
import path from 'path';

let basePath = "F:\\Faijans Folder\\Back-End\\Clear The Cluster";

let files = await fs.readdir(basePath);

for (const item of files) {
  const itemPath = path.join(basePath, item);

  // Skip directories
  const stat = await fs.stat(itemPath);
  if (stat.isDirectory()) continue;

  // Get file extension
  const parts = item.split('.');
  if (parts.length <= 1) continue;

  const ext = parts[parts.length - 1];

  if (ext !== 'js' && ext !== 'json') {
    const folderPath = path.join(basePath, ext);

    // Create folder if it doesn't exist
    if (!fsn.existsSync(folderPath)) {
      await fs.mkdir(folderPath);
    }

    // Move file into extension folder
    const destPath = path.join(folderPath, item);
    await fs.rename(itemPath, destPath);

    console.log(`Moved ${item} → ${folderPath}`);
  }
}
