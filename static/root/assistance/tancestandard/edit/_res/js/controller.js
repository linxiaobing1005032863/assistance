var app = angular.module('tanceEdit', ['toastr']);
app.controller('tanceEditCtrl', function($scope, tanceSer,$stateParams,$state,toastr){
    var tanceData ={id: $stateParams.id};

    //获取ID
    tanceSer.findTanceId(tanceData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.editTanceFun = function(){
        var vm = $scope;
        vm.editId.id=$stateParams.id;
        tanceSer.editTance(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.tancestandard.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





