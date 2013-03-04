/*
 * Serve content over a socket
 */

// fake data generator
var dataGenerator = require('../data/streamdata.js')
var dataParse     = require('../data/echidna-data/d3container.js')


module.exports = function (socket) {

  var d3container = new dataParse.D3Container(30);

  // send app name
  socket.emit('send:name', {

    name: 'Bob'

  });

  // Init feed
  socket.on('client:feed:init', function (data) {

      console.log('client:feed:init')

      // generate data

      console.log(d3container);
      
      var slice;

      for (var i = 0; i < 30; i++) {
      

        slice = dataGenerator.newSlice(5,1,false)[0];

        for (var j = 0; j < slice.length; j++) {

          // console.log(slice[j]);

          d3container.update(slice[j].keyword, slice[j].sliceid, slice[j].count);

        };


      };

      console.log(d3container.current());


      socket.emit('send:feed:init', {

        initdata : d3container.current()

      })
        
  })


  // Update feed 
  socket.on('client:feedConfig', function(config) {

    console.log("websocket - client:feed:config UPDATED");
    console.log(config);

  });


  // Send slices

  /*
  setInterval(function () {

    socket.emit('send:datapoint', {

      datapoint : dataGenerator.newSlice(5,1,false)

    });
  }, 1000);
  */
  


};
