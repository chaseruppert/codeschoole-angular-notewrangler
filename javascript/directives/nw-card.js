angular.module('NoteWrangler')
    .directive('nwCard', [function() {
        return {
            restrict: 'E',
            templateUrl: 'templates/directives/nw-card.html',
            scope: {
                header: "=",
                description: "=",
                image: "="
            },
            controller: function($scope) {
                $scope.header = "Note Title";
                $scope.description = "This is where the note's description goes";
            },
            link: function(scope, element, attrs) {
                //scope.body = $sce.trustAsHtml(markdown.toHTML(scope.body));
                //scope.body = $sce.trustAsHtml(scope.body);

                element.on("click", function() {
                    element("div.card p").toggleClass("hidden");
                });
            }
        };
}]);

