var app = angular.module('tanceModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.tancestandard", {
        url : "/tancestandard",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/tancestandard/_res/html/index.html",
                controller:"tanceModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/tancestandard/_res/html/menu.html",
                controller:"tanceMenuCtrl"
            }
        }
    }).state("root.assistance.tancestandard.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.assistance.tancestandard":{
                templateUrl : "root/assistance/tancestandard/list/_res/html/index.html",
                controller:'tanceListCtrl'
            }
        }
    }).state("root.assistance.tancestandard.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.tancestandard":{
                templateUrl : "root/assistance/tancestandard/add/_res/html/index.html",
                controller:'tanceAddCtrl'
            }
        }
    }).state("root.assistance.tancestandard.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.tancestandard":{
                templateUrl : "root/assistance/tancestandard/edit/_res/html/index.html",
                controller:'tanceEditCtrl'
            }
        }
    })
});
