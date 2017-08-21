var Router = require('koa-router');
var path = require('path');
var sendfile = require('koa-sendfile');
var server = require(path.resolve('koa/servers/' + path.basename(path.resolve(__filename,'../'))+'/index.js'));
var config = require(path.resolve('plugins/read-config.js'));
var fetch = require('node-fetch');//url转发
var koaBody = require('koa-body');
var request = require('request-promise');
var uploadFile = require(path.resolve('plugins/uploadFile.js'));
var urlEncode = require(path.resolve('plugins/urlEncode.js'));
var fileType = require(path.resolve('plugins/fileType.js'));
module.exports = function(){
    var router = new Router();
    router.get('/ageassist/setButtonPermission', function*(){ //设置导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().settingNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/ageassist/sonPermission', function*(){ //导航权限
        var $self = this;
        var navToken = {userToken:$self.cookies.get('token')};
        yield (server().assNav(navToken)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/assistanceplan/guidePermission:guideAddrStatus', function*(){ //菜单权限
        var $self = this;
        var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
        yield (server().guidePermission(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
            }));
    }).get('/assistanceplan/listAssistancePlan', function*(){ //补助方案列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getplanList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistanceplan/add', function*(){//补助方案添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().getplanAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistanceplan/edit', function*(){//补助方案编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getplanEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistanceplan/resource/audit', function*(){//综合资源部审核
            var $self = this;
            var addData = $self.request.body;
            addData.userToken = $self.cookies.get('token');
        yield (server().getplanResource(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistanceplan/manage/audit', function*(){//总经办审核
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getplanManage(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistanceplan/finace/audit', function*(){//运营财务部审核
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getplanFinace(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistanceplan/one', function*(){//根据id查询补助方案
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().getplanId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistanceplan/delete', function*(){//删除补助方案
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getplanDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistanceplan/count', function*(){//获取补助方案总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getplanTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancestandard/guidePermission:guideAddrStatus', function*(){ //补助标准菜单权限
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
            yield (server().tancePermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/assistancestandard/list', function*(){ //补助标准列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().gettanceList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistancestandard/add', function*(){//补助标准添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().gettanceAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistancestandard/edit', function*(){//补助标准编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().gettanceEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancestandard/getOneById', function*(){//根据id查询补助标准
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().gettanceId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancestandard/delete', function*(){//删除补助标准
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().gettanceDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancestandard/count', function*(){//获取补助标准总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().gettanceTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancerecord/guidePermission:guideAddrStatus', function*(){ //公司员工补助信息记录菜单权限
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
            yield (server().RecordPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/assistancerecord/list', function*(){ //公司员工补助信息记录列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getRecordList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistancerecord/add', function*(){//公司员工补助信息记录添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().getRecordAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistancerecord/edit', function*(){//公司员工补助信息记录编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getRecordEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancerecord/one', function*(){//根据id查询公司员工补助信息记录
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().getRecordId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancerecord/delete', function*(){//删除公司员工补助信息记录
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getRecordDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistancerecord/count', function*(){//获取公司员工补助信息记录总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getRecordTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistanceemp/guidePermission:guideAddrStatus', function*(){ //补助员工名单菜单权限
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
            yield (server().AnceempPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/assistanceemp/list', function*(){ //补助员工名单列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getAnceempList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistanceemp/add', function*(){//补助员工名单添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().getAnceempAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/assistanceemp/edit', function*(){//补助员工名单编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getAnceempEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistanceemp/one', function*(){//根据id查询补助员工名单
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().getAnceempId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistanceemp/delete', function*(){//删除补助员工名单
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getAnceempDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/assistanceemp/count', function*(){//获取补助员工名单总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getAnceempTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/guidePermission:guideAddrStatus', function*(){ //电脑补助菜单权限
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
            yield (server().computerPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/computerassist/listComputerAssist', function*(){ //电脑补助列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getComputerList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/computerassist/add', function*(){//电脑补助添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().getComputerAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/computerassist/edit', function*(){//电脑补助编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getComputerEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/getOneById', function*(){//根据id查询电脑补助
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().getComputerId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/delete', function*(){//删除电脑补助
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getComputerDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/count', function*(){//获取电脑补助总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getComputerTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/collectByArea', function*(){//电脑补助地区汇总
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getComputerArea(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/collectByArea2', function*(){//电脑补助地区汇总
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getAllComputerArea(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/collectByProGroup', function*(){//电脑补助项目组汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getComputerGroup(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/collectByProGroup2', function*(){//电脑补助项目组汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getAllComputerGroup(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/listAll/area', function*(){//所有地区
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getComAllarea(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/computerassist/listAll/projectGroup', function*(){//所有项目组
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getAllprojectGroup(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/guidePermission:guideAddrStatus', function*(){ //高温补助菜单权限
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
            yield (server().hotPermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/hotassist/listHotAssist', function*(){ //高温补助列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getHotList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/hotassist/add', function*(){//高温补助添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().getHotAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/hotassist/edit', function*(){//高温补助编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getHotEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/getOneById', function*(){//根据id查询高温补助
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().getHotId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/delete', function*(){//删除高温补助
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getHotDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/count', function*(){//获取高温补助总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getHotTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/collectByArea', function*(){//高温补助地区汇总
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getHotArea(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/collectByArea2', function*(){//高温补助地区汇总
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getAllHotArea(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/collectByProGroup', function*(){//高温补助项目组汇总
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getHotGroup(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/collectByProGroup2', function*(){//高温补助项目组汇总
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getAllHotGroup(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/listAll/area', function*(){//获取所有地区
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getAllarea(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/hotassist/listAll/projectGroup', function*(){//获取所有项目组
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getAllGroup(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ageassist/guidePermission:guideAddrStatus', function*(){ //工龄补助菜单权限
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
            yield (server().AgePermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/ageassist/list', function*(){ //工龄补助列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getAgeList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ageassist/add', function*(){//工龄补助添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().getAgeAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/ageassist/edit', function*(){//工龄补助编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getAgeEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ageassist/one', function*(){//根据id查询工龄补助
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().getAgeId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ageassist/delete', function*(){//删除工龄补助
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getAgeDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/ageassist/count', function*(){//获取工龄补助总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getAgeTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/houseassist/guidePermission:guideAddrStatus', function*(){ //住宿补助菜单权限
            var $self = this;
            var page = {name:$self.params.guideAddrStatus,userToken:$self.cookies.get('token')};
            yield (server().HousePermission(page)
                .then((parsedBody) =>{
                    var responseText = JSON.parse(parsedBody);
                    $self.body = responseText;
                }).catch((error) =>{
                    $self.set('Content-Type','application/json;charset=utf-8');
                    $self.body=error.error;
                }));
        }).get('/houseassist/listHouseAssist', function*(){ //住宿补助列表
        var $self = this;
        var page = $self.request.query;
        page.userToken = $self.cookies.get('token');
        yield (server().getHouseList(page)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/houseassist/add', function*(){//住宿补助添加
        var $self = this;
        var addData = $self.request.body;
        addData.userToken = $self.cookies.get('token');
        yield (server().getHouseAdd(addData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/houseassist/edit', function*(){//住宿补助编辑
        var $self = this;
        var editData = $self.request.body;
        editData.userToken = $self.cookies.get('token');
        yield (server().getHouseEdit(editData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/houseassist/getOneById', function*(){//根据id查询住宿补助
        var $self = this;
        var findById = $self.request.query;
        findById.userToken = $self.cookies.get('token');
        yield (server().getHouseId(findById)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/houseassist/delete', function*(){//删除住宿补助
        var $self = this;
        var deleteData = $self.request.query;
        deleteData.userToken = $self.cookies.get('token');
        yield (server().getHouseDelete(deleteData)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/houseassist/count', function*(){//获取住宿补助总条数
        var $self = this;
        var count = $self.request.query;
        count.userToken = $self.cookies.get('token');
        yield (server().getHouseTotal(count)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/user/logout', function*(next){
        var url = this.request.query;
        this.cookies.set("absUrl",url.absurl);
        this.body = {
            code:0,
            msg:"重定向"
        };
    }).get('/listSetting', function*(){
        var $self = this;
        var setting = this.request.query;
        setting.userToken = $self.cookies.get('token');
        yield (server().listSetting(setting)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/countSetting', function*(){
        var $self = this;
        yield (server().countSetting()
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getpermit', function*(){
        var $self = this;
        var getId = $self.request.query;
        yield (server().getpermit(getId)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).get('/getListpermit', function*(){
        var $self = this;
        var listPermit = $self.request.query;
        yield (server().getListpermit(listPermit)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    }).post('/editSetting', function*(){
        var $self = this;
        var editSet = $self.request.body;
        editSet.userToken = $self.cookies.get("token");
        yield (server().editSetting(editSet)
            .then((parsedBody) =>{
                var responseText = JSON.parse(parsedBody);
                $self.body = responseText;
            }).catch((error) =>{
                $self.set('Content-Type','application/json;charset=utf-8');
                $self.body=error.error;
                console.error(error.error);
            }));
    })
    return router;
};


