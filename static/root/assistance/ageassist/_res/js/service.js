var app = angular.module('ageMenuCtrl',[]);
app.factory('ageSer',function ($http) {
    return {
        menuPermission : menuPermission,
        ageList :ageList ,
        addAge:addAge,
        editAge:editAge,
        findAgeId:findAgeId,
        AgeDelete:AgeDelete,
        countAge:countAge

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/ageassist/guidePermission'+data);
    }

    //列表
    function ageList(data) {
        return $http.get('/ageassist/list',{
            params: data
        })
    }
    //添加
    function addAge(data){
        return $http.post('/ageassist/add',data)
    }

    //编辑
    function editAge(data){
        return $http.post('/ageassist/edit',data)
    }
    //删除
    function AgeDelete(data){
        return $http.get('/ageassist/delete',{
            params: data
        })
    }
    //id查询find
    function findAgeId(data){
        return $http.get('/ageassist/one',{
            params:data
        })
    }
    //计算总数量
    function countAge() {
        return $http.get('/ageassist/count')
    }
});

