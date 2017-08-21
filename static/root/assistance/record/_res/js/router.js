var app = angular.module('recordModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.record", {
        url : "/record",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/record/_res/html/index.html",
                controller:"recordModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/record/_res/html/menu.html",
                controller:"recordMenuCtrl"
            }
        }
    }).state("root.assistance.record.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.assistance.record":{
                templateUrl : "root/assistance/record/list/_res/html/index.html",
                controller:'recordListCtrl'
            }
        }
    }).state("root.assistance.record.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.record":{
                templateUrl : "root/assistance/record/add/_res/html/index.html",
                controller:'recordAddCtrl'
            }
        }
    }).state("root.assistance.record.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.record":{
                templateUrl : "root/assistance/record/edit/_res/html/index.html",
                controller:'recordEditCtrl'
            }
        }
    })
});
