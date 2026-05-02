const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/sanity',
    createProxyMiddleware({
      target: 'https://y4qd00ml.api.sanity.io',
      changeOrigin: true,
      pathRewrite: {
        '^/api/sanity': '',
      },
    })
  );
};