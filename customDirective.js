angular.module('mapleApp').directive('coolDirective', function(){
  return {
    restrict: 'EA',
    link: function($scope, element, attrs) {
      $(document).ready(function(){
        $(this).scrollTop(0);
      });
    }
  }
});
