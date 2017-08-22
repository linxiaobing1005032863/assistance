
var app = angular.module('computerProGroup', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('computerProGroupCtrl',function($scope,computerSer,toastr,ipCookie){

    //获取项目组
    computerSer.listAllGroup().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    computerSer.AllComputerProGroup().then(function(response){
        if(response.data.code == 0){
            $scope.summaryListss = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.myFunc=function () {
        var vm=$scope;
        data={
            projectGroup:$scope.projectGroup
        };
        computerSer.ComputerProGroup(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});

