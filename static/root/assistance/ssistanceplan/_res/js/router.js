var app = angular.module('planModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.ssistanceplan", {
        url : "/ssistanceplan",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/ssistanceplan/_res/html/index.html",
                controller:"planModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/ssistanceplan/_res/html/menu.html",
                controller:"planMenuCtrl"
            }
        }
    }).state("root.assistance.ssistanceplan.list[12]",{
        url:"/list[12]?id=&name=&page=",
        views:{
            "content@root.assistance.ssistanceplan":{
                templateUrl : "root/assistance/ssistanceplan/list/_res/html/index.html",
                controller:'planListCtrl'
            }
        }
    }).state("root.assistance.ssistanceplan.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.ssistanceplan":{
                templateUrl : "root/assistance/ssistanceplan/add/_res/html/index.html",
                controller:'planAddCtrl'
            }
        }
    }).state("root.assistance.ssistanceplan.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.ssistanceplan":{
                templateUrl : "root/assistance/ssistanceplan/edit/_res/html/index.html",
                controller:'planEditCtrl'
            }
        }
    }).state("root.assistance.ssistanceplan.manage[12]",{
        url:"/manage[12]?id=&name=",
        views:{
            "content@root.assistance.ssistanceplan":{
                templateUrl : "root/assistance/ssistanceplan/manage/_res/html/index.html",
                controller:'planmanageCtrl'
            }
        }
    }).state("root.assistance.ssistanceplan.finace[12]",{
        url:"/finace[12]?id=&page=",
        views:{
            "content@root.assistance.ssistanceplan":{
                templateUrl : "root/assistance/ssistanceplan/finace/_res/html/index.html",
                controller:'planfinaceCtrl'
            }
        }
    }).state("root.assistance.ssistanceplan.resource[12]",{
        url:"/resource[12]?id=&page=",
        views:{
            "content@root.assistance.ssistanceplan":{
                templateUrl : "root/assistance/ssistanceplan/resource/_res/html/index.html",
                controller:'planresourceCtrl'
            }
        }
    })
});
