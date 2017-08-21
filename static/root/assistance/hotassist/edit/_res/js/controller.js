var app = angular.module('hotEdit', ['toastr']);
app.controller('hotEditCtrl', function($scope, hotSer,$stateParams,$state,toastr){
    var hotData ={id: $stateParams.id};

    //获取ID
    hotSer.findHotId(hotData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.editHotFun = function(){
        var vm = $scope;
        vm.editId.assistStartTime = angular.element('.assistStartTime').val();
        vm.editId.assistEndTime = angular.element('.assistEndTime').val();
        vm.editId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.editId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.editId.outTime = angular.element('.outTime').val();
        hotSer.editHot(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.hotassist.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





