(function(){

angular.module('NoteWrangler')
    .directive('nwCategorySelect', function(Category) {
        return {
            replace: true,
            restrict: "E",
            templateUrl: "/templates/directives/nw-category-select.html",
            controller: function($scope) {
                this.getActiveCategory = function() {
                    return $scope.activeCategory;
                };

                this.setActiveCategory = function(category) {
                    $scope.activeCategory = category;
                };

                return this;
            },
            link: function(scope, element, attrs) {
                scope.categories = Category.query();
            }
        };
    });

})();
