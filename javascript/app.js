(function() { 

angular.module('NoteWrangler', ['ngRoute', 'Gravatar'])
    //.config(function(GravatarProvider) {
    .config(function($gravatarProvider) {
        $gravatarProvider.setSize(100);
    })
    .controller('MainCtrl', function($scope) {
        $scope.name = 'World';
    });

})();
