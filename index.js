const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
console.log(express.static(path.join(__dirname, 'dist')));
express()
  .use(express.static('dist'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));
