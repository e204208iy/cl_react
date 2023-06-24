const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/data",
        createProxyMiddleware({
            target:"https://asia-northeast2-computerliteracywebapp.cloudfunctions.net/cliteracy",
        })
    )
}