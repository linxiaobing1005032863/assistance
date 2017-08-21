var app = angular.module('hotModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.hotassist", {
        url : "/hotassist",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/hotassist/_res/html/index.html",
                controller:"hotModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/hotassist/_res/html/menu.html",
                controller:"hotMenuCtrl"
            }
        }
    }).state("root.assistance.hotassist.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.assistance.hotassist":{
                templateUrl : "root/assistance/hotassist/list/_res/html/index.html",
                controller:'hotListCtrl'
            }
        }
    }).state("root.assistance.hotassist.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.hotassist":{
                templateUrl : "root/assistance/hotassist/add/_res/html/index.html",
                controller:'hotAddCtrl'
            }
        }
    }).state("root.assistance.hotassist.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.hotassist":{
                templateUrl : "root/assistance/hotassist/edit/_res/html/index.html",
                controller:'hotEditCtrl'
            }
        }
    }).state("root.assistance.hotassist.Area[12]",{
        url:"/Area[12]?id=&name=",
        views:{
            "content@root.assistance.hotassist":{
                templateUrl : "root/assistance/hotassist/Area/_res/html/index.html",
                controller:'hotAreaCtrl'
            }
        }
    }).state("root.assistance.hotassist.ProGroup[12]",{
        url:"/ProGroup[12]?id=&page=",
        views:{
            "content@root.assistance.hotassist":{
                templateUrl : "root/assistance/hotassist/ProGroup/_res/html/index.html",
                controller:'hotProGroupCtrl'
            }
        }
    })
});
