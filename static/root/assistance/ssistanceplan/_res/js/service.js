var app = angular.module('planServer',[]);
app.factory('planSer',function ($http) {
    return {
        menuPermission : menuPermission,
        planList :planList ,
        addPlan:addPlan,
        editPlan:editPlan,
        findPlanId:findPlanId,
        planDelete:planDelete,
        planManage:planManage,
        planFinace:planFinace,
        planResource:planResource,
        countPlan:countPlan,
        allPlan:allPlan

    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/assistanceplan/guidePermission'+data);
    }
    //列表
    function planList(data) {
        return $http.get('/assistanceplan/listAssistancePlan',{
            params: data
        })
    }

    //添加
    function addPlan(data){
        return $http.post('/assistanceplan/add',data)
    }

    //编辑
    function editPlan(data){
        return $http.post('/assistanceplan/edit',data)
    }

    //删除
    function planDelete(data){
        return $http.get('/assistanceplan/delete',{
            params: data
        })
    }
    //综合资源部审核
    function planResource(data){
        return $http.post('/assistanceplan/resource/audit',data)
    }
    //总经办审核
    function planManage(data) {
        return $http.post('/assistanceplan/manage/audit',data)
    }

    //运营财务部审核

    function planFinace(data){
        return $http.post('/assistanceplan/finace/audit',data)
    }
    //id查询find
    function findPlanId(data){
        return $http.get('/assistanceplan/one',{
            params:data
        })
    }
    //计算总数量
    function countPlan() {
        return $http.get('/assistanceplan/count')
    }
    //获取所有补助方案序号
    function allPlan() {
        return $http.get('/assistanceplan/listPlanNum')
    }

});

