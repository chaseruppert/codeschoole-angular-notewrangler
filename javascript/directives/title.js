(function(){

angular.module('NoteWrangler')
    .directive('title', function($timeout) {
        return {
            // Directives are restricted by attribute 'A' by default,
            // but we specify it here for completeness.
            restrict: "A",
            link: function(scope, element) {
                // Use a timeout to force angular to run through the event loop
                // before processing our link function. This is because our
                // {{header}} info isn't populated yet because the link function
                // runs before everything else.
                $timeout(function() {
                    // Use bootstrap's tooltip
                    element.tooltip({container: "body"});
                });

                scope.$on('$destroy', function() {
                    element.tooltip('destroy');
                });
            }
        };
    });

})();
