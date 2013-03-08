/*
 * Serve content over a socket
 */

// fake data generator
var dataGenerator = require('../echidna-data/faker.js')
var dataParse     = require('../echidna-data/d3container.js')


module.exports = function (socket) {

    
    var count = 5;
    // Send init slices
    socket.on('feedconfig', function (data){
        
        console.log(data)

        // console.log(JSON.parse( data.count) )
        // count = JSON.parse( data.count);

    })

    for (var i = 0; i < 50; i++) {

        socket.emit('slice', {

          datapoint : dataGenerator.newSlice(count ,1,true)
    
        });
        
    };

    setInterval(function () {

        socket.emit('slice', {

          datapoint : dataGenerator.newSlice(count ,1,false)
    
        });

      }, 1000);
      


};
