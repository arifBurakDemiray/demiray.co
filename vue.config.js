module.exports = {
  devServer: {
    proxy: {
      '/mal-proxy/animelist': {
        target: 'https://myanimelist.net',
        changeOrigin: true,
        pathRewrite: (path) => {
          return path.replace('/mal-proxy/animelist', '/animelist/euxinos/load.json?status=7&offset=0');
        },
        onProxyReq(proxyReq) {
          proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (compatible; demiray.co/1.0)');
        }
      },
      '/mal-proxy/mangalist': {
        target: 'https://myanimelist.net',
        changeOrigin: true,
        pathRewrite: (path) => {
          return path.replace('/mal-proxy/mangalist', '/mangalist/euxinos/load.json?status=7&offset=0');
        },
        onProxyReq(proxyReq) {
          proxyReq.setHeader('User-Agent', 'Mozilla/5.0 (compatible; demiray.co/1.0)');
        }
      }
    }
  }
};
