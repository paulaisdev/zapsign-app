
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/zapsign-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/zapsign-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23721, hash: '91fb0c75ac22b7c411837d07f430df41f450f2e1d2b9cb7b537ddee1cf6dbd12', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17300, hash: 'e4b70f499b735586da104cd00acf5d4f35245d6add94a930e7ad4583a9f19e79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 100184, hash: '6effdd40700b07f5d8e2aefb91c2cefc0f875bf6691f0740f555ee902cf264a5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
