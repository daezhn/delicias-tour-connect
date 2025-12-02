import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, '..', 'public', 'images');
const extensions = ['.jpg', '.jpeg', '.png'];
const maxWidth = 1920;
const quality = 80;

let converted = 0;
let skipped = 0;
let totalSaved = 0;

async function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!extensions.includes(ext)) return;
  
  const webpPath = filePath.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  
  // Skip if webp already exists
  if (fs.existsSync(webpPath)) {
    skipped++;
    return;
  }
  
  try {
    const originalSize = fs.statSync(filePath).size;
    
    await sharp(filePath)
      .resize(maxWidth, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({ quality })
      .toFile(webpPath);
    
    const newSize = fs.statSync(webpPath).size;
    const saved = originalSize - newSize;
    totalSaved += saved;
    
    console.log(`✓ ${path.basename(filePath)} → ${path.basename(webpPath)} (${(saved / 1024).toFixed(1)}KB saved)`);
    converted++;
  } catch (err) {
    console.error(`✗ Error converting ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      await walkDir(filePath);
    } else {
      await convertImage(filePath);
    }
  }
}

console.log('🖼️  Converting images to WebP...\n');
console.log(`Source: ${publicDir}`);
console.log(`Max width: ${maxWidth}px`);
console.log(`Quality: ${quality}%\n`);

await walkDir(publicDir);

console.log(`\n✅ Done!`);
console.log(`   Converted: ${converted} images`);
console.log(`   Skipped: ${skipped} (already exist)`);
console.log(`   Total saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
