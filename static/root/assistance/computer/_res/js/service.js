var app = angular.module('computerMenuCtrl',[]);
app.factory('computerSer',function ($http) {
    return {
        menuPermission : menuPermission,
        computerList :computerList ,
        addComputer:addComputer,
        editComputer:editComputer,
        findComputerId:findComputerId,
        ComputerDelete:ComputerDelete,
        ComputerArea:ComputerArea,
        ComputerProGroup:ComputerProGroup,
        countComputer:countComputer,
        AllComputerArea:AllComputerArea,
        listallarea:listallarea,
        listAllGroup:listAllGroup,
        AllComputerProGroup:AllComputerProGroup



    };
    //菜单权限
    function menuPermission(data) {
        return $http.get('/computerassist/guidePermission'+data);
    }
    //列表
    function computerList(data) {
        return $http.get('/computerassist/listComputerAssist',{
            params: data
        })
    }
    //添加
    function addComputer(data){
        return $http.post('/computerassist/add',data)
    }

    //编辑
    function editComputer(data){
        return $http.post('/computerassist/edit',data)
    }

    //删除
    function ComputerDelete(data){
        return $http.get('/computerassist/delete',{
            params: data
        })
    }
    //地区汇总
    function ComputerArea(data){
        return $http.get('/computerassist/collectByArea',{params:data})
    }
    //地区汇总
    function AllComputerArea(){
        return $http.get('/computerassist/collectByArea2')
    }

    //项目汇总
    function AllComputerProGroup(){
        return $http.get('/computerassist/collectByProGroup2')
    }
    //项目汇总
    function ComputerProGroup(data) {
        return $http.get('/computerassist/collectByProGroup',{
            params:data
        })
    }
    //id查询find
    function findComputerId(data){
        return $http.get('/computerassist/getOneById',{
            params:data
        })
    }
    //计算总数量
    function countComputer(data) {
        return $http.get('/computerassist/count',{params:data})
    }
   //获取所有地区
    function listallarea() {
        return $http.get('/computerassist/listAll/area')
    }
    //获取所有项目组
    function listAllGroup() {
        return $http.get('/computerassist/listAll/projectGroup')
    }


});

