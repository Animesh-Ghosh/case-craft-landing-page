var liveServer = require("live-server");

var params = {
    port: 8000,
    host: "127.0.0.1",
    open: false,
    ignore: '.yarn, node_modules',
    file: "index.html",
};
liveServer.start(params);
