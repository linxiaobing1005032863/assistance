var app = angular.module('anceempModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.anceemp", {
        url : "/anceemp",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/anceemp/_res/html/index.html",
                controller:"anceempModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/anceemp/_res/html/menu.html",
                controller:"anceempMenuCtrl"
            }
        }
    }).state("root.assistance.anceemp.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.assistance.anceemp":{
                templateUrl : "root/assistance/anceemp/list/_res/html/index.html",
                controller:'anceempListCtrl'
            }
        }
    }).state("root.assistance.anceemp.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.anceemp":{
                templateUrl : "root/assistance/anceemp/add/_res/html/index.html",
                controller:'anceempAddCtrl'
            }
        }
    }).state("root.assistance.anceemp.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.anceemp":{
                templateUrl : "root/assistance/anceemp/edit/_res/html/index.html",
                controller:'anceempEditCtrl'
            }
        }
    })
});
