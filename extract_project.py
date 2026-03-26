import zipfile
import os

zip_path = '/vercel/share/v0-project/project (BlockNet).zip'
extract_to = '/vercel/share/v0-project'

try:
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        zip_ref.extractall(extract_to)
    print("✓ ZIP file extracted successfully")
except Exception as e:
    print(f"✗ Error extracting ZIP: {e}")
