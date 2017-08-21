var app = angular.module('planfinace', ['toastr']);
app.controller('planfinaceCtrl', function($scope, planSer,$stateParams,$state,toastr){
    var finaceData ={id: $stateParams.id};

    //获取ID
    planSer.findPlanId(finaceData).then(function(response){
        if(response.data.code==0){
            $scope.finaceId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //点击提交
    $scope.planFinaceFun = function(){
        var vm = $scope;
        vm.finaceId.id=$stateParams.id;
        planSer.planFinace(vm.finaceId).then(function(response){
            console.log(response)
            if(response.data.code == 0){
                $state.go('root.assistance.ssistanceplan.list[12]');
                toastr.success( "审核成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





