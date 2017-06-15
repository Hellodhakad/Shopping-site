var app = angular.module("MyApp",['ngRoute']);
app.config(function($routeProvider){
	$routeProvider
	.when("/",
	{
		templateUrl:"main.html",
	})
	.when("/products",
	{
		templateUrl:"products.html",
		controller:'household_ctrl'
	})
	.when("/household",
	{
		templateUrl:"household.html",
		controller:'household_ctrl'
	})
	.when("/kitchen",
	{
		templateUrl:"kitchen.html"
	})
	.when("/drinks",
	{
		templateUrl:"drinks.html",
		controller:'household_ctrl'

	})
	.when("/about",
	{
		templateUrl:"about.html"
	})
	.when("/faqs",
	{
		templateUrl:"faqs.html"
	})
	.when("/login",
	{
		templateUrl:"login.html",
		controller:"login_ctrl"
	})
	.when("/mail",
	{
		templateUrl:"mail.html",
		controller:"mail_ctrl"
	})
	.when("/single",
	{
		templateUrl:"single.html"
	})
	.otherwise({
		redirectTo:'/'
	});
});

app.controller("login_ctrl", function($scope){
	
})

app.controller("mail_ctrl", function($scope){
	
})

app.controller("household_ctrl", function($scope, $http){
	$http.get("items.json").then(function(res){
		$scope.data1 = res.data;
	})
	
})


