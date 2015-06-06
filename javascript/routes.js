(function() { 

angular.module('NoteWrangler')
    .config(function($routeProvider) {
        $routeProvider.when('/notes', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController',
            controllerAs: 'indexController'
        })
        .when('/notes/new', {
            templateUrl: 'templates/pages/notes/edit.html'
        })
        .when('/notes/:id', {
            templateUrl: 'templates/pages/notes/show.html'
        })
        .when('/users', {
            templateUrl: 'templates/pages/users/index.html'
        })
        .when('/', {
            templateUrl: 'templates/pages/notes/index.html'
        })
        .otherwise({ redirectTo: '/' });
    });

})();
