var app = angular.module('planEdit', ['toastr']);
app.controller('planEditCtrl', function($scope, planSer,$stateParams,$state,toastr){
    var playData ={id: $stateParams.id};

    //获取ID
    planSer.findPlanId(playData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.editPlanFun = function(){
        var vm = $scope;
        vm.editId.helpStartTime = angular.element('.helpStartTime').val();
        vm.editId.helpEndTime = angular.element('.helpEndTime').val();
        vm.editId.helpGiveTime = angular.element('.helpGiveTime').val();
        planSer.editPlan(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.ssistanceplan.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





