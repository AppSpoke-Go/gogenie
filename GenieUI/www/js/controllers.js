app.controller('AppCtrl', function($scope,$rootScope) {
  $rootScope.previousState;
$rootScope.currentState;
$rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;
    console.log('Previous state:'+$rootScope.previousState);
    console.log('Current state:'+$rootScope.currentState);
    $rootScope.previousStateparam = fromParams;
    $rootScope.currentStateparam = toParams;
    console.log($rootScope.previousStateparam);
    console.log($rootScope.currentStateparam);
});
})
app.controller('offlineCtrl', function($scope, $rootScope, $state, $window) {
  $scope.retry = function()
  {
    console.log($rootScope.previousState);
  	$rootScope.$on('$cordovaNetwork:offline', function() {$state.go('offline');  });
  	$rootScope.$on('$cordovaNetwork:offline', function() {
      if($rootScope.previousState == undefined)
          {
              $state.go('app.login'); 
          }
          else
          {
            $state.go($rootScope.previousState,$rootScope.previousStateparam);  }
    });
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
          if($rootScope.previousState == undefined)
          {
              $state.go('app.login'); 
          }
          else
          {
          $state.go($rootScope.previousState,$rootScope.previousStateparam);
          } 
        });
      }, false);
  }
})
app.controller('homeCtrl', function($scope, $ionicPopup, $timeout,$state,menuService,menuFac, $window,$ionicLoading,$localStorage) {
 $scope.showToday = false; 
 $scope.totalamt=localStorage.getItem('totalamt');
 if($localStorage.cartdetails != undefined)
 $scope.badge=$localStorage.cartdetails.length;
 console.log($scope.badge);
  $ionicLoading.show({
		content: 'Loading',
		template: '<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner>',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	  });
	$scope.menus = [];
	$scope.searchText = {};
	menuFac.fetchmenuDetails().success(function(response){
        $scope.menus = response;
        $ionicLoading.hide();
        $scope.shouldShow =  true;
    });
	$scope.quantity = 2;
	console.log($scope.userDetail);
	console.log('userDetail');
	console.log('menus');
	console.log($scope.menus);
	//$scope.gPlace;
	$scope.near = false;
	$scope.showlist=false;
    $scope.showbut=true;
	
	$scope.changetext = function()
		{
			$scope.showlist=true;
      $scope.showbut=false;
		}
		var mysrclat= 0; var mysrclong = 0;
    
  $scope.clearmyloc = function() {
	  $scope.near = false;
  }
  $scope.cart = function() {
	  $state.go('app.cart');
  }
  $scope.setmyloc = function(useraddress) {
	  console.log(useraddress);
	  if(useraddress == undefined)
	  {
		var confirmPopup = $ionicPopup.alert({
         title: 'Location Empty',
         template: 'Adress is Empty! Please type your location or click locate me button.'
      });
	  }
	  else
	  {
		  $scope.nearlocation = useraddress;
		  $scope.near = true;
	  }
  }
  $scope.nearme = function() {
$ionicLoading.show({
		content: 'Loading',
		template: '<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner>',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	  });
				$window.navigator.geolocation.getCurrentPosition(function(position) {
				$scope.$apply(function() {
				  $scope.lat = position.coords.latitude;
				  $scope.lng = position.coords.longitude;

				  var geocoder = new google.maps.Geocoder();
				  var latlng = new google.maps.LatLng($scope.lat, $scope.lng);
				  var request = {
					latLng: latlng
				  };
				  geocoder.geocode(request, function(data, status) {
					if (status == google.maps.GeocoderStatus.OK) {
					  if (data[0] != null) {
						//alert("address is: " + data[0].formatted_address);
						$scope.nearlocation = data[0].formatted_address;
						$scope.near = true;
            $ionicLoading.hide();
					  } else {
						//alert("No address available");
						$scope.near = false;
            
					  }
					}
				  })
				  //console.log(position);
				})
			  })
        console.log($scope.nearlocation);
    }
	$scope.searchfil = function(item){
		//console.log(item);
		if($scope.searchText.textvalue == undefined)
		{
			console.log('item');
			return true;
	}
	else{
		var found = false;
		if (item.name.toLowerCase().indexOf($scope.searchText.textvalue.toLowerCase()) != -1 || item.cuisine.type.toLowerCase().indexOf($scope.searchText.textvalue.toLowerCase()) != -1)
		{
			console.log(item.Menus.name);
	  return true;
    }
	else
	{
		angular.forEach(item.Menus, function(v, k) {
			//console.log('v.name');
			//console.log(v.name);
			if (v.name.toLowerCase().indexOf($scope.searchText.textvalue.toLowerCase()) != -1) {
			found = true;
			//console.log(found);
		}
		}, found);
		return found;
		}
	}
   // return false;
 };
	$scope.items=function(id){
      $state.go('app.menuitems',{id:id});
    }
	$scope.searchchange=function(){
      $scope.showlist=true;
      $scope.showbut=false;
    } 
	$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<ion-checkbox ng-model="item.checked" ng-checked="item.checked">Cusine</ion-checkbox><ion-checkbox ng-model="item.checked1" ng-checked="item.checked1">Halal</ion-checkbox><ion-checkbox ng-model="item.checked2" ng-checked="item.checked2">Pricewise</ion-checkbox><ion-checkbox ng-model="item.checked3" ng-checked="item.checked3">Distance</ion-checkbox><ion-checkbox ng-model="item.checked4" ng-checked="item.checked4">Free delivery</ion-checkbox>',
    title: 'Filter',
    subTitle: 'Please select filter',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-calm',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
	 
	 console.log('showAlert');
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
$('#clear').click(function() {
  $('#input-outer input').val('');
});
})

app.controller('PlaylistCtrl', function($scope, $stateParams) {
})

app.controller('SplashController', function($scope, $stateParams) {
})

app.controller('searchcontroller', function($scope, $stateParams, $ionicPopup, $timeout, $state) {
	$scope.availableTags = [
      "Aloo","Biryani","Chaat","Dahl","Elaichi","Firni","Gosht","Hari Mirch","Idli","Jalfrezi","Kachori","Lassi","Murgh","Chicken Naan","Onion bhaji","Peshwari","Quinoa Pilaf","Rasmalai","Saslik","Tandoori","Udrak","Vindaloo","Xacuti","Yakhini","Zeera"
    ];
    $scope.complete=function(){
      console.log($scope.availableTags);
    $( "#tags" ).autocomplete({
      source: $scope.availableTags
    });
    } 
	$scope.items=function(){
      $state.go('app.menuitems');
    } 
// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<ion-checkbox ng-model="item.checked" ng-checked="item.checked">Cusine</ion-checkbox><ion-checkbox ng-model="item.checked1" ng-checked="item.checked1">Halal</ion-checkbox><ion-checkbox ng-model="item.checked2" ng-checked="item.checked2">Pricewise</ion-checkbox><ion-checkbox ng-model="item.checked3" ng-checked="item.checked3">Distance</ion-checkbox><ion-checkbox ng-model="item.checked4" ng-checked="item.checked4">Free delivery</ion-checkbox>',
    title: 'Filter',
    subTitle: 'Please select filter',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-calm',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
	 
	 console.log('showAlert');
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
})
app.controller('menuitemscontroller', function($scope, $stateParams, $ionicPopup, $timeout, $state, menuFac,$ionicLoading,$localStorage) {
    $ionicLoading.show({
		content: 'Loading',
		template: '<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner>',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	  });
    $scope.totalamt=localStorage.getItem('totalamt');
  if($localStorage.cartdetails != undefined)
  $scope.badge=$localStorage.cartdetails.length;
 console.log($scope.badge);

	$scope.menuitem = [];
	menuFac.fetchmenuDetails().success(function(response){
    console.log(response);
        $scope.menus = response;
		var i, l =$scope.menus.length;
    console.log(l);
	for(i=0; i<l; i++)
	{
		if($scope.menus[i].id == $stateParams.id)
		{
			$scope.menuitem.push($scope.menus[i]);
		}
	}
  console.log($scope.menuitem);
    $ionicLoading.hide();
  });
    $scope.addtofav=function(menuitemid,favcheck){   
    console.log(menuitemid);
    console.log(favcheck);
    if(favcheck)
    {
      if($localStorage.favdetails == undefined)
      {
        $localStorage.favdetails = [];
      }
    $scope.itemtofav = [];
    var len = $scope.menuitem[0].Menus.length;
            for(var z=0;z<len;z++)
            {
               console.log('$scope.menuitem[0].Menus[z].id');    
               console.log($scope.menuitem[0].Menus[z].id);    
            console.log('menuitemid'); 
            if($scope.menuitem[0].Menus[z].id==menuitemid)
            {
              console.log($scope.menuitem[0].Menus[z]);
              $scope.itemtofav.push($scope.menuitem[0].Menus[z]);
              $scope.itemtofav.push($stateParams.id);
              $localStorage.favdetails.push($scope.itemtofav);
            }
            }
            console.log($localStorage.favdetails);
    }
    else
    {

    }
    }
  $scope.addtocart=function(menuitemid){   
    console.log(menuitemid);
    var setcart;
    var itemname;
    setcart = true;
     console.log(localStorage.getItem('resid'));
     console.log("localStorage.getItem('resid')");
    $scope.itemtocart = [];
      var resid = localStorage.getItem('resid');
      console.log(resid);
      console.log('resid');
      if($localStorage.cartdetails == undefined || $localStorage.cartdetails == '')
      {
          $localStorage.cartdetails =[];
      }
      if(resid==undefined || resid=='')
      {
        localStorage.setItem('resid',$stateParams.id);
        var len = $scope.menuitem[0].Menus.length;
            for(var z=0;z<len;z++)
            {
               console.log('$scope.menuitem[0].Menus[z].id');    
               console.log($scope.menuitem[0].Menus[z].id);    
            console.log('menuitemid'); 
            if($scope.menuitem[0].Menus[z].id==menuitemid)
            {
              console.log($scope.menuitem[0].Menus[z]);
              itemname = $scope.menuitem[0].Menus[z].name;
              $scope.itemtocart.push($scope.menuitem[0].Menus[z]);
            }
            }
            $scope.itemtocart.push('1');
            $scope.itemtocart.push('');
            console.log($scope.itemtocart);
            $scope.addtocart = $scope.itemtocart;
            $localStorage.cartdetails.push($scope.addtocart);
            $scope.badge=$localStorage.cartdetails.length;
            $ionicPopup.alert({
              title: 'Alert',
              template: 'Added '+itemname+' to cart'
            }).then(function (res) {
              if (res) {
                console.log('ok');
              }
            })
      }
      else{
            if(resid == $stateParams.id)
            {
                if($localStorage.cartdetails != undefined)
          var l=$localStorage.cartdetails.length;
          if(l == undefined)
          {
            l=0;
            $localStorage.cartdetails = [];
          }
          for(var i=0; i<l;i++)
          {
            console.log($localStorage.cartdetails[i][0].id);
            console.log($scope.menuitem[0].Menus[i].id);    
            console.log('$localStorage.cartdetails[i][0].id');    
            console.log('menuitemid');  
            console.log($localStorage.cartdetails[i][0].id);    
            console.log(menuitemid);  
            if($localStorage.cartdetails[i][0].id != menuitemid)
            {
              console.log('$localStorage.cartdetails[i][0].id');
              //$scope.itemtocart=$scope.menuitem[0].Menus[i];
              setcart = true;
            }
            else
            {
              setcart = false;
            }
          }   
          if(setcart)
          {
            var len = $scope.menuitem[0].Menus.length;
            for(var z=0;z<len;z++)
            {
               console.log('$scope.menuitem[0].Menus[z].id');    
               console.log($scope.menuitem[0].Menus[z].id);    
            console.log('menuitemid'); 
            if($scope.menuitem[0].Menus[z].id==menuitemid)
            {
              console.log($scope.menuitem[0].Menus[z]);
              itemname = $scope.menuitem[0].Menus[z].name;
              $scope.itemtocart.push($scope.menuitem[0].Menus[z]);
            }
            }
            $scope.itemtocart.push('1');
            $scope.itemtocart.push('');
            console.log($scope.itemtocart);
            $scope.addtocart = $scope.itemtocart;
            $localStorage.cartdetails.push($scope.addtocart);
            $scope.badge=$localStorage.cartdetails.length;
            $ionicPopup.alert({
              title: 'Alert',
              template: 'Added '+itemname+' to cart'
            }).then(function (res) {
              if (res) {
                console.log('ok');
              }
            })
          }
          else
          {
                $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Your item is already in cart'
                  }).then(function (res) {
                    if (res) {
                      console.log('ok');
                    }
                  })
          }     
          //localStorage.setItem('cartdetails',JSON.stringify($scope.menuitem));
          console.log($localStorage.cartdetails);
        }
        else
        {
           $ionicPopup.confirm({
        title: 'Alert',
        template: 'You cant be choose multiple menu items from different restaurants. Do you want to clear the cart?'
      }).then(function(res) {
        if (res) {
           $localStorage.cartdetails={};
              localStorage.setItem('resid',$stateParams.id);
          if($localStorage.cartdetails != undefined)
          var l=$localStorage.cartdetails.length;
          if(l == undefined)
          {
            l=0;
            $localStorage.cartdetails = [];
          }
          for(var i=0; i<l;i++)
          {
            console.log($localStorage.cartdetails[i][0].id);
            console.log($scope.menuitem[0].Menus[i].id);    
            console.log('$localStorage.cartdetails[i][0].id');    
            console.log('menuitemid');  
            console.log($localStorage.cartdetails[i][0].id);    
            console.log(menuitemid);  
            if($localStorage.cartdetails[i][0].id != menuitemid)
            {
              console.log('$localStorage.cartdetails[i][0].id');
              //$scope.itemtocart=$scope.menuitem[0].Menus[i];
              setcart = true;
            }
            else
            {
              setcart = false;
            }
          }   
          if(setcart)
          {
            var len = $scope.menuitem[0].Menus.length;
            for(var z=0;z<len;z++)
            {
               console.log('$scope.menuitem[0].Menus[z].id');    
               console.log($scope.menuitem[0].Menus[z].id);    
            console.log('menuitemid'); 
            if($scope.menuitem[0].Menus[z].id==menuitemid)
            {
              console.log($scope.menuitem[0].Menus[z]);
              itemname = $scope.menuitem[0].Menus[z].name;
              $scope.itemtocart.push($scope.menuitem[0].Menus[z]);
            }
            }
            $scope.itemtocart.push('1');
            $scope.itemtocart.push('');
            console.log($scope.itemtocart);
            $scope.addtocart = $scope.itemtocart;
            $localStorage.cartdetails.push($scope.addtocart);
            $scope.badge=$localStorage.cartdetails.length;
            $ionicPopup.alert({
              title: 'Alert',
              template: 'Added '+itemname+' to cart'
            }).then(function (res) {
              if (res) {
                console.log('ok');
              }
            })
          }
          else
          {
                $ionicPopup.alert({
                    title: 'Alert',
                    template: 'Your item is already in cart'
                  }).then(function (res) {
                    if (res) {
                      console.log('ok');
                    }
                  })
          }     
          //localStorage.setItem('cartdetails',JSON.stringify($scope.menuitem));
          console.log($localStorage.cartdetails);
        }
      })
        }
      }
    }
  $scope.cart = function() {
	  $state.go('app.cart');
  }

	console.log($scope.menuitem);
    
	
	$scope.cart=function(){
      $state.go('app.cart');
    } 
	$scope.availableTags = [
      "Aloo","Biryani","Chaat","Dahl","Elaichi","Firni","Gosht","Hari Mirch","Idli","Jalfrezi","Kachori","Lassi","Murgh","Chicken Naan","Onion bhaji","Peshwari","Quinoa Pilaf","Rasmalai","Saslik","Tandoori","Udrak","Vindaloo","Xacuti","Yakhini","Zeera"
    ];
    $scope.complete=function(){
      console.log($scope.availableTags);
    $( "#tags" ).autocomplete({
      source: $scope.availableTags
    });
    } 
	$scope.item=function(id){
      $state.go('app.details',{id:id,mid:$stateParams.id});
    }
// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<ion-checkbox ng-model="item.checked" ng-checked="item.checked">Vegetarian</ion-checkbox><ion-checkbox ng-model="item.checked1" ng-checked="item.checked1">Halal</ion-checkbox>',
    title: 'Filter',
    subTitle: 'Please select filter',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-calm',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $timeout(function() {
     myPopup.close(); //close the popup after 3 seconds for some reason
  }, 3000);
 };

 // A confirm dialog
 $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Consume Ice Cream',
     template: 'Are you sure you want to eat this ice cream?'
   });

   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };

 // An alert dialog
 $scope.showAlert = function() {
	 
	 console.log('showAlert');
   var alertPopup = $ionicPopup.alert({
     title: 'Don\'t eat that!',
     template: 'It might taste good'
   });

   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };
})

app.controller('LoginCtrl', function($scope, $state) {
  
  $scope.LogIn = function(user) {
    $state.go('app.home');
  };
  $scope.register = function(user) {
    $state.go('tabs.soft');
  };
  
})
app.controller('registerCtrl', function($scope, $state) {
  
  $scope.LogIn = function(user) {
    $state.go('app.home');
  };
  $scope.register = function(user) {
    $state.go('app.register');
  };
  
})
app.controller('detailsCtrl', function($scope, $state, menuFac, $stateParams, $ionicLoading,$localStorage,$ionicPopup) {
  var itemname;
  //$localStorage.cartdetails = [];
  //localStorage.setItem('resid','');
	if($localStorage.cartdetails != undefined)
  $scope.badge=$localStorage.cartdetails.length;
 console.log($scope.badge);
  $scope.shouldShow =  false;
  $scope.quantityfrom=1;
  $scope.quantity=1;
  $ionicLoading.show({
		content: 'Loading',
		template: '<ion-spinner icon="bubbles" class="spinner-calm"></ion-spinner>',
		animation: 'fade-in',
		showBackdrop: true,
		maxWidth: 200,
		showDelay: 0
	  });
  $scope.menuitem = [];
  $scope.menuitemdet = [];
	menuFac.fetchmenuDetails().success(function(response){
        $scope.menus = response;
        $ionicLoading.hide();
        $scope.shouldShow =  true;
		//console.log($scope.menus);
		console.log($stateParams.id);
		var i, l =$scope.menus.length;
	for(i=0; i<l; i++)
	{
		if($scope.menus[i].id == $stateParams.mid)
		{
			$scope.menuitem.push($scope.menus[i]);
		}
	}
  //$localStorage.cartdetails={};
  $scope.addtocart=function(notes){    
    //$scope.cart={};
    //$localStorage.cartdetails = [];
    //$scope.cartquan = quantity;
    $scope.notes = notes;
    console.log('$scope.notes');
    console.log($scope.notes);
    console.log('quantity');
    console.log($scope.quantityfrom);
    //console.log('$scope.cartquan');
    //console.log($scope.cartquan);
    var setcart;
      console.log('$localStorage.cartdetails.length');
      console.log($localStorage.cartdetails.length);
       console.log($localStorage.cartdetails);

     if($localStorage.cartdetails == undefined || $localStorage.cartdetails == '')
      {
          $localStorage.cartdetails =[];
      }
     var resid = localStorage.getItem('resid');
            console.log('resid');
    console.log(resid);
      if(resid==undefined || resid=='')
      {
        localStorage.setItem('resid',$stateParams.mid);
        setcart = true;
        itemname = $scope.menuitemdet[0].name;
        $scope.menuitemdet.push($scope.quantityfrom);
        $scope.menuitemdet.push($scope.notes);
        console.log($scope.menuitemdet);
        $scope.addtocart = $scope.menuitemdet;
        $localStorage.cartdetails.push($scope.addtocart);
        $scope.badge=$localStorage.cartdetails.length;
        $ionicPopup.alert({
					title: 'Alert',
					template: 'Added '+itemname+' to cart'
				}).then(function (res) {
					if (res) {
						console.log('ok');
					}
				})
      }
      else{
        if(resid==$stateParams.mid)
        {
    console.log('resid');
    console.log(resid);
	 if($localStorage.cartdetails != undefined || $localStorage.cartdetails != '')
       var l=$localStorage.cartdetails.length;
       if(l == undefined)
       {
         l=0;
         $localStorage.cartdetails = [];
       }
      for(var i=0; i<l;i++)
      {
        console.log($localStorage.cartdetails[i][0].id);
        console.log($scope.menuitemdet[0].id);        
        if($localStorage.cartdetails[i][0].id != $scope.menuitemdet[0].id)
        {
          setcart = true;
          itemname = $scope.menuitemdet[0].name;
        }
        else
        {
          setcart = false;
        }
      }   
      if(setcart)
      {
        $scope.menuitemdet.push($scope.quantityfrom);
        $scope.menuitemdet.push($scope.notes);
        console.log($scope.menuitemdet);
        $scope.addtocart = $scope.menuitemdet;
        $localStorage.cartdetails.push($scope.addtocart);
        $scope.badge=$localStorage.cartdetails.length;
        $ionicPopup.alert({
					title: 'Alert',
					template: 'Added '+itemname+' to cart'
				}).then(function (res) {
					if (res) {
						console.log('ok');
					}
				})
      } 
      else{
            $ionicPopup.alert({
                title: 'Alert',
                template: 'Your item is already in cart'
              }).then(function (res) {
                if (res) {
                  console.log('ok');
                }
              })
      }     
                
        }
        else
        {
          $ionicPopup.confirm({
            title: 'Alert',
            template: 'You cant be choose multiple menu items from different restaurants. Do you want to clear the cart?'
          }).then(function(res) {
            if (res) {
              $localStorage.cartdetails={};
              localStorage.setItem('resid',$stateParams.mid);
              	 if($localStorage.cartdetails != undefined)
       var l=$localStorage.cartdetails.length;
       if(l == undefined)
       {
         l=0;
         $localStorage.cartdetails = [];
       }
      for(var i=0; i<l;i++)
      {
        console.log($localStorage.cartdetails[i][0].id);
        console.log($scope.menuitemdet[0].id);        
        if($localStorage.cartdetails[i][0].id != $scope.menuitemdet[0].id)
        {
          setcart = true;
          itemname = $scope.menuitemdet[1];
        }
        else
        {
          setcart = false;
        }
      }   
      if(setcart)
      {
        $scope.menuitemdet.push($scope.quantityfrom);
        $scope.menuitemdet.push($scope.notes);
        console.log($scope.menuitemdet);
        $scope.addtocart = $scope.menuitemdet;
        $localStorage.cartdetails.push($scope.addtocart);
        $scope.badge=$localStorage.cartdetails.length;
        $ionicPopup.alert({
					title: 'Alert',
					template: 'Added '+itemname+' to cart'
				}).then(function (res) {
					if (res) {
						console.log('ok');
					}
				})
      } 
      else{
            $ionicPopup.alert({
                title: 'Alert',
                template: 'Your item is already in cart'
              }).then(function (res) {
                if (res) {
                  console.log('ok');
                }
              })
            }
            }
          })
        }
      }
      //localStorage.setItem('cartdetails',JSON.stringify($scope.menuitem));
      console.log($localStorage.cartdetails);
     // $state.go('app.cart');
    }
	console.log('$scope.menuitem');
	console.log($scope.menuitem);
	var j, m =$scope.menuitem[0].Menus.length;
	console.log('m');
	console.log(m);
	for(j=0; j<m; j++)
	{
		//console.log('for');
		//console.log('$scope.menuitem[0].Menus[j].id');
		//console.log($scope.menuitem[0].Menus[j].id);
		if($scope.menuitem[0].Menus[j].id == $stateParams.id)
		{
			
			$scope.menuitemdet.push($scope.menuitem[0].Menus[j]);
      
		}
	}
	console.log('$scope.menuitemdet');
	console.log($scope.menuitemdet);
    });
$scope.cart=function(){
      $state.go('app.cart');
    }
	 // This button will increment the value
    $('.qtyplus').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
            $scope.quantityfrom=currentVal + 1;
        } else {
            // Otherwise put a 1 there
            $('input[name='+fieldName+']').val(1);
            $scope.quantityfrom=1;
        }
    });
    // This button will decrement the value till 0
    $(".qtyminus").click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 1
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
            $scope.quantityfrom=currentVal - 1;
        } else {
            // Otherwise put a 1 there
            $('input[name='+fieldName+']').val(1);
            $scope.quantityfrom=1;
        }
    });
  
})
app.controller('cartcontroller', function($scope, $state,$localStorage) {
  $scope.itemdesc=function(itemid){
      console.log('itemdes');
       $state.go('app.details',{id:itemid,mid:localStorage.getItem('resid')});
    }
   // $localStorage.cartdetails=[];
  console.log($localStorage.cartdetails);
  $scope.totalamount = 0;
  var l;
  var amount;
       if($localStorage.cartdetails == undefined || $localStorage.cartdetails =='')
       {
         l=0;
         $scope.totalamount=0;
       }
       else
       {
         l=$localStorage.cartdetails.length;
      for(var i=0; i<l;i++)
      {       
        amount = $localStorage.cartdetails[i][0].Price.replace('£', '');
        console.log(amount);
        $scope.totalamount = $scope.totalamount + (parseFloat(amount)*$localStorage.cartdetails[i][1]);
        console.log($scope.totalamount);
      }   
      $scope.totalamount = $scope.totalamount + 15;
      localStorage.setItem('totalamt',$scope.totalamount);
       }
      console.log($scope.totalamount);
    $scope.cartdetails = $localStorage.cartdetails; 
$scope.cart=function(){
      $state.go('app.cart');
    }  
    $scope.movetores=function(){
      if(localStorage.getItem('resid') == undefined || localStorage.getItem('resid') == '')
      {
        $state.go('app.home');
      }
      else
      {
      var resid = localStorage.getItem('resid');
      $state.go('app.menuitems',{id:resid});
      }
    }
    $scope.remove=function(index){
      $scope.totalamount=0;
      if($localStorage.cartdetails.length>1)
      {
        console.log('$localStorage.cartdetails.length>1');
        console.log($localStorage.cartdetails.length);
     $localStorage.cartdetails.splice(index, 1);
      }
else if($localStorage.cartdetails.length == 1)
      {
        console.log('$localStorage.cartdetails.length == 1');
        console.log($localStorage.cartdetails.length);
        $localStorage.cartdetails.splice(index, 1);
        localStorage.setItem('resid','');
      }
      console.log("localStorage.getItem('resid')");
      console.log(localStorage.getItem('resid'));
     var l=$localStorage.cartdetails.length;
  var amount;
       if(l == undefined)
       {
         l=0;
         $scope.totalamount=0;
         localStorage.setItem('totalamt',$scope.totalamount);
       }
       else{
      for(var i=0; i<l;i++)
      {       
        amount = $localStorage.cartdetails[i][0].Price.replace('£', '');
        console.log(amount);
        $scope.totalamount = $scope.totalamount + (parseFloat(amount)*$localStorage.cartdetails[i][1]);
        console.log($scope.totalamount);
      }   
      $scope.totalamount = $scope.totalamount + 15;
      localStorage.setItem('totalamt',$scope.totalamount);
    }
      console.log($scope.totalamount);
    $scope.cartdetails = $localStorage.cartdetails; 
    }
    $('.numplus').click(function(e){
      console.log('.numplus');
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
        } else {
            // Otherwise put a 1 there
            $('input[name='+fieldName+']').val(1);
        }
    });
    // This button will decrement the value till 0
    $(".numminus").click(function(e) {
      console.log('.numminus');
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 1
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
        } else {
            // Otherwise put a 1 there
            $('input[name='+fieldName+']').val(1);
        }
    });
   $scope.IsHidden = false;
   
            $scope.Hide = function () {
                //If DIV is hidden it will be visible and vice versa.
                $scope.IsHidden = $scope.IsHidden ? false : true;
            }
  
})
app.controller('setaddcontroller', function($scope, $state) {
  
$scope.shipping=function(){
      $state.go('app.shipping');
    }
  
})
app.controller('shippingcontroller', function($scope, $state) {
  
$scope.save=function(){
      $state.go('app.setadd');
    }
  
}) 
app.controller('favcontroller', function($scope, $state,$localStorage) {
  $scope.fav = [];
    if($localStorage.favdetails != undefined)
    {
      $scope.fav = $localStorage.favdetails;
    }
    $scope.removeall = function() {
      $localStorage.favdetails = {};
      $scope.fav = '';
    }
}) 
app.controller('MapController', function($scope, $ionicLoading, $compile) {
  $scope.initialize = function() {
    var myLatlng = new google.maps.LatLng(43.07493,-89.381388);
    
    var mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);


    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Restaurant'
    });

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    $scope.map = map;
  }
  //google.maps.event.addDomListener(window, 'load', initialize);

  
})