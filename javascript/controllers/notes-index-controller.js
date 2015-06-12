(function() { 

angular.module('NoteWrangler')
    .controller('NotesIndexController', [ '$http' , function($http) {
        var controller = this;
        
        $http({method: 'GET', url: '/data/notes.json'}).success(function(data) {
            controller.notes = data;
        });
    }]);

})();
