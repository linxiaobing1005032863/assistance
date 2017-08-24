var request = require('request-promise');
var path = require('path');
var config = require(path.resolve('plugins/read-config.js'));
var form = require(path.resolve('plugins/form.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
module.exports = function(){

    //设置导航权限
    this.settingNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/ageassist/v1/setButtonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //导航权限
    this.assNav = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/ageassist/v1/sonPermission',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    this.guidePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补助方案列表
    this.getplanList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/listAssistancePlan${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加补助方案
    this.getplanAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑补助方案
    this.getplanEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    // 总经办审核
    this.getplanManage = function(argvs){
        console.log(argvs.manageAdvice);
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/manage/audit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        console.log(options.uri)
        return request(options);
    };
    // 运营财务部审核
    this.getplanFinace = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/finace/audit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //综合资源部审核
    this.getplanResource = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/resource/audit${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询补助方案
    this.getplanId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/one/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除补助方案
    this.getplanDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补助方案总条数
    this.getplanTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceplan/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补助标准菜单权限
    this.tancePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancestandard/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补助标准列表
    this.gettanceList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancestandard/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 补助标准方案
    this.gettanceAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancestandard/v1/add${urlEncode(argvs,true)}`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑补助标准
    this.gettanceEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancestandard/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询补助标准
    this.gettanceId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancestandard/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除补助标准
    this.gettanceDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancestandard/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //补助标准总条数
    this.gettanceTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancestandard/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司员工补助信息记录菜单权限
    this.RecordPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancerecord/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司员工补助信息记录列表
    this.getRecordList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancerecord/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加公司员工补助信息记录
    this.getRecordAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancerecord/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑公司员工补助信息记录
    this.getRecordEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancerecord/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询公司员工补助信息记录
    this.getRecordId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancerecord/v1/one/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除公司员工补助信息记录
    this.getRecordDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancerecord/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司员工补助信息记录总条数
    this.getRecordTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistancerecord/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司员工补助信息记录菜单权限
    this.AnceempPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceemp/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司员工补助信息记录列表
    this.getAnceempList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceemp/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加公司员工补助信息记录
    this.getAnceempAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceemp/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑公司员工补助信息记录
    this.getAnceempEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceemp/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询公司员工补助信息记录
    this.getAnceempId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceemp/v1/one/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除公司员工补助信息记录
    this.getAnceempDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceemp/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //公司员工补助信息记录总条数
    this.getAnceempTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/assistanceemp/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //电脑补助菜单权限
    this.computerPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //电脑补助列表
    this.getComputerList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/listComputerAssist${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        console.log(options)
        return request(options);
    };
    // 添加电脑补助
    this.getComputerAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑电脑补助
    this.getComputerEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询电脑补助
    this.getComputerId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除电脑补助
    this.getComputerDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //电脑补助总条数
    this.getComputerTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //电脑补助地区汇总
    this.getComputerArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/computerassist/v1/collectByArea?area='+encodeURIComponent(argvs.area),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //电脑补助地区汇总
    this.getAllComputerArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/collectByArea`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //电脑补助项目组汇总
    this.getComputerGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/computerassist/v1/collectByProGroup?projectGroup='+encodeURIComponent(argvs.projectGroup),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //电脑补助项目组汇总
    this.getAllComputerGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/collectByProGroup`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //所有地区
    this.getComAllarea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/listAll/area`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //所有项目
    this.getAllprojectGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/computerassist/v1/listAll/projectGroup`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //高温补助菜单权限
    this.hotPermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //高温补助列表
    this.getHotList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/listHotAssist${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加高温补助
    this.getHotAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑高温补助
    this.getHotEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询高温补助
    this.getHotId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除高温补助
    this.getHotDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //高温补助总条数
    this.getHotTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };


    //高温补助地区汇总
    this.getHotArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
             uri : config()['rurl'] + '/hotassist/v1/collectByArea?area='+encodeURIComponent(argvs.area),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //高温补助地区汇总
    this.getAllHotArea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/hotassist/v1/collectByArea',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //高温补助项目组汇总
    this.getHotGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/hotassist/v1/collectByProGroup?projectGroup='+encodeURIComponent(argvs.projectGroup),
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //高温补助项目组汇总
    this.getAllHotGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/hotassist/v1/collectByProGroup',
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //高温补助项目组汇总需要的所有地区
    this.getAllarea = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/listAll/area`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //高温补助项目组汇总需要的所有项目组
    this.getAllGroup = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/hotassist/v1/listAll/projectGroup`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //工龄补助菜单权限
    this.AgePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/ageassist/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //工龄补助列表
    this.getAgeList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/ageassist/v1/list${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加工龄补助
    this.getAgeAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/ageassist/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑工龄补助
    this.getAgeEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/ageassist/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询工龄补助
    this.getAgeId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/ageassist/v1/one/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除工龄补助
    this.getAgeDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/ageassist/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //工龄补助总条数
    this.getAgeTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/ageassist/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿补助菜单权限
    this.HousePermission = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/houseassist/v1/guidePermission?guideAddrStatus=`+argvs.name,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿补助列表
    this.getHouseList = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/houseassist/v1/listHouseAssist${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 添加住宿补助
    this.getHouseAdd = function(argvs){
        var options = {
            method : 'POST',
            timeout : 3000,
            uri : config()['rurl'] + `/houseassist/v1/add`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    // 编辑住宿补助
    this.getHouseEdit = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + `/houseassist/v1/edit`,
            form:argvs,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //根据id查询住宿补助
    this.getHouseId = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/houseassist/v1/getOneById/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };

    //根据id删除住宿补助
    this.getHouseDelete = function(argvs){
        var options = {
            method : 'DELETE',
            timeout : 3000,
            uri : config()['rurl'] + `/houseassist/v1/delete/${argvs.id}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //住宿补助总条数
    this.getHouseTotal = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/houseassist/v1/count${urlEncode(argvs,true)}`,
            headers:{
                userToken:argvs.userToken
            }
        };
        return request(options);
    };
    //权限设置
    this.listSetting = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/list?limit=10&page=${argvs.page}`,
            headers : {
                userToken : argvs.userToken
            }

        };
        return request(options);
    };
    this.countSetting = function(){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/count',
        };
        return request(options);
    };
    this.getpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/getOneById/${argvs.id}`,
        };
        return request(options);
    };
    this.getListpermit = function(argvs){
        var options = {
            method : 'GET',
            timeout : 3000,
            uri : config()['rurl'] + `/cuspermission/v1/listOperateById/${argvs.id}`,
        };
        return request(options);
    };
    this.editSetting = function(argvs){
        var options = {
            method : 'PUT',
            timeout : 3000,
            uri : config()['rurl'] + '/cuspermission/v1/edit',
            headers:{
                userToken:argvs.userToken
            },
            form:argvs
        };
        return request(options);
    };
    return this;
}
