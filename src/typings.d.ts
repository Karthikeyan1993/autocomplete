$scope.sortingArrowClass = function(propertyName) {
         
                
                 if($scope.propertyName == propertyName && !$scope.reverse)
                     {
                         return 'fa fa-caret-down';
                     }
                 else if($scope.propertyName == propertyName && $scope.reverse)
                     {
                        return 'fa fa-caret-up'; 
                     }
                 else if(!$scope.propertyName || $scope.propertyName != propertyName){
                     return 'fa fa-sort'; 
                 } 

            };
