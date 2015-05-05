var app = require('./server/config_server.js');

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('Server Running...');
});
