angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.listing);
      $scope.listing = "";
    };
    $scope.deleteListing = function(index) {
      for(i in $scope.listings){
        if(index.code == $scope.listings[i].code){
          $scope.listings.splice(i, 1);
          if($scope.detailedInfo == index){
            $scope.detailedInfo = undefined;
          }
        }
      }
      return;
    };
    $scope.showDetails = function(index) {
      $scope.detailedInfo = index;
      return;
    };
  }
]);