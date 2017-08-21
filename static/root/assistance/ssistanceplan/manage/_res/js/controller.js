var app = angular.module('planmanage', ['toastr']);
app.controller('planmanageCtrl', function($scope, planSer,$stateParams,$state,toastr){
    var manageData ={id: $stateParams.id};

    //获取ID
    planSer.findPlanId(manageData).then(function(response){
        if(response.data.code==0){
            $scope.manageId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //点击提交
    $scope.planManageFun = function(){
        var vm = $scope;
        data= {
            id: vm.manageId.id,
            manageAdvice: vm.manageId.manageAdvice
        }
        planSer.planManage(data).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.ssistanceplan.list[12]');
                toastr.success( "审核成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





