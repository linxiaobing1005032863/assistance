var app = angular.module('anceempMenuCtrl',[]);
app.factory('anceempSer',function ($http) {
    return {
        menuPermission : menuPermission,
        anceempList :anceempList ,
        addAnceemp:addAnceemp,
        editAnceemp:editAnceemp,
        findAnceempId:findAnceempId,
        AnceempDelete:AnceempDelete,
        countAnceemp:countAnceemp

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/assistanceemp/guidePermission'+data);
    }

    //列表
    function anceempList(data) {
        return $http.get('/assistanceemp/list',{
            params: data
        })
    }

    //添加
    function addAnceemp(data){
        return $http.post('/assistanceemp/add',data)
    }

    //编辑
    function editAnceemp(data){
        return $http.post('/assistanceemp/edit',data)
    }
    //删除
    function AnceempDelete(data){
        return $http.get('/assistanceemp/delete',{
            params: data
        })
    }
    //id查询find
    function findAnceempId(data){
        return $http.get('/assistanceemp/one',{
            params:data
        })
    }
    //计算总数量
    function countAnceemp() {
        return $http.get('/assistanceemp/count')
    }
});

