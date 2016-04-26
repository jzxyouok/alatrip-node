'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction(){
    //auto render template file index_index.html
    return this.display();
  }
  /////////////////////////////////////////////////////////////////
    //门锁api
    //////////////////////////////////////////////////////////////
    async getbycellAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.isGet()) {
            let map = {
                userCell: this.get('userCell'),
            };
            data = await this.model('user').where(map).find();
        } else {
            //data = await this.modelInstance.where({userCell: "111"}).find();
        }
        return this.success(data);
    }
    //上传身份证信息
    async updatebyidAction() {
        let map = {
            userIdNum: this.post('userIdNum'),
            userIdName: this.post('userIdName'),
            userIdSex: this.post('userIdSex'),
            userIdRace: this.post('userIdRace'),
            userIdBirth: this.post('userIdBirth'),
            userIdAddress: this.post('userIdAddress'),
            userIdIssuer: this.post('userIdIssuer'),
            userIdBDate: this.post('userIdBDate'),
            userIdEDate: this.post('userIdEDate'),
            userIdCode: this.post('userIdCode'),
            userIdFrom: this.post('userIdFrom'),
        };
        let rows = await this.model('user').where({ userCell: this.post('userCell') }).update(map);
        return this.success({ affectedRows: rows });
    }
    /////////////////////////////////////////////////////////////////
    //APP api
    //////////////////////////////////////////////////////////////
    //登录
    async loginAction() {
  
            let map = {
                userCell: this.post('userCell'),
               // userPassword: this.post('userPassword'),
               userPassword: encryptPassword(this.post('userPassword'))
            };
            let data = await this.model('user').login(map);
            if (think.isEmpty(data)) {
                return this.fail(1,"账号密码错误！","1");
            } else {
                return this.success(data);
                
            }
        
    }
    //注册
    async registerAction() {
        let map = {
            userCell: this.post('userCell'),
            userPassword: encryptPassword(this.post('userPassword')),
      
            userLever:0,
            userBlacklist:0,
            userUpdate:gettimes()
            
        };
        let data1 = await this.model('user').where({ userCell: map.userCell }).find();


        if ((think.isEmpty(data1))) {
            
                let data = await this.model('user').register(map);
                if (data) {

                    return this.success(data);
                } else {


                    return this.fail(3,"无法注册！","3");
                }

           
        } else {
            return this.fail(2,"手机号已经注册！","2");
        }

    }
}