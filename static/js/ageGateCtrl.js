angular.module('mapleApp').controller('ageGateCtrl', function($window, $scope){
  $scope.confirm = function() {
    $window.localStorage.setItem('legal', true);
  };
});
