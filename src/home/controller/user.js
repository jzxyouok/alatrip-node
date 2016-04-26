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
   //登录
    async loginAction() {
        if (this.isGet()) {
            //判断是否登录
            let data = await this.session('userInfo');
            if (!think.isEmpty(data)) {
                this.redirect("/index/index");
            } else {
                this.redirect("/index/login");
                this.display();
            }
        } else {
            let map = {
                userCell: this.post('userCell'),
                userPassword: this.post('userPassword')
            };
            let data = await this.model('user').login(map);
            if (data) {
                //设置session
                await this.session('userInfo', data);
                return this.redirect("/index/index");
            } else {
                return this.redirect("/index/login");
            }
        }
    }
    async registerAction() {
        let map = {
            userId: "2",
            userCell: this.post('userCell'),
            userPassword: this.post('userPassword'),
            userIdNum: this.post('userIdNum')
        };
        let data1 = await this.model('user').where({ userCell: map.userCell }).find();


        if ((think.isEmpty(data1))) {
            let data2 = await this.model('user').where({ userIdNum: map.userIdNum }).find();
            if (think.isEmpty(data2)) {
                let data = await this.model('user').register(map);
                if (data) {
                    //设置session
                    await this.session('userInfo', data);
                    return this.redirect("/index/index");
                } else {
                    return this.redirect("/index/register");
                }

            } else {
              

            }
        } else {
           
        }

    }
      async regAction() {
        let map = {
            userId: "6",
            userCell: this.post('userCell'),
            userPassword: this.post('userPassword'),
            userIdNum: this.post('userIdNum')
        };
        


    let data = await this.model('user').register(map);
                return this.success({ affectedRows: data });

    }
}