var app = angular.module('hotAdd', ['toastr']);
app.controller('hotAddCtrl', function($scope, hotSer,$state,toastr){
    //添加
    $scope.addHotFun = function(){
        var vm = $scope;
        vm.addId.assistStartTime = angular.element('.assistStartTime').val();
        vm.addId.assistEndTime = angular.element('.assistEndTime').val();
        vm.addId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.addId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.addId.outTime = angular.element('.outTime').val();
        hotSer.addHot(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.hotassist.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



