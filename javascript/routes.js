(function() { 

angular.module('NoteWrangler')
    .config(function($routeProvider) {
        $routeProvider.when('/notes', {
            templateUrl: 'templates/pages/notes/index.html',
            controller: 'NotesIndexController'
        })
        .when('/notes/new', {
            templateUrl: 'templates/pages/notes/edit.html',
            controller: 'NotesCreateController'
        })
        .when('/notes/:id', {
            templateUrl: 'templates/pages/notes/show.html',
            controller: 'NotesShowController',
            controllerAs: 'showController'
        })
        .when('/users', {
            templateUrl: 'templates/pages/users/index.html'
        })
        .when('/', {
            redirectTo: '/notes'
        })
        .otherwise({ redirectTo: '/' });
    });

})();
