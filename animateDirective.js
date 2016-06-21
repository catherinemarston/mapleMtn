angular.module('mapleApp').directive('animateDirective', function(){

  return {
        restrict: 'EA',

        link: function ($scope, element, attrs) {
            element.bind('mouseenter', function () {
                element.css("transform", "scale(1.2)");
                element.css("transition", ".5s");
            });
            element.bind('mouseleave', function () {
                element.css("transform", "initial");
            });
        }
    }
})
