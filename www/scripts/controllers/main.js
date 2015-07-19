'use strict';


angular.module('angularApp')
  .controller('MainCtrl', function($scope, $location) {
    $scope.menuBarIsCollapsed = true;
    $scope.isMenuBarCollapsed = function () {
      return $scope.menuBarIsCollapsed;
    };
    $scope.toggleMenuBar = function (event) {
      event.preventDefault();
      $scope.menuBarIsCollapsed = !$scope.menuBarIsCollapsed;
      if(event.target.hash !== undefined) {
        console.log(event.target.hash.replace(/#/g, ''));
        $location.url(event.target.hash.replace(/#/g, ''));
      }
    };
    $scope.isActive = function (viewLocation) {
    	var currentPath = $location.path();
      return viewLocation === currentPath;
    };
  });
