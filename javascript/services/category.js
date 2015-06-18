(function(){

angular.module('NoteWrangler')
    .factory('Category', function CategoryFactory($http, $q) {
        return {
            all: function() { },
            query: function() { }
        };
    });

})();
