(function() {
    'use strict';

    angular
        .module('gatewayApp')
        .controller('SidebarController', SidebarController);

    SidebarController.$inject = ['$state', 'Auth', 'Principal', 'ProfileService', 'LoginService'];

    function SidebarController ($state, Auth, Principal, ProfileService, LoginService) {
        var vm = this;
        vm.isAuthenticated = Principal.isAuthenticated;
    }
})();
