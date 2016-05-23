'use strict';

angular.module('webdesignProjects2015')
  .controller('MainCtrl', function ($scope, projectsService) {

    $scope.awesomeThings = projectsService.projects;
    
    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
