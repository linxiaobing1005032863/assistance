var app = angular.module('anceempAdd', ['toastr']);
app.controller('anceempAddCtrl', function($scope, anceempSer,$state,toastr){
    //添加
    $scope.addAnceempFun = function(){
        var vm = $scope;
        vm.addId.recieveStartTime = angular.element('.recieveStartTime').val();
        vm.addId.recieveEndTime = angular.element('.recieveEndTime').val();
        vm.addId.entryJobTime = angular.element('.entryJobTime').val();
        anceempSer.addAnceemp(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.anceemp.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



