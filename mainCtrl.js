
angular.module('mapleApp').controller('homeCtrl', function($scope, $rootscope){

  $rootScope.$on('$stateChangeSuccess', function() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
 });


})
