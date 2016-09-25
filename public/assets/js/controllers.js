/* Summary:         Controller definitions
*
* Descriptions:     This program provides the controller functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-19
*/

project.controller('mainController', ['$scope', '$filter', '$http', '$log', '$timeout', '$routeParams','projectApp1', function ($scope, $filter, $http, $log, $timeout, $routeParams, projectApp1) {
    
    $scope.companyDetails =
    {
        'appName': 'SCORM Catalog',
        'appYear': '2012',
        'companyName': 'Acme Widget',
        'companyAddress': '5 Brickell Ave',
        'companyCity': 'Miami-Brickell',
        'companyState': 'FL',
        'companyZip': '33131',
        'companyPhone': '305-555-5555',
        'companyEmail': 'acme@acme.com'
    };

}]);

// About Page
project.controller('aboutCOntroller', ['$scope', '$filter', '$http', '$log', '$timeout', '$location', '$routeParams', function ($scope, $filter, $http, $log, $timeout, $location, $routeParams) {

    $scope.name = 'About Page';
	$scope.title = $routeParams.title;
}]);

// Contact Page
project.controller('contactController', ['$scope', '$filter', '$http', '$log', '$timeout', '$location', function ($scope, $filter, $http, $log, $timeout, $location) {

    $scope.name = 'Contact Page';
}]);


// Application1
project.controller('applicationController1', ['$scope', '$filter', '$http', '$log', '$timeout', '$resource', '$location','$routeParams','$interval', 'projectApp1', function ($scope, $filter, $http, $log, $timeout, $resource, $location, $routeParams, $interval, projectApp1) {
    
        //$scope.products = projectApp1.products();
        $scope.products = "";


        $http.get('products').success(function (result) { 
            $log.info('Successfully got data from API!');
            // debug > # of returned objects > $log.info('JSONObject: ' + result );
            $scope.products = result; // attatch results to scope of scope variable
        }).error(function (data, status) { // return pre-configged data on error
            $log.error('API Error: ' + data + '(' + status + ')');
        });

}]); 
