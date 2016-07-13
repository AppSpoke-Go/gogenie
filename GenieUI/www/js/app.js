var app = angular.module('ionicApp', ['ionic','angular.filter','ngStorage'])
app.run(function($ionicPlatform, $ionicPopup, $state, $rootScope, $ionicHistory,$window) {
	$rootScope.$on('$cordovaNetwork:offline', function() {$state.go('offline');  });
	$rootScope.online = navigator.onLine;
      $window.addEventListener("offline", function () {
        $rootScope.$apply(function() {
          $rootScope.online = false;
		  $state.go('offline'); 
        });
      }, false);
      $window.addEventListener("online", function () {
        $rootScope.$apply(function() {
          $rootScope.online = true;
        });
      }, false);
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})
app.config(function($ionicConfigProvider) {

  // note that you can also chain configs
  $ionicConfigProvider.backButton.text('');
});
app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
	.state('tabs', {
      url: '/tabs',
      templateUrl: 'templates/tabs.html',
      abstract: true
    })
    .state('tabs.soft', {
      url: '/soft',
      views: {
        'tab-view': {
             templateUrl: 'templates/soft.html'   
        }
      }
    })
	.state('tabs.full', {
      url: '/full',
      views: {
        'tab-view': {
             templateUrl: 'templates/full.html'   
        }
      }
    })
    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html",
		  controller: 'searchcontroller'
        }
      }
    })
	.state('app.searchmap', {
      url: "/searchmap",
      views: {
        'menuContent' :{
          templateUrl: "templates/searchmap.html",
		  controller: 'searchcontroller'
        }
      }
    })
	.state('app.menuitems', {
      url: "/menuitems/:id",
      cache: false,
      views: {
        'menuContent' :{
          templateUrl: "templates/menuitems.html",
		  controller: 'menuitemscontroller'
        }
      }
    })
	.state('app.contact', {
      url: "/contact",
      views: {
        'menuContent' :{
          templateUrl: "templates/contact.html"
        }
      }
    })
	.state('app.reportissue', {
      url: "/reportissue",
      views: {
        'menuContent' :{
          templateUrl: "templates/reportissue.html"
        }
      }
    })
	.state('app.suggestidea', {
      url: "/suggestidea",
      views: {
        'menuContent' :{
          templateUrl: "templates/suggestidea.html"
        }
      }
    })
	.state('app.suggestres', {
      url: "/suggestres",
      views: {
        'menuContent' :{
          templateUrl: "templates/suggestres.html"
        }
      }
    })
	.state('app.fav', {
      url: "/fav",
      views: {
        'menuContent' :{
          templateUrl: "templates/fav.html",
		      controller: 'favcontroller'
        }
      }
    })
	.state('app.favorder', {
      url: "/favorder",
      views: {
        'menuContent' :{
          templateUrl: "templates/favorder.html"
        }
      }
    })
	.state('app.orderdetails', {
      url: "/orderdetails",
      views: {
        'menuContent' :{
          templateUrl: "templates/orderdetails.html"
        }
      }
    })
	.state('app.myorders', {
      url: "/myorders",
      views: {
        'menuContent' :{
          templateUrl: "templates/myorders.html"
        }
      }
    })
	.state('app.cart', {
      url: "/cart",
      cache: false,
      views: {
        'menuContent' :{
          templateUrl: "templates/cart.html",
		  controller: 'cartcontroller'
        }
      }
    })
	
	.state('app.shipping', {
      url: "/shipping",
      views: {
        'menuContent' :{
          templateUrl: "templates/shipping.html",
		  controller: 'shippingcontroller'
        }
      }
    })
	
	.state('app.setadd', {
      url: "/setadd",
      views: {
        'menuContent' :{
          templateUrl: "templates/setadd.html",
		  controller: 'setaddcontroller'
        }
      }
    })

    .state('app.home', {
      url: "/home",
      cache: false,
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html",
          controller: 'homeCtrl'
        }
      }
    })
	.state('app.details', {
      url: "/details/:id/:mid",
      cache: false,
      views: {
        'menuContent' :{
          templateUrl: "templates/details.html",
          controller: 'detailsCtrl'
        }
      }
    })

    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    })
  
  .state('app.login-into-menucontent', {
    url: "/login-into-menucontent",
    views: {
      'menuContent' :{
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
      }
    }
  })
		
	.state('login', {
      url: "/login",
      templateUrl: "templates/login.html",
      controller: 'LoginCtrl'
    })
	.state('offline', {
      url: "/offline",
      templateUrl: "templates/offline.html",
      controller: 'offlineCtrl'
    })
		/*.state('register', {
      url: "/register",
      templateUrl: "templates/register.html",
      controller: 'registerCtrl'
    })*/
	.state('forget', {
      url: "/forget",
      templateUrl: "templates/forget.html"
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');

})

