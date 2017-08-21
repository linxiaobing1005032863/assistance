var app = angular.module('ageEdit', ['toastr']);
app.controller('ageEditCtrl', function($scope, ageSer,$stateParams,$state,toastr){
    var ageData ={id: $stateParams.id};

    //获取ID
    ageSer.findAgeId(ageData).then(function(response){
        if(response.data.code==0){
            $scope.editId = response.data.data;
        }else{
            toastr.error( response.data.msg, '温馨提示');
        }

    });


    //编辑点击提交
    $scope.editAgeFun = function(){
        var vm = $scope;
        vm.editId.entryTime = angular.element('.entryTime').val();
        vm.editId.giveAssistTime = angular.element('.giveAssistTime').val();
        ageSer.editAge(vm.editId).then(function(response){
            if(response.data.code == 0){
                $state.go('root.assistance.ageassist.list[12]');
                toastr.success( "编辑成功", '温馨提示');
            }else{
                toastr.error( response.data.msg, '温馨提示');
            }
        });

    };
});





