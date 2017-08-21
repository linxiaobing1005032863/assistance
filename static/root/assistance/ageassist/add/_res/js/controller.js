var app = angular.module('ageAdd', ['toastr']);
app.controller('ageAddCtrl', function($scope, ageSer,$state,toastr){
    //添加
    $scope.addAgeFun = function(){
        var vm = $scope;
        vm.addId.entryTime = angular.element('.entryTime').val();
        vm.addId.giveAssistTime = angular.element('.giveAssistTime').val();
        ageSer.addAge(vm.addId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.ageassist.list[12]');
                toastr.success("已成功添加", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };

});



