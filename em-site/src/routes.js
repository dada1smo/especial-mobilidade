const path = require('path');
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/pages/index.js`)
  },
  {
    path: '/personagens',
    component: path.resolve(`src/pages/characters.js`)
  },
//   {
//     path: '/404/',
//     component: path.resolve(`src/containers/404.js`)
//   }
];