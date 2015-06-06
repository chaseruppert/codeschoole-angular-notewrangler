(function() { 

angular.module('NoteWrangler', ['ngRoute'])
    .controller('MainCtrl', function($scope) {
        $scope.name = 'World';
    });

})();
