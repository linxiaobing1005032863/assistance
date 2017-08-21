var app = angular.module('ageModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.ageassist", {
        url : "/ageassist",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/ageassist/_res/html/index.html",
                controller:"ageModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/ageassist/_res/html/menu.html",
                controller:"ageMenuCtrl"
            }
        }
    }).state("root.assistance.ageassist.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.assistance.ageassist":{
                templateUrl : "root/assistance/ageassist/list/_res/html/index.html",
                controller:'ageListCtrl'
            }
        }
    }).state("root.assistance.ageassist.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.ageassist":{
                templateUrl : "root/assistance/ageassist/edit/_res/html/index.html",
                controller:'ageEditCtrl'
            }
        }
    }).state("root.assistance.ageassist.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.ageassist":{
                templateUrl : "root/assistance/ageassist/add/_res/html/index.html",
                controller:'ageAddCtrl'
            }
        }
    })
});
