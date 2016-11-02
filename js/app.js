angular.module('plunker', [])

  .controller('MainCtrl', function($scope) {
    $scope.foo = {
      bar: 'world'
    };
    
    var employees = [
				{name: "Ben", dateofBirth :new Date("November 23,1980"),gender : "Male", salary:5500},
				{name: "John", dateofBirth :new Date("May 23,1980"),gender : "Male", salary:4500},
				{name: "Anna", dateofBirth :new Date("June 23,1980"),gender : "Male", salary:6500}
		];
		
		$scope.employees = employees;
		$scope.sortColumn = "name";
		$scope.reverseSort = false;
		
		$scope.sortData = function(column)
		{
		  $scope.reverseSort = ($scope.sortColumn == column ?
		  !$scope.reverseSort : false);
		  $scope.sortColumn = column;
		}
		$scope.getSortClass = function(column)
		{
		  if($scope.sortColumn == column){
		    return $scope.reverseSort ? "arrow-up" : "arrow-down";
		  }
		  return "";
		}
  });

