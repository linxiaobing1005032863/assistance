var app = angular.module('tanceMenuCtrl',[]);
app.factory('tanceSer',function ($http) {
    return {
        menuPermission : menuPermission,
        tanceList :tanceList ,
        addTance:addTance,
        editTance:editTance,
        findTanceId:findTanceId,
        TanceDelete:TanceDelete,
        countTance:countTance,
        getAge:getAge



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/assistancestandard/guidePermission'+data);
    }
    function tanceList(data) {
        return $http.get('/assistancestandard/list',{
            params: data
        })
    }
    //添加
    function addTance(data){
        return $http.post('/assistancestandard/add',data)
    }

    //编辑
    function editTance(data){
        return $http.post('/assistancestandard/edit',data)
    }

    //删除
    function TanceDelete(data){
        return $http.get('/assistancestandard/delete',{
            params: data
        })
    }
    //id查询find
    function findTanceId(data){
        return $http.get('/assistancestandard/getOneById',{
            params:data
        })
    }
    //计算总数量
    function countTance() {
        return $http.get('/assistancestandard/count')
    }
    //获取工龄补助标准
    function getAge() {
        return $http.get('/assistancestandard/getAgeStands')
    }

});

