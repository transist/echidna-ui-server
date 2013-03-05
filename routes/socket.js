/*
 * Serve content over a socket
 */

// fake data generator
var dataGenerator = require('../data/streamdata.js')
var dataParse     = require('../data/echidna-data/d3container.js')


module.exports = function (socket) {


  // Send init slices
  socket.on('feedconfig', function (data){
    console.log(data)
  })

  setInterval(function () {

    socket.emit('slice', {

      datapoint : dataGenerator.newSlice(5,1,false)[0]

    });
  }, 1000);
  


};
