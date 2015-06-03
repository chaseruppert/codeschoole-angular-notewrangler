(function() { 

var app = angular.module('NoteWrangler', ['ngRoute']);

app.controller('MainCtrl', function($scope) {
  $scope.name = 'World';
});

})();
