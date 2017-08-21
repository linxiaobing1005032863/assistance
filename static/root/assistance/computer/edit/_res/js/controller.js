var app = angular.module('computerEdit', ['toastr']);
app.controller('computerEditCtrl', function($scope, computerSer,$stateParams,$state,toastr){
    var computerData ={id: $stateParams.id};

    //获取ID
    computerSer.findComputerId(computerData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }
    });


    //编辑点击提交
    $scope.editComputerFun = function(){
        var vm = $scope;
        vm.editId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.editId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.editId.assistStartTime = angular.element('.assistStartTime').val();
        vm.editId.assistEndTime = angular.element('.assistEndTime').val();
        computerSer.editComputer(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.computer.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





