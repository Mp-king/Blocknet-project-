import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';

const projectDir = '/vercel/share/v0-project';
const files = execSync(`ls -la "${projectDir}"`, { encoding: 'utf-8' }).split('\n');

console.log('[v0] Looking for ZIP files...');
const zipFile = files.find(f => f.includes('.zip'));
if (zipFile) {
  const zipName = zipFile.split(' ').pop();
  console.log(`[v0] Found ZIP file: ${zipName}`);
  
  try {
    execSync(`cd "${projectDir}" && unzip -q "${zipName}"`, { stdio: 'inherit' });
    console.log('✓ ZIP file extracted successfully');
  } catch (e) {
    console.error(`✗ Error extracting ZIP: ${e.message}`);
  }
} else {
  console.log('✗ No ZIP file found');
}
