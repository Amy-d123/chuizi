const proxy = require('http-proxy-middleware');// node 中间件
module.exports = function(app) {
  app.use(
    '/mobile',
    proxy({
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/product',
    proxy({
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
    })
  );

  app.use(
    '/v1',
    proxy({
      target: 'https://shopapi.smartisan.com',
      changeOrigin: true,
    })
  );
};
