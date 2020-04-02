console.log("map api js working");

var bounds = new google.maps.LatLngBounds();
var infowindow = new google.maps.InfoWindow();


function initMap() {

    var map;
    var markers = [];

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 2,
        fullscreenControl: false,
        mapTypeControl: false,
        mapTypeId: 'terrain'
    });

    var marker_config = [{
        position: { lat: 52.630152, lng: -1.139884 },
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale: 4
        },
        map: map,
        animation: google.maps.Animation.BOUNCE,
        draggable: false,
        title: 'DMU'
    }, {
        position: { lat: 22.306591, lng: 114.235081 },
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale: 4
        },
        map: map,
        animation: google.maps.Animation.BOUNCE,
        draggable: false,
        title: 'SHSS'
    }];

    marker_config.forEach(function(e, i) {
        markers[i] = new google.maps.Marker(e);
        markers[i].setMap(map);
        markers[i].addListener('click', function() {
            map.setZoom(14);
            map.setCenter(markers[i].getPosition());
        });
    });

    var lat_1 = 52.630152;
    var lat_2 = 25.035;
    var lng_1 = 22.306591;
    var lng_2 = 114.235081;

    map.setCenter(new google.maps.LatLng(
        ((lat_1 + lat_2) / 2.0),
        ((lng_1 + lng_2) / 2.0)
    ));
    map.fitBounds(new google.maps.LatLngBounds(
        //bottom left
        new google.maps.LatLng(lat_1, lng_1),
        //top right
        new google.maps.LatLng(lat_2, lng_2)
    ));




}