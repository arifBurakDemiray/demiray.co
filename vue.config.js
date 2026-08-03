// Runs the real api/<name>.js handler in the dev server. Without this, /api/* is not
// served at all locally: historyApiFallback only rewrites requests that accept HTML, and
// fetch() sends Accept: */*, so the request falls through to static and 404s.
//
// No handler needs credentials today. If one ever does, read them from a gitignored
// .env.local here rather than hardcoding anything into api/*.js — those files are tracked.
function apiMiddleware(name) {
  return {
    name: `api-${name}`,
    path: `/api/${name}`,
    middleware: (req, res) => {
      let handler;
      try {
        const resolved = require.resolve(`./api/${name}.js`);
        delete require.cache[resolved]; // pick up edits without restarting the dev server
        handler = require(resolved);
      } catch (err) {
        res.status(500).json({ error: `Could not load api/${name}.js: ${err.message}` });
        return;
      }
      Promise.resolve()
        .then(() => handler(req, res))
        .catch(err => {
          if (!res.headersSent) {
            res.status(500).json({ error: err && err.message ? err.message : String(err) });
          }
        });
    }
  };
}

module.exports = {
  devServer: {
    setupMiddlewares(middlewares) {
      middlewares.unshift(apiMiddleware('mal'));
      return middlewares;
    },
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
