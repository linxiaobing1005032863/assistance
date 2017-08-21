var app = angular.module('tanceAdd', ['toastr']);
app.controller('tanceAddCtrl', function($scope, tanceSer,$state,toastr){
    //添加
    $scope.addPlanFun = function(){
        var vm = $scope;
        tanceSer.addTance(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.tancestandard.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



