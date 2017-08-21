
var app = angular.module('computerArea', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('computerAreaCtrl',function($scope,computerSer,toastr,ipCookie){

    //获取地区
    computerSer.listallarea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    computerSer.AllComputerArea().then(function(response){
         if(response.data.code == 0){
            $scope.summaryListss = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.myFunc=function () {
        var data={area:$scope.area};
        console.log(data)
        computerSer.ComputerArea(data).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});


