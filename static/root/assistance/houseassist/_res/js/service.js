var app = angular.module('houseMenuCtrl',[]);
app.factory('houseSer',function ($http) {
    return {
        menuPermission : menuPermission,
        houseList :houseList ,
        addHouse:addHouse,
        editHouse:editHouse,
        findHouseId:findHouseId,
        HouseDelete:HouseDelete,
        countHouse:countHouse

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/houseassist/guidePermission'+data);
    }

    //列表
    function houseList(data) {
        return $http.get('/houseassist/listHouseAssist',{
            params: data
        })
    }
    //添加
    function addHouse(data){
        return $http.post('/houseassist/add',data)
    }

    //编辑
    function editHouse(data){
        return $http.post('/houseassist/edit',data)
    }
    //删除
    function HouseDelete(data){
        return $http.get('/houseassist/delete',{
            params: data
        })
    }
    //id查询find
    function findHouseId(data){
        return $http.get('/houseassist/getOneById',{
            params:data
        })
    }
    //计算总数量
    function countHouse() {
        return $http.get('/houseassist/count')
    }
});

