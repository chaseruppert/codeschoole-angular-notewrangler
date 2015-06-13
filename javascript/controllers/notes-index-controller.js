(function() { 

angular.module('NoteWrangler')
    .controller('NotesIndexController', [ '$http' , '$scope', function($http, $scope) {
        
        $http({method: 'GET', url: '/data/notes.json'}).success(function(data) {
            $scope.notes = data;
        });
    }]);

})();
