var app = angular.module('computerAdd', ['toastr']);
app.controller('computerAddCtrl', function($scope, computerSer,$state,toastr){
    //添加
    $scope.addComputerFun = function(){
        var vm = $scope;
        vm.addId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.addId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.addId.assistStartTime = angular.element('.assistStartTime').val();
        vm.addId.assistEndTime = angular.element('.assistEndTime').val();
        computerSer.addComputer(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.computer.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



