/*
 * Serve content over a socket
 */

// fake data generator
var dataGenerator = require('../echidna-data/faker.js')
var dataParse     = require('../echidna-data/d3container.js')


module.exports = function (socket) {

    // Send init slices
    socket.on('feedconfig', function (data){
        console.log(data)
    })

    for (var i = 0; i < 30; i++) {

        socket.emit('slice', {

          datapoint : dataGenerator.newSlice(5,1,false)
    
        });
        
    };

    setInterval(function () {

        socket.emit('slice', {

          datapoint : dataGenerator.newSlice(5,1,false)
    
        });

      }, 1000);
      


};
