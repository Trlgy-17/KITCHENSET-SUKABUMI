const fs = require('fs');

const content = fs.readFileSync('gdrive.html', 'utf8');

// Find all matches for file names with typical image extensions
const imgMatches = content.match(/[\w\d_.-]+\.(?:jpg|jpeg|png|webp|mp4|mov)/gi);
console.log('Image / media matches:', imgMatches ? Array.from(new Set(imgMatches)) : 'None');

// Look for file arrays in Google Drive initial state
// In Google Drive, data is often in window['_DRIVE_bootstrappedData'] or similar
const idMatches = [];
// File ID is typically 28-35 alphanumeric chars
const regex = /"([a-zA-Z0-9_-]{28,35})"[^\]]*?"([^"\\]+?\.(?:jpg|jpeg|png|webp|heic|mp4))"/gi;
let match;
while ((match = regex.exec(content)) !== null) {
  idMatches.push({ id: match[1], name: match[2] });
}
console.log('Regex 1 matches:', idMatches);

// Let's also search for folder items or JSON blobs
const jsBlocks = content.match(/_DRIVE_bootstrappedData\s*=\s*(\{.*?\});/s) || content.match(/data:\s*(\[.*?\]);/s);
if (jsBlocks) {
  console.log('Found bootstrapped block length:', jsBlocks[1].length);
  fs.writeFileSync('bootstrapped.json', jsBlocks[1]);
} else {
  console.log('No direct bootstrapped data pattern, searching for JSON strings...');
  const driveData = content.match(/window\['viewData'\]\s*=\s*(\[.*?\]);/s);
  if (driveData) {
    console.log('Found viewData');
  }
}
