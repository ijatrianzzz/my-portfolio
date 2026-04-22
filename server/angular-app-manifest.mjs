
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://ijatrianzzz.github.io/my-portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/my-portfolio"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/my-portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 677, hash: 'a03b0a4da27b308fd7987072f95e589ac2d15c3e75b16ca41ff24b92bac187fc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 991, hash: '0945f12166b68594fefa20cfa4bcd347a09490bc4d257cf35444b753e48b028b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 21711, hash: '746ca8929d068e09e8b89658335ba70a5cdcabd655aaf63ce0bff98f33cff9f1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 23067, hash: '1446cf7484cdb8c218ef42855bd9fafbeefa6101789d676506a20892b150b005', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'projects/index.html': {size: 21720, hash: '0e21a2dbab450f2fa49374d58dc9d238a38b7f690da6f42bcca22bfe22aa75d2', text: () => import('./assets-chunks/projects_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 21717, hash: '0510fd59a12cd8b420d8dd4be0098631af30aff5f040c01a0b849e705c2cfa83', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-FASLZB7Q.css': {size: 426, hash: 'cg6+vOo8t1U', text: () => import('./assets-chunks/styles-FASLZB7Q_css.mjs').then(m => m.default)}
  },
};
