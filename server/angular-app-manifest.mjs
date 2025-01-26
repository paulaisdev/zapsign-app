
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
    'index.csr.html': {size: 23574, hash: 'cd722f690fe2733b0324b6b3b264f8dbc1dfb277804c77d054d400e953ca6333', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17148, hash: 'f5e9ccec16d4705f48a6750fe9354b3e8b2d0a88d561fbe3975679c769df7a41', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 103452, hash: '83c8405df9a82df4df34670e12f8bf8cf72d92db9a884ac2a407e0fd86eb4525', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
