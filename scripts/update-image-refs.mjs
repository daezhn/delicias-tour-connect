import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '..', 'src');
const extensions = ['.ts', '.tsx'];
let totalReplaced = 0;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  // Replace .jpg, .jpeg, .png with .webp in image paths
  // Only replace in strings that look like image paths
  const regex = /(["'`]\/images\/[^"'`]*)\.(jpg|jpeg|png)(["'`])/gi;
  
  content = content.replace(regex, (match, path, ext, quote) => {
    console.log(`  ${path}.${ext} → ${path}.webp`);
    totalReplaced++;
    return `${path}.webp${quote}`;
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  return false;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let modified = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      modified += walkDir(filePath);
    } else if (extensions.includes(path.extname(filePath))) {
      console.log(`\nProcessing: ${path.relative(srcDir, filePath)}`);
      if (processFile(filePath)) {
        modified++;
      }
    }
  }
  return modified;
}

console.log('🔄 Updating image references to WebP...\n');

const modifiedFiles = walkDir(srcDir);

console.log(`\n✅ Done!`);
console.log(`   Files modified: ${modifiedFiles}`);
console.log(`   References updated: ${totalReplaced}`);
