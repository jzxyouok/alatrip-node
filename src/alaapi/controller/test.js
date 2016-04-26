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
    async getAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let p = 1;
        let n = 2
        let ww = (p-1)*n;
       
    //  let sql = "SELECT * FROM ala_test LIMIT "+ww;
    let sql = "SELECT * ,(testCell+'"+p+"')*'"+n+"' AS ee FROM ala_test order by ee LIMIT "+ww+","+n;
      //let sql = "SELECT * ,testCell AS ee FROM ala_test LIMIT "+ww+","+n;
          
            let data = await this.model('test').query(sql);
 
        
        return this.success(data);
    }
   async getbycellAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.isGet()) {
            let map = {
                testCell: this.get('testCell'),
            };
            data = await this.model('test').where(map).find();
        } else {
            //data = await this.modelInstance.where({userCell: "111"}).find();
        }
        return this.success(data);
    }
    async updateAction() {

        let map = {
            testCell: this.post('testCell'),
            testName: this.post('testName'),
            testTime: this.post('testTime'),
      
        };
        let rows = await this.model('test').where({ testCell: map.testCell }).update(map);
        return this.success({ affectedRows: rows });
    }
        async updatebytmeAction() {

        let map = {
            testCell: this.post('testCell'),
            testTime: this.post('testTime'),
      
        };
        let rows = await this.model('test').where({ testCell: map.testCell }).update(map);
        return this.success({ affectedRows: rows });
    }
     async updatebyouttimeAction() {

        let map = {
            testTime: this.post('testTime')
        };
        let rows = await this.model('test').where({ testId: this.post('testId') }).update(map);
        return this.success({ affectedRows: rows });
    }
    async insertAction() {

        let map = {
            testCell: this.post("testCell"),
            testName: this.post("testName")   
                 
        };
        
       let insertId = await this.model("test").add(map);
       let time=times();
       
        return this.success(time);
    }
}