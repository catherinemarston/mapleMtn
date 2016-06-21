angular.module('mapleApp').controller('mainCtrl', function($window, $scope, $rootScope){
  $scope.confirmedLegal = $window.localStorage.getItem('legal');
  console.log($scope.confirmedLegal);

  $rootScope.$on('$stateChangeStart', function() {
    $scope.confirmedLegal = $window.localStorage.getItem('legal');
  });
});

// $rootScope.$on('$stateChangeSuccess', function() {
//   document.body.scrollTop = document.documentElement.scrollTop = 0;
