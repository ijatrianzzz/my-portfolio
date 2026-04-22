
export default {
  basePath: 'https://ijatrianzzz.github.io/my-portfolio',
  allowedHosts: [],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
