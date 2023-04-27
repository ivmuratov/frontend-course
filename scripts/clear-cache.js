const fs = require('fs');
const path = require('path');

const dirPath = path.resolve(__dirname, '..', 'node_modules', '.cache');

fs.rm(dirPath, { recursive: true, force: true }, (err) => {
  if (err) {
    console.log(err);
  }
});