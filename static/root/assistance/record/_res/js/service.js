var app = angular.module('recordMenuCtrl',[]);
app.factory('recordSer',function ($http) {
    return {
        menuPermission : menuPermission,
        recordList :recordList ,
        addRecord:addRecord,
        editRecord:editRecord,
        findRecordId:findRecordId,
        RecordDelete:RecordDelete,
        countRecord:countRecord

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/assistancerecord/guidePermission'+data);
    }
    //列表
    function recordList(data) {
        return $http.get('/assistancerecord/list',{
            params: data
        })
    }
    //添加
    function addRecord(data){
        return $http.post('/assistancerecord/add',data)
    }

    //编辑
    function editRecord(data){
        return $http.post('/assistancerecord/edit',data)
    }

    //删除
    function RecordDelete(data){
        return $http.get('/assistancerecord/delete',{
            params: data
        })
    }
    //id查询find
    function findRecordId(data){
        return $http.get('/assistancerecord/one',{
            params:data
        })
    }
    //计算总数量
    function countRecord() {
        return $http.get('/assistancerecord/count')
    }
});

