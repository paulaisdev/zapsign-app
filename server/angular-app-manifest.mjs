
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
    'index.csr.html': {size: 23748, hash: '7ffb3388d9afd11426f0424a1c63d4eafa88f953efa153062157c2c60b48b986', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17326, hash: '28e1ab600863b6d6a009579cdafa30b243deb98bf180695bd13071df0822c847', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 100211, hash: 'a352394b0df63501e118c06f2b50a4f15b618e96d791b737d0f754908261f5eb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
