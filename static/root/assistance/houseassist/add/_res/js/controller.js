var app = angular.module('houseAdd', ['toastr']);
app.controller('houseAddCtrl', function($scope, houseSer,$state,toastr){
    //添加
    $scope.addHouseFun = function(){
        var vm = $scope;
        vm.addId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.addId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.addId.assistStartTime = angular.element('.assistStartTime').val();
        vm.addId.assistEndTime = angular.element('.assistEndTime').val();
        houseSer.addHouse(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.houseassist.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



