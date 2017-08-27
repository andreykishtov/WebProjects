(function() {
    'use strict';

    angular
        .module('googleMaps')
        .factory('homesFactory', homesFactory);


    function homesFactory() {
        var homesFactory = {};

        var homes = homesjson;


        homesFactory.gethomes = function() {
            return homes;
        };

        homesFactory.addHome = function(home) {
            return homes.push(home)
        }

        homesFactory.remove = function(home) {
            return homes.splice(home, 1)
        }

        homesFactory.initMap = function(homes) {
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 3,
                center: { lat: parseInt(homes[0].latitude), lng: parseInt(homes[0].longitude) }
            });
            for (var mark of homes) {
                var marker = new google.maps.Marker({
                    position: { lat: parseInt(mark.latitude), lng: parseInt(mark.longitude) },
                    map: map
                });
            }
        }

        return homesFactory;
    }
})();