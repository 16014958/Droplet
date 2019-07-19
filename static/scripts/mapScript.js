  function initMap() {
            // var latlng = new google.maps.LatLng(-33.92, 151.25);
            var myOptions = {
                zoom: 18.2  ,
                center: new google.maps.LatLng(-41.582316, 173.789605),
                // mapTypeId: 'satellite',
                mapTypeControl: false,
                disableDefaultUI: true,
                styles:
                  [
        {
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#99b0b9"
            }
          ]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#8ec3b9"
            }
          ]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1a3646"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#f0f7f3"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#64779e"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#4b6878"
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#334e87"
            }
          ]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#ffffff"

            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#6f9ba5"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#3C7680"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#304a7d"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#2c6675"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#255763"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#b0d5ce"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#023e58"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#98a5be"
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#1d2c4d"
            }
          ]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#283d6a"
            }
          ]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#3a4762"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#0e1626"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#5588bb"
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#4e6d70"
            }
          ]
        }
        ]








};



      var getM = new XMLHttpRequest();
      getM.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          markers = JSON.parse(getM.responseText);
           soilMoistureLana();
        }
        else {
            console.log(this.readyState, this.status);
        }
      };
      getM.open('GET', '/SoilMoistureLana');
      getM.send();

function soilMoistureLana() {



  for (i = 0; i < markers.length; i++) {






        var dot = document.createElementNS('http://www.w3.org/2000/svg','circle')
        dot.setAttribute('class', 'h' );
        dot.setAttribute('fill', 'green');
        dot.setAttribute('id', markers[i][5] + 'Soil' );
        // dot.setAttribute('id', 'Lana' );
        dot.setAttribute('cx', ((markers[i][7]*4.5) + 90 ) + ((markers[i][8] * 16.57894) - 16.57894)         );
        dot.setAttribute('cy', (markers[i][7]* 0.75 ) + 530  - ((markers[i][8] * 26.68421) - 26.68421)       );
        dot.setAttribute('r', 5);
        dot.setAttribute('opacity', 0);

        document.getElementById('SoilMoistureLana').appendChild(dot);


        //
        // var d = document.createElementNS('http://www.w3.org/2000/svg','circle')
        // // d.setAttribute('class', 'h' );
        // d.setAttribute('fill', 'pink');
        // d.setAttribute('cx', 635.5);
        // d.setAttribute('cy', 644.775);
        // d.setAttribute('r', 5);
        // document.getElementById('rows').appendChild(d);





        var li = document.createElementNS('http://www.w3.org/2000/svg','line')
        li.setAttribute('class', 'st3' );
        li.setAttribute('id', 'Lana' + markers[i][7])
        li.setAttribute('x1', (markers[i][7]*4.5) + 90 );
        li.setAttribute('y1', (markers[i][7]* 0.75 ) + 530 );


        if (markers[i][5] > 74){
          li.setAttribute('x2', (markers[i][7]* -0.3928571429) + 600.5 );
          li.setAttribute('y2', (markers[i][7] * 8.392857143 ) - 270.775);
        }

        else if (markers[i][5] > 45 ){
          li.setAttribute('x2', (markers[i][7]* -0.3928571429) + 656.5 );
          li.setAttribute('y2', (markers[i][7] * 8.392857143 ) - 364.775);
        }


        else {
          li.setAttribute('y2', (markers[i][7]* - 0.2875 ) + 23);
          li.setAttribute('x2', (markers[i][7]* 5.25) + 405 );
        }






        document.getElementById('rows').appendChild(li);



}






}



      var getG = new XMLHttpRequest();
      getG.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          growth = JSON.parse(getG.responseText);
            growLana();
        }
        else {
            console.log(this.readyState, this.status);
        }
      };
      getG.open('GET', '/GrowthLana');
      getG.send();



  function growLana() {


    for (i = 0; i < growth.length; i++) {






          var gr = document.createElementNS('http://www.w3.org/2000/svg','circle')
          // gr.setAttribute('class', 'h' );
          gr.setAttribute('fill', 'green');
          gr.setAttribute('id', growth[i][5] + 'Growth')
          gr.setAttribute('cx', ((growth[i][7]*4.5) + 90 ) + ((growth[i][8] * 16.57894) - 16.57894)         );
          gr.setAttribute('cy', (growth[i][7]* 0.75 ) + 530  - ((growth[i][8] * 26.68421) - 26.68421)       );
          gr.setAttribute('r', 5);
          gr.setAttribute('opacity', 0);
          document.getElementById('rows').appendChild(gr);


            }


  }






      var getP = new XMLHttpRequest();
      getP.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          posts = JSON.parse(getP.responseText);
           postLana();
        }
        else {
            console.log(this.readyState, this.status);
        }
      };
      getP.open('GET', '/brokenPostsLana');
      getP.send();






function postLana() {


  for (i = 0; i < posts.length; i++) {






        var po = document.createElementNS('http://www.w3.org/2000/svg','circle')
        po.setAttribute('class', 'Posts' );
        po.setAttribute('fill', 'red');
        po.setAttribute('id', posts[i][3]  + 'brokenPosts'  )
        po.setAttribute('cx', ((posts[i][4]*4.5) + 90 ) + ((posts[i][5] * 16.57894) - 16.57894)         );
        po.setAttribute('cy', (posts[i][4]* 0.75 ) + 530  - ((posts[i][5] * 26.68421) - 26.68421)       );
        po.setAttribute('r', 3);
        po.setAttribute('opacity', 0);
        document.getElementById('rows').appendChild(po);






          }




}






      var getS = new XMLHttpRequest();
      getS.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          spray = JSON.parse(getS.responseText);
            spLana();
        }
        else {
            console.log(this.readyState, this.status);
        }
      };
      getS.open('GET', '/SprayLana');
      getS.send();





  function spLana() {



//Spray data pull through







  }






      var getD = new XMLHttpRequest();
      getD.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          disease = JSON.parse(getD.responseText);
            desLana();
        }
        else {
            console.log(this.readyState, this.status);
        }
      };
      getD.open('GET', '/DiseaseLana');
      getD.send();


function desLana(){

  for (i = 0; i < disease.length; i++) {






        var di = document.createElementNS('http://www.w3.org/2000/svg','circle')
        di.setAttribute('class', 'disease' );
        di.setAttribute('fill', 'blue');
        di.setAttribute('id', disease[i][5] + 'Disease');

        di.setAttribute('cx', ((disease[i][8]*4.5) + 90 ) + ((disease[i][9] * 16.57894) - 16.57894)         );
        di.setAttribute('cy', (disease[i][8]* 0.75 ) + 530  - ((disease[i][9] * 26.68421) - 26.68421)       );
        di.setAttribute('r', 3);
        di.setAttribute('opacity', 0);
        document.getElementById('rows').appendChild(di);






          }

}









      var broken_irrigation = [];
      var irrigation = [];
      var wires = [];
      var spray = [];
      var posts = [];
      var growth = [];
      var markers = [];
      var disease = [];













      var map = new google.maps.Map(document.getElementById('map'),myOptions);
      var infowindow = new google.maps.InfoWindow(), marker, i;




var center = {lat: xmas + 0.00005, lng: rik}


    var cityCircle = new google.maps.Circle({
            // strokeColor: '#FF0000',
            // strokeOpacity: 0.8,
            // strokeWeight: 2,
            // fillColor: '#FF0000',
            // fillOpacity: 0.35,
            // map: map,
            // center: center,
            // radius: 5,
            // zIndex: 100,
          });




    if (!navigator.geolocation){

      return;
    }

    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;




        var c = {lat: latitude  , lng: longitude}
        var myLocation = new google.maps.Circle({
                // strokeColor: 'blue',
                strokeOpacity: 0.8,
                strokeWeight: 0,
                fillColor: 'green',
                fillOpacity: 0.1,
                map: map,
                center: c,
                radius: 100,
                // zIndex: 100,
              });



                // m = new google.maps.Marker({
                //     // position: new google.maps.LatLng( (markers[i][5] * - 0.00003182) - 41.581070 , (markers[i][6] * 0.00006134 )  + 173.787991 ),
                //     position: new google.maps.LatLng(latitude, longitude),
                //     map: map,
                //     icon: icon,
                //     // marker.set("id", 1)
                // });

      // output.innerHTML = '<input type="text" value=" ' + latitude + '   " name="row"  /> ';
      // put.innerHTML = '<input type="text" value=" ' + longitude + '  "  name="bay" />' ;

      // output.appendChild(img);
    }

    function error() {
      // output.innerHTML = "Unable to retrieve your location";
    }


    navigator.geolocation.getCurrentPosition(success, error);












//For SoilMoisture Location.

var xmas = (markers[i][5] *  - 0.0000032125) - 41.583444 + ken - 0.0001256842  ;

var ken = (markers[i][6] *  0.0001256842)  ;

var ol = (markers[i][6] * 0.000100021);

var rik = ((markers[i][5] * 0.000027125 )  + 173.787684) + ol - 0.000100021  ;










//  NOTE
//  X == longitude
//  Y == latitude









        // marker = new google.maps.Marker({
        //     position: new google.maps.LatLng( xmas , rik ),
        //     // position: new google.maps.LatLng(latitude, longitude),
        //     map: map,
        //     icon: icon,
        //     // marker.set("id", 1)
        // });





          google.maps.event.addListener(cityCircle, 'click', (function() {
              return function() {
                  // icon.setAttribute('opacity', 0.5),

                  infowindow.setContent( 'R' + markers[i][5] + '  ' +  (( (markers[i][5] *  - 0.0000032125) - 41.583444)    +  (markers[i][6] *  0.0001201) - 0.0001201  )       + 'B' + markers[i][6]  );
                  // infowindow.setContent(latitude);
                  infowindow.open(map, marker);
                  // infoWindow.style.backgroundColor = "red";
              }
          })(marker, i));
      }
