var app = angular.module('planModule', [{
    files:[
        "root/assistance/ssistanceplan/_res/js/service.js",
    ]
}]);
app.controller('planModuleCtrl',function ($scope,$state) {
    if ($state.current.url == '/ssistanceplan') {//默认加载列表
        $state.go('root.assistance.ssistanceplan.list[12]')
    }
   /* $scope.$emit('isVi',true);//判断是否出现搜索按钮*/
}).controller('planMenuCtrl',function($scope,$state,$rootScope,$location,planSer){
    var urlName = $state.current.url.split('/')[1].split('[')[0];
    $scope.menuClass = urlName.split('?')[0] + "Menu";
    $rootScope.$on('$locationChangeSuccess', function () {//url地扯改变或者刷新
        if($location.path().split('/').slice(-1)=='list[12]' && window.location.href.indexOf('id=') == -1){
            $scope.menuClass = 'listMenu';
        }
    });
    if (window.location.href.split('id=')[1]) {//如果是刷新进来的页面，没有经过list
        $scope.idListd = window.location.href.split('id=')[1];
        if($location.search().name){$scope.menuClass = $location.search().name + 'Menu'}
    }
    //功能权限
    $scope.menuCheck = function (name) {
        var buttonName = name;
        $scope.buttonShow = true;
        planSer.menuPermission(buttonName).then(function(response){
            if(response.data.code == 0 && response.data.data){
                $scope[buttonName] = true;
            }else{
                $scope[buttonName] = false;
            }
        });
        $scope.menuAdd = false;
    };
    //监听到父Ctrl后改变事件
    $scope.$on("getId", function(event, msg){
        $scope.idListd = msg;
    });
    $scope.$on('pageId',function(event,flag){
        $scope.page = flag;
    });
    if(!$scope.page){
        $scope.page = $location.search().page;
    }
    $scope.delete = function(){
        if($scope.idListd){
            $state.go('root.assistance.ssistanceplan.list[12]',{id:$scope.idListd,name:'delete',page:$scope.page});
            $scope.menuClass = 'deleteMenu';
        }
    };
    $scope.edit = function(){
        if($scope.idListd){
            $state.go('root.assistance.ssistanceplan.edit[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'editMenu'
        }
    };
    $scope.list = function(){
        $scope.menuClass = 'listMenu'
    };
    $scope.add = function(){
        $scope.menuClass = 'addMenu';
        $scope.idListd = ''
    };
    $scope.manage = function(){
        if($scope.idListd){
            $state.go('root.assistance.ssistanceplan.manage[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'manageMenu'
        }
    };
    $scope.finace = function(){
        if($scope.idListd){
            $state.go('root.assistance.ssistanceplan.finace[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'finaceMenu'
        }
    };
    $scope.resource = function(){
        if($scope.idListd){
            $state.go('root.assistance.ssistanceplan.resource[12]',{id:$scope.idListd,page:$scope.page});
            $scope.menuClass = 'resourceMenu'
        }
    };

});


