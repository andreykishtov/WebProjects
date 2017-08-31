(function() {
    'use strict';

    // Usage:
    // 
    // Creates:
    // 

    angular
        .module('myApp')
        .component('homeComponent', {
            templateUrl: '/template/home-component.html',
            controller: homeComponent,
            controllerAs: 'vm',
            bindings: {
                // me: "="
            },
        });

    homeComponent.$inject = [];

    function homeComponent() {
        var vm = this;

        vm.home = {
            "ownerId": 1,
            "price": 4286,
            "Rooms": 3,
            "latitude": 38.6273566,
            "longitude": -9.123079,
            "description": "in faucibus orci luctus et ultrices posuere cubilia curae nulla dapibus dolor vel est"
        }

    }

})();