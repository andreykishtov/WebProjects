(function() {
    'use strict';

    angular
        .module('lanser')
        .component('mainNav', component());


    function component() {

        function componentController(localStorageService, $state, $rootScope, $location) {
            var vm = this;
            vm.title = "nav"


            vm.logout = function(){
                localStorageService.clearAll();
                $rootScope._currentUser = null
                $state.go('login')
            }
            init();

            function init() {

            }
        }

        return {
            bindings: {},
            controller: ['localStorageService', '$state', '$rootScope','$location',componentController],
            controllerAs: 'vm',
            templateUrl: '/components/nav/main-nav.html'
        }
    }

}());