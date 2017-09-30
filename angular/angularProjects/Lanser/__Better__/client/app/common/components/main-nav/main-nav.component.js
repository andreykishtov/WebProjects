(function () {
  

  // Usage:
  //
  // Creates:
  //

  angular.module('lanser').component('mainNav', {
    templateUrl: 'common/components/main-nav/main-nav.html',
    controller: mainNavController,
    controllerAs: 'vm',
    bindings: {},
  });

  mainNavController.$inject = ['localStorageService', '$state', '$rootScope', '$location', '$scope'];
  function mainNavController(localStorageService, $state, $rootScope, $location, $scope) {
    let vm = this;
    vm.navButton=[{title:'home',show:true},{title:'login',show:false},{title:'profile',show:true}];
    vm.title = 'nav';
    vm.loginHeader = null;
    vm.logout = logout;
    vm.makeActive = makeActive;

    $scope.$on('userIsLoggedIn', () => {
            init();
        });

    init();

    // ///////////////////
    function init() {
      const login = localStorageService.get('userId');
      vm.loginHeader = login ? `Hello ${login.name} you are logged in` : '';
      vm.loggedIn = !!login;
    }

    function logout() {
      localStorageService.clearAll();
      init();
      $state.go('login');
    }

    function makeActive(nameOfActive) {
      if (vm.old) {
        vm[vm.old] = '';
      }
      vm[nameOfActive] = 'navClass';
      vm.old = nameOfActive;
    }
  }
}());
