var app = angular.module('computerModule', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.computer", {
        url : "/computer",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/computer/_res/html/index.html",
                controller:"computerModuleCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/computer/_res/html/menu.html",
                controller:"computerMenuCtrl"
            }
        }
    }).state("root.assistance.computer.list[12]",{
        url:"//list[12]?id=&name=&page=&empName=",
        views:{
            "content@root.assistance.computer":{
                templateUrl : "root/assistance/computer/list/_res/html/index.html",
                controller:'computerListCtrl'
            }
        }
    }).state("root.assistance.computer.add[12]",{
        url:"/add[12]",
        views:{
            "content@root.assistance.computer":{
                templateUrl : "root/assistance/computer/add/_res/html/index.html",
                controller:'computerAddCtrl'
            }
        }
    }).state("root.assistance.computer.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.computer":{
                templateUrl : "root/assistance/computer/edit/_res/html/index.html",
                controller:'computerEditCtrl'
            }
        }
    }).state("root.assistance.computer.Area[12]",{
        url:"/Area[12]?id=&name=",
        views:{
            "content@root.assistance.computer":{
                templateUrl : "root/assistance/computer/Area/_res/html/index.html",
                controller:'computerAreaCtrl'
            }
        }
    }).state("root.assistance.computer.ProGroup[12]",{
        url:"/ProGroup[12]?id=&page=",
        views:{
            "content@root.assistance.computer":{
                templateUrl : "root/assistance/computer/ProGroup/_res/html/index.html",
                controller:'computerProGroupCtrl'
            }
        }
    })
});
