(function() {
    'use strict';

    angular
        .module('googleMaps')
        .controller('homesController', controllerinjection)

    controllerinjection.$inject = ['$scope', 'homesFactory', 'usersFactory'];

    function controllerinjection($scope, homesFactory, usersFactory) {
        $scope.$on('sendUser', (event, args) => {
            if (args) {
                this.hideButtonHouse = false;
            }
        });
        this.hidemap = true;
        this.hidelist = false;
        this.currentPage = 0;
        this.pageSize = 10;
        this.propertyName = '';
        this.reverse = true;
        this.EndOfListing = false;
        this.hideButtonHouse = true;
        ////////////////
        this.homes = homesFactory.getXlistings(this.currentPage, this.pageSize);

        this.sortBy = function(propertyName) {
            this.reverse = (this.propertyName === propertyName) ? !this.reverse : false;
            this.propertyName = propertyName;
        };

        this.prevListing = function() { //prev
            this.currentPage--;
            this.homes = homesFactory.getXlistings(this.currentPage, this.pageSize);
        }

        this.nextListing = function() {
            let newListings = homesFactory.getXlistings(this.currentPage + 1, this.pageSize);
            if (newListings.length) {
                this.currentPage++;
                this.homes = newListings;
                this.EndOfListing = false;
            } else {
                this.EndOfListing = true;
            }
        }

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

})();