import { execSync } from 'child_process';
import { readdirSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log('[v0] Current directory:', __dirname);

try {
  const files = readdirSync(__dirname);
  console.log('[v0] Files in directory:', files);
  
  const zipFile = files.find(f => f.endsWith('.zip'));
  if (zipFile) {
    console.log(`[v0] Found ZIP file: ${zipFile}`);
    
    const zipPath = path.join(__dirname, zipFile);
    console.log('[v0] Extracting from:', zipPath);
    
    execSync(`cd "${__dirname}" && unzip -q "${zipFile}"`, { stdio: 'inherit' });
    console.log('✓ ZIP file extracted successfully');
  } else {
    console.log('✗ No ZIP file found in directory');
  }
} catch (e) {
  console.error(`✗ Error: ${e.message}`);
  process.exit(1);
}
