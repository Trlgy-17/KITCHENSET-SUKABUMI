const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyAWGrfCCr7albM3lmCc937gx4uIphbpeKQ';

async function listFolder(folderId) {
  let allFiles = [];
  let pageToken = null;
  do {
    const url = `https://www.googleapis.com/drive/v3/files?q='${folderId}'+in+parents+and+trashed=false&fields=nextPageToken,files(id,name,mimeType,size)&pageSize=100&key=${API_KEY}${pageToken ? `&pageToken=${pageToken}` : ''}`;
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to list ${folderId}:`, res.status, await res.text());
      break;
    }
    const data = await res.json();
    if (data.files) allFiles.push(...data.files);
    pageToken = data.nextPageToken;
  } while (pageToken);
  return allFiles;
}

async function traverse(folderId, currentPath = '') {
  console.log(`Scanning: ${currentPath || 'ROOT'}`);
  const items = await listFolder(folderId);
  const result = [];

  for (const item of items) {
    if (item.mimeType === 'application/vnd.google-apps.folder') {
      const subItems = await traverse(item.id, path.join(currentPath, item.name));
      result.push(...subItems);
    } else {
      result.push({
        id: item.id,
        name: item.name,
        mimeType: item.mimeType,
        size: item.size,
        relativePath: path.join(currentPath, item.name)
      });
    }
  }
  return result;
}

async function run() {
  const rootId = '1fz8BDFCnmBKTQwXE3vSFJ-_8FHHnS7Jz';
  const allMedia = await traverse(rootId);
  console.log(`\nTotal media found: ${allMedia.length}`);
  fs.writeFileSync('gdrive_manifest.json', JSON.stringify(allMedia, null, 2));
  console.log('Saved to gdrive_manifest.json');
}

run();
