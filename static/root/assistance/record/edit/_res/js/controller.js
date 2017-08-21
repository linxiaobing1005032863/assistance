var app = angular.module('recordEdit', ['toastr']);
app.controller('recordEditCtrl', function($scope, recordSer,$stateParams,$state,toastr){
    var recordData ={id: $stateParams.id};

    //获取ID
    recordSer.findRecordId(recordData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.editPlanFun = function(){
        var vm = $scope;
        vm.editId.entryJobTime = angular.element('.entryJobTime').val();
        vm.editId.assistEndTime = angular.element('.assistEndTime').val();
        vm.editId.assistStartTime = angular.element('.assistStartTime').val();
        vm.editId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.editId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.editId.assistGiveTime = angular.element('.assistGiveTime').val();
        recordSer.editRecord(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.record.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





