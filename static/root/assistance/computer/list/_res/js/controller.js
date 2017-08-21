var app = angular.module('computerList', ['ng-pagination','toastr']);
app.controller('computerListCtrl',function($scope,computerSer,toastr,$stateParams,$state,$location){
    $scope.$emit('changeId', null);
    //监听切换搜索是否出现
    $scope.$on('isSearch',function(event,newIs){
        $scope.isView = newIs;
    });
    //搜索字段
    if($stateParams.empName){$scope.empName = $stateParams.empName;$scope.isView = false;}
    //搜索字段
    $scope.empName = $stateParams.empName?$stateParams.empName:'';
    if($stateParams.empName){
        $scope.$emit('isId', false);
        $scope.isView = false;
    }else{
        $scope.$emit('isId', true);
    }
    //点击搜索功能
    $scope.search = function(){
        $state.go('root.assistance.computer.list[12]',{empName:$scope.empName,page:1});
    }
    function activatePage(page) {
        var listData = {
            page:page || 1,
            empName:$scope.empName || ''
        };
        if($scope.computerLi) return;
        computerSer.countComputer(listData).then(function(response){
            if(response.data.code==0){
                $scope.custom.itemsCount = response.data.data;
                $scope.num = $location.search().page*10>10?($location.search().page-1)*10:null;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });
        computerSer.computerList(listData).then(function(response){
            if(response.data.code==0){
                $scope.computerLi = response.data.data;
                if($stateParams.id){
                    if($stateParams.id.indexOf('&')){
                        $stateParams.id = $stateParams.id.split('&')[0];

                    }
                    angular.forEach($scope.computerLi,function(obj){
                        if(obj.id == $stateParams.id){
                            obj._selectList = true;
                        }
                    });
                    //向父Ctrl传递事件
                    $scope.$emit('changeId', $stateParams.id);
                }
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        });

    }
    // 搜索功能字段
    $scope.titles = ['姓名'];
    $scope.selectList = function(event){
        angular.forEach($scope.computerLi,function(obj){
            obj._selectList = false
        });
        event._selectList = true;
        $scope.idListd = event.id;
        //向父Ctrl传递事件
        $scope.$emit('changeId', $scope.idListd);
        $scope.$emit('page', $location.search().page);

    };
    //点击更多详细
    $scope.moreList = function(event){
        angular.forEach($scope.computerLi,function(obj){
            if(event.id!==obj.id){
                obj._moreList = false
            }
        });
        event._moreList = !event._moreList;
    };

//分页
    $scope.custom = {
        itemsCount: 2, //总条数
        take: 10, //每页显示
        activatePage: activatePage
    };
    //获取id
    if($stateParams.id){
        switch ($stateParams.name){
            case 'delete':
                $scope.delShow = true;
                break;
        }
    }
    $scope.cancel = function(){//取消删除
        $scope.delShow = false;
        $state.go('root.assistance.computer.list[12]',{id:null,name:null});
    };
    var count = 0;
    $scope.delFn = function(){//确认删除
        var data = {
            id:$stateParams.id
        };
        computerSer.ComputerDelete(data).then(function(response){
            if(response.data.code==0){
                count++;
                toastr.info( "信息已删除", '温馨提示');
                $scope.$emit('changeId', null);
                $scope.delShow = false;
                if(($scope.custom.itemsCount-count)%10){
                    $state.go('root.assistance.computer.list[12]',{id:null,name:null});
                }else{
                    $state.go('root.assistance.computer.list[12]',{id:null,name:null,page:$location.search().page-1});
                }
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });
    };
});





