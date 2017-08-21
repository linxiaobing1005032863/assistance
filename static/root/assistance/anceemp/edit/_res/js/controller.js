var app = angular.module('anceempEdit', ['toastr']);
app.controller('anceempEditCtrl', function($scope, anceempSer,$stateParams,$state,toastr){
    var anceempData ={id: $stateParams.id};

    //获取ID
    anceempSer.findAnceempId(anceempData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });
    //编辑点击提交
    $scope.editAnceempFun = function(){
        var vm = $scope;
        vm.editId.recieveStartTime = angular.element('.recieveStartTime').val();
        vm.editId.recieveEndTime = angular.element('.recieveEndTime').val();
        vm.editId.entryJobTime = angular.element('.entryJobTime').val();
        anceempSer.editAnceemp(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.anceemp.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





