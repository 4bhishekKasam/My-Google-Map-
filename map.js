function initMap() {
    //map options
    var options = {
        zoom: 7,
        center: { lat: 17.6805, lng: 74.0183 }
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    //array of markers
    var markers = [
        {
            coords: { lat: 15.8497, lng: 74.4977 },
            content: '<h5>Belagavi, KA</h5>'
        },
        {
            coords: { lat: 18.5204, lng: 73.8567 },
            content: '<h5>Pune, MH</h5>'
        }
    ];

    //loop through marker
    for (var i = 0; i < markers.length; i++) {
        addMarker(markers[i]);
    }

    //  addMarker({ lat: 15.8497, lng: 74.4977 });
    //   addMarker({ lat: 18.5204, lng: 73.8567 });

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            draggable: true,
            animation: google.maps.Animation.DROP
        });
        // marker.addListener('click', toggleBounce);   
        marker.addListener('click', function () {
            infoWindow.open(map, marker);
        });

        var infoWindow = new google.maps.InfoWindow({
            content: props.content
        });
    }

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
        }
    }

}