var app = angular.module('assistModule',[]);
app.config(function ($provide, $stateProvider) {
    $stateProvider.state("root.assistance", {
        url: "/assistance",
        views: {
            "content@root": {
                templateUrl: "root/assistance/_res/html/index.html",
                controller: "assistCtrl"
            },"nav@root":{
                templateUrl: "root/assistance/_res/html/nav.html",
                controller:"navCtrl"
            }
        }
    })
});