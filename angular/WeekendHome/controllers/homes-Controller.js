(function() {
    'use strict';

    angular
        .module('googleMaps')
        .controller('homesController', controllerinjection)
        .filter('startFrom', startFrom);

    controllerinjection.$inject = ['homesFactory', 'usersFactory'];

    function controllerinjection(homesFactory, usersFactory) {
        this.hidemap = true;
        this.hidelist = false;
        this.currentPage = 0;
        this.pageSize = 10;
        this.propertyName = '';
        this.reverse = true;
        ////////////////
        this.homes = homesFactory.gethomes();

        this.sortBy = function(propertyName) {
            this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
            this.propertyName = propertyName;
        };

        this.addHome = function() {
            var home = {
                ownerId: this.ownerId,
                price: this.price,
                Rooms: this.Rooms,
                latitude: this.latitude,
                longitude: this.longitude,
                description: this.description
            };
            homesFactory.addHome(home);
        };

        homesFactory.initMap(this.homes);
    }

    function startFrom() {
        return function(input, start) {
            start = +start; //parse to int
            return input.slice(start);
        }
    }
})();