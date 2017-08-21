var app = angular.module('houseEdit', ['toastr']);
app.controller('houseEditCtrl', function($scope, houseSer,$stateParams,$state,toastr){
    var houseData ={id: $stateParams.id};

    //获取ID
    houseSer.findHouseId(houseData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.editHotFun = function(){
        var vm = $scope;
        vm.editId.salaryStartTime = angular.element('.salaryStartTime').val();
        vm.editId.salaryEndTime = angular.element('.salaryEndTime').val();
        vm.editId.assistStartTime = angular.element('.assistStartTime').val();
        vm.editId.assistEndTime = angular.element('.assistEndTime').val();
        houseSer.editHouse(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.houseassist.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





