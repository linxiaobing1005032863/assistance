
var app = angular.module('hotArea', ['toastr','angularjs-dropdown-multiselect','ipCookie']);
app.controller('hotAreaCtrl',function($scope,hotSer,toastr,ipCookie){

    //获取地区
    hotSer.Allarea().then(function(response){
        if(response.data.code == 0){
            $scope.workOptions = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    hotSer.AllHotArea().then(function(response){
         if(response.data.code == 0){
            $scope.summaryListss = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });
    $scope.myFunc=function () {
        var data={area:$scope.area};
            hotSer.HotArea(data).then(function(response){
            if(response.data.code == 0){
                $scope.summaryLists = response.data.data;
            }else{
                toastr.error(response.data.msg, '温馨提示');
            }
        })
    }
});


