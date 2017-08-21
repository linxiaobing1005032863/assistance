var app = angular.module('planresource', ['toastr']);
app.controller('planresourceCtrl', function($scope, planSer,$stateParams,$state,toastr){
    var ResourceData ={id: $stateParams.id};

    //获取ID
    planSer.findPlanId(ResourceData).then(function(response){
        if(response.data.code==0){
            $scope.ResourceId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //点击提交
    $scope.planResourceFun = function(){
        var vm = $scope;
        vm.ResourceId.id=$stateParams.id;
        planSer.planResource(vm.ResourceId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.ssistanceplan.list[12]');
                toastr.success( "审核成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





