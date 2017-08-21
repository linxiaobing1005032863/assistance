
var app = angular.module('hotProGroup', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('hotProGroupCtrl',function($scope,hotSer,toastr,ipCookie){

    //获取项目组
    hotSer.AllprojectGroup().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    hotSer.AllHotProGroup().then(function(response){
        if(response.data.code == 0){
            $scope.summaryListss = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.myFunc=function () {
        var data={projectGroup:$scope.projectGroup};
        hotSer.HotProGroup(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});

