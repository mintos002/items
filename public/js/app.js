angular.module("ngItems", ['ngRoute', 'ui.bootstrap', 'ngMessages'])
  //---------------------------------
  // CONFIG ROUTES
  //---------------------------------
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/views/home.html",
        controller: "HomeController"
      })
      .when("/signup", {
        controller: "SignupController",
        templateUrl: "/views/signup.html"
      })
      .when("/login", {
        controller: "LoginController",
        templateUrl: "/views/login.html"
      })
      .when("/logout", {
        controller: "LogoutController"
      })
      .when("/account", {
        controller  : "AccountController",
        templateUrl : "/views/account.html"
      })
      .when("/profile", {
        controller: "ProfileController",
        templateUrl: "/views/profile.html"
      })
      .when("/likeditems",{
        controller: "LikedController",
        templateUrl: "/views/likeditems.html"
      })
      .otherwise({
        redirectTo: "/"
      })
  })
