'use strict';

angular.module('categories').controller('CategoriesController', ['$scope','$stateParams', '$location', 'Categories',
    function($scope, $stateParams, $location, Categories) {

        // Create new Category
        $scope.create = function() {
            // Create new Category object
            var category = new Categories ({
                name: this.name,
                description: this.description
            });

            // Redirect back to main page after save
            category.$save(function(response) {
                $location.path('categories');

                // Clear form fields
                $scope.name = '';
            }, function(errorResponse) {
                $scope.error = errorResponse.data.message;
            });
        };

        $scope.remove = function(category) {
        	if (category) {
        		category.$remove();

        		for (var i in $scope.categories) {
        			if ($scope.categories [i] === category) {
        				$scope.categories.splice(i,1);
        			}
        		}
        	} else {
        		$scope.category.$remove (function(){
        			$location.path('categories');
        		});
        	}

        };

        $scope.update = function() {
        	var category = $scope.category;

        	category.$update(function(){
        		$location.path('categories/' + category._id);
        		}, function (errorResponse) {
        			$scope.error = errorResponse.data.message;
        	});
        };

        // Find a list of Categories
        $scope.find = function() {
            $scope.categories = Categories.query();
        };

        // Find existing Category
        $scope.findOne = function() {
            $scope.category = Categories.get({ 
                categoryId: $stateParams.categoryId
            });
        };

        // Search for a category
     	$scope.categorySearch = function(product) {
         	$location.path('categories/' + product._id);
     	};
    }
]);