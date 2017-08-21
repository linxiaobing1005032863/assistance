var app = angular.module('assistModule');
app.factory('assistSer', function($http){
    return {
        navPermission : navPermission,
        setPermission : setPermission
    };
    function navPermission(){
        return $http.get('/ageassist/sonPermission');
    }
    function setPermission(){
        return $http.get('/ageassist/setButtonPermission');
    }
});