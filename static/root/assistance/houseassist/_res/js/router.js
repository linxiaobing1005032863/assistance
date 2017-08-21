var app = angular.module('houseModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.houseassist", {
        url : "/houseassist",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/houseassist/_res/html/index.html",
                controller:"houseModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/houseassist/_res/html/menu.html",
                controller:"houseMenuCtrl"
            }
        }
    }).state("root.assistance.houseassist.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.assistance.houseassist":{
                templateUrl : "root/assistance/houseassist/list/_res/html/index.html",
                controller:'houseListCtrl'
            }
        }
    }).state("root.assistance.houseassist.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.houseassist":{
                templateUrl : "root/assistance/houseassist/add/_res/html/index.html",
                controller:'houseAddCtrl'
            }
        }
    }).state("root.assistance.houseassist.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.houseassist":{
                templateUrl : "root/assistance/houseassist/edit/_res/html/index.html",
                controller:'houseEditCtrl'
            }
        }
    })
});
