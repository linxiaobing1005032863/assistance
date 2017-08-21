var app = angular.module('recordAdd', ['toastr']);
app.controller('recordAddCtrl', function($scope, recordSer,$state,toastr){
    //添加
    $scope.addRecordFun = function(){
        var vm = $scope;
        vm.addId.entryJobTime = angular.element('.entryJobTime').val();
        vm.addId.assistEndTime = angular.element('.assistEndTime').val();
        vm.addId.assistStartTime = angular.element('.assistStartTime').val();
        vm.addId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.addId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.addId.assistGiveTime = angular.element('.assistGiveTime').val();
        recordSer.addRecord(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.record.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



