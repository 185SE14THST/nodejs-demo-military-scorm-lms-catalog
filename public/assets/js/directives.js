/* Summary:         Directive definitions
*
* Descriptions:     This program provides the Directive functionality for AngularJS Application
*
* Programmer:       185SE14THST
*
* Date:             2016-09-19
*/

project.directive('productList', function () {
    return {
        restrict: 'AECM',
        templateUrl: 'assets/dir/productlist.html',
        replace: true, 
        scope: {
            productObject: "=", 
			
        }, 
    };
});


