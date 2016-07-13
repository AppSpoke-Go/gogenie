app.directive('googleplace', function() {
   return {
       require: 'ngModel',
       link: function(scope, element, attrs, model) {
           var options = {
               types: [],
               componentRestrictions: {}
           };
           scope.gPlace = new google.maps.places.Autocomplete(element[0], options);

           google.maps.event.addListener(scope.gPlace, 'place_changed', function() {
               scope.$apply(function() {
                   model.$setViewValue(element.val());                
               });
           });
       }
   };
})
/*app.run(function($rootScope, $state) {
  // console.log("online:" + navigator.onLine);
 
  $rootScope.online = navigator.onLine ? 'online' : 'offline';
  $rootScope.$apply();
 
  if (window.addEventListener) {
    window.addEventListener("online", function() {
      $rootScope.online = "online";
      $rootScope.$apply();
    }, true);
    window.addEventListener("offline", function() {
      $rootScope.online = "offline";
	  $state.go('app.offline');
      $rootScope.$apply();
    }, true);
  } else {
    document.body.ononline = function() {
      $rootScope.online = "online";
      $rootScope.$apply();
    };
    document.body.onoffline = function() {
      $rootScope.online = "offline";
	  $state.go('app.offline');
      $rootScope.$apply();
    };
  }
});*/
app.directive('tabState', function($state) {

   return {
     restrict: 'A',
     link: function (scope, element, attrs) {
       scope.$watch(function() {
         return $state.current.name;
       }, function(stateName) {
          if(stateName === attrs.uiSref) {
            element.addClass('active')
          }
         else {
           element.removeClass('active')
         }
       });
     }
   };
 })
 app.factory('menuService', function($http, $q) {
/*var menu = [];
return {
getmenu: function(){
return $http.jsonp("http://virtualscreenz.com/gogenie/home_search_response.json").then(function(response){
menu = response;
return menu;
});
},
getmenuitem: function(id){
for(i=0;i<menu.length;i++){
if(menu[i].id == id){
return menu[i];
}
}
return null;
}
}
return $http.jsonp('http://virtualscreenz.com/gogenie/home_search_response.json')
.then(function(response) {
  console.log(response.data);
  return response.data;
});
 return{
    getmenu : function() {
        return $http({
            url: 'http://virtualscreenz.com/gogenie/home_search_response.json',
            method: 'jsonp'
        })
    }
 }*/
 return {
        getmenu: function () {
            var deferred = $q.defer();
            $http({ method: "POST", url: "http://virtualscreenz.com/gogenie/home_search_response.json" })
                .success(function (data, status, headers, config) {
                    deferred.resolve(data);
                }).error(function (data, status, headers, config) {
                    deferred.reject(status);
                });
            return deferred.promise;
        }
    
 }})
 app.factory("menuFac", ['$http',function($http){  
    var obj = {};
    
    obj.fetchmenuDetails = function(){ 
        //return $http.get('json/home_search_response.json');
        return $http.get('http://virtualscreenz.com/gogenie/restaurantjson.php');
    }

 return obj;
}]);
