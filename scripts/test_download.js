// Test downloading a known file or thumbnail
async function testDownload() {
  // Let's test a file ID from the scan
  const fs = require('fs');
  const API_KEY = 'AIzaSyAWGrfCCr7albM3lmCc937gx4uIphbpeKQ';

  // Let's get one image file from a folder
  // Folder: 1YyUEg-4Jot0ZHvhiWSmk43OV-rpczh7z (KITCHENSET)
  const listUrl = `https://www.googleapis.com/drive/v3/files?q='1YyUEg-4Jot0ZHvhiWSmk43OV-rpczh7z'+in+parents&fields=files(id,name,mimeType)&pageSize=5&key=${API_KEY}`;
  const r = await fetch(listUrl);
  const data = await r.json();
  console.log('Subitems of KITCHENSET:', data.files);

  // If there are subfolders, pick the first subfolder
  if (data.files && data.files[0]) {
    const subUrl = `https://www.googleapis.com/drive/v3/files?q='${data.files[0].id}'+in+parents&fields=files(id,name,mimeType)&pageSize=5&key=${API_KEY}`;
    const subR = await fetch(subUrl);
    const subData = await subR.json();
    console.log('Subfolder items:', subData.files);

    // Pick first sub-sub or image
    let sampleFile = null;
    for (const f of (subData.files || [])) {
      if (f.mimeType.startsWith('image/')) {
        sampleFile = f;
        break;
      }
    }
    if (!sampleFile && subData.files && subData.files[0]) {
      const subsubUrl = `https://www.googleapis.com/drive/v3/files?q='${subData.files[0].id}'+in+parents&fields=files(id,name,mimeType)&pageSize=5&key=${API_KEY}`;
      const ssR = await fetch(subsubUrl);
      const ssData = await ssR.json();
      console.log('Subsub items:', ssData.files);
      sampleFile = (ssData.files || []).find(f => f.mimeType.startsWith('image/'));
    }

    if (sampleFile) {
      console.log('Found sample image:', sampleFile);
      // Test download via lh3
      const lh3Url = `https://lh3.googleusercontent.com/d/${sampleFile.id}`;
      const lh3Res = await fetch(lh3Url);
      console.log('lh3 status:', lh3Res.status, 'size:', lh3Res.headers.get('content-length'), 'type:', lh3Res.headers.get('content-type'));

      // Test download via drive API
      const apiDownloadUrl = `https://www.googleapis.com/drive/v3/files/${sampleFile.id}?alt=media&key=${API_KEY}`;
      const apiRes = await fetch(apiDownloadUrl);
      console.log('api alt=media status:', apiRes.status, 'size:', apiRes.headers.get('content-length'));

      // Test drive.usercontent
      const ucUrl = `https://drive.usercontent.google.com/download?id=${sampleFile.id}&export=download&authuser=0`;
      const ucRes = await fetch(ucUrl);
      console.log('drive.usercontent status:', ucRes.status);
    }
  }
}

testDownload();
