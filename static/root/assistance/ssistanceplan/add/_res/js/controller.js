var app = angular.module('planAdd', ['toastr']);
app.controller('planAddCtrl', function($scope, planSer,$state,toastr){
    //添加
    $scope.addPlanFun = function(){
        var vm = $scope;
        vm.addId.helpStartTime = angular.element('.helpStartTime').val();
        vm.addId.helpEndTime = angular.element('.helpEndTime').val();
        vm.addId.helpGiveTime = angular.element('.helpGiveTime').val();
        planSer.addPlan(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.ssistanceplan.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



