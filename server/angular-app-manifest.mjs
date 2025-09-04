
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://vermaabhay734.github.io/Black-Devil/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Black-Devil"
  },
  {
    "renderMode": 2,
    "route": "/Black-Devil/ask-question"
  },
  {
    "renderMode": 2,
    "route": "/Black-Devil/advice"
  },
  {
    "renderMode": 2,
    "route": "/Black-Devil/feedback"
  },
  {
    "renderMode": 2,
    "route": "/Black-Devil/contact"
  },
  {
    "renderMode": 2,
    "redirectTo": "/Black-Devil",
    "route": "/Black-Devil/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12858, hash: 'a0e06518927118b3cae1f430a9bd4710f4187e257412e38e84256dc363de23a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 11200, hash: '8cf72d93970a918bc6c035b11450c40b1f1d7ffa9de00c3044ef1902bd2e81a6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44575, hash: 'ce4864e4bac07895ef48a5eee35f47129f014af42740f1e9043166e9958a7dea', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'advice/index.html': {size: 32563, hash: 'c263a3ef51b61f40d82c64c8a092376dc2fde2d2566da24cc3a33e61d91690d0', text: () => import('./assets-chunks/advice_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 40923, hash: 'cefbfe6d8e549c31285dfc2f988094b330b326430371854b1405d65feb8494dd', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'ask-question/index.html': {size: 35523, hash: '6355239f384d5d4b536723edbce1dc858bf00049dc8a701ac145e905b62d55f2', text: () => import('./assets-chunks/ask-question_index_html.mjs').then(m => m.default)},
    'feedback/index.html': {size: 36828, hash: '522151e47cec239c3da6ea4701ecd5c4b708537406a5df4a6423ee4bee02bafe', text: () => import('./assets-chunks/feedback_index_html.mjs').then(m => m.default)},
    'styles-E2AJAGUC.css': {size: 18184, hash: 'lUBxiNghqto', text: () => import('./assets-chunks/styles-E2AJAGUC_css.mjs').then(m => m.default)}
  },
};
