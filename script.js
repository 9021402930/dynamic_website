var app = angular.module("computer", ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: "main.html",
        })
            .when("/about", {
                templateUrl: "about.html"
            })
            .when("/contact", {
                templateUrl: "contact.html",
                controller: "contactCtrl"
            })
            .when("/services", {
                templateUrl: "services.html",
                controller: "servicesCtrl"
            })
            .otherwise({
                templateUrl: "main.html"
            })
    })

    .controller("servicesCtrl", function ($scope, $http) {
        $scope.products = [];
        $http.get('api/services.json').then(function (res) {
            $scope.products = res.data;
        })
    })

    .controller("contactCtrl", function ($scope, $http) {
        $scope.contactinfo = [];
        $http.get('api/contact.json').then(function (res) {
            $scope.contactinfo = res.data;
        })
    });