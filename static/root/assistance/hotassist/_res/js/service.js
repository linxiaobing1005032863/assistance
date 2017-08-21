var app = angular.module('hotMenuCtrl',[]);
app.factory('hotSer',function ($http) {
    return {
        menuPermission : menuPermission,
        hotList :hotList ,
        addHot:addHot,
        editHot:editHot,
        findHotId:findHotId,
        HotDelete:HotDelete,
        HotArea:HotArea,
        HotProGroup:HotProGroup,
        countHot:countHot,
        Allarea:Allarea,
        AllHotArea:AllHotArea,
        AllprojectGroup:AllprojectGroup,
        AllHotProGroup:AllHotProGroup




    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/hotassist/guidePermission'+data);
    }

    //列表
    function hotList(data) {
        return $http.get('/hotassist/listHotAssist',{
            params: data
        })
    }
    //添加
    function addHot(data){
        return $http.post('/hotassist/add',data)
    }

    //编辑
    function editHot(data){
        return $http.post('/hotassist/edit',data)
    }

    //删除
    function HotDelete(data){
        return $http.get('/hotassist/delete',{
            params: data
        })
    }
    //地区汇总
    function AllHotArea(){
        return $http.get('/hotassist/collectByArea2')
    }

    //项目汇总
    function HotProGroup(data){
        return $http.get('/hotassist/collectByProGroup',{params:data})
    }
    //项目汇总
    function AllHotProGroup(){
        return $http.get('/hotassist/collectByProGroup2')
    }

    //地区汇总
    function HotArea(data){
        return $http.get('/hotassist/collectByArea',{params:data})
    }


    //id查询find
    function findHotId(data){
        return $http.get('/hotassist/getOneById',{
            params:data
        })
    }
    //计算总数量
    function countHot() {
        return $http.get('/hotassist/count')
    }
   //获取所有地区
    function Allarea(){
        return $http.get('/hotassist/listAll/area')
    }
 //获取所有的项目组
    function AllprojectGroup(){
        return $http.get('/hotassist/listAll/projectGroup')
    }
});

