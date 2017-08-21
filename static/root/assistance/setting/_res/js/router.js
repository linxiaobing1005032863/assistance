var app = angular.module('setting', []);
app.config(function($provide, $stateProvider){
    $stateProvider.state("root.assistance.setting", {
        url : "/setting",
        views : {
            "content@root.assistance" : {
                templateUrl : "root/assistance/setting/_res/html/index.html",
                controller:"settingCtrl"
            },"menu@root.assistance" : {
                templateUrl : "root/assistance/setting/_res/html/menu.html",
                controller:"settingMenuCtrl"
            }
        }
    }).state("root.assistance.setting.edit[12]",{
        url:"/edit[12]?id=&page=",
        views:{
            "content@root.assistance.setting":{
                templateUrl : "root/assistance/setting/edit/_res/html/index.html",
                controller:'settingEditCtrl'
            }
        }
    }).state("root.assistance.setting.list[12]",{
        url:"/list[12]?page=",
        views:{
            "content@root.assistance.setting":{
                templateUrl : "root/assistance/setting/list/_res/html/index.html",
                controller:'settingListCtrl'
            }
        }
    })
});