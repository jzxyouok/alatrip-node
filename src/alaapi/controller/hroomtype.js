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
      //获取酒店房间类型
    async gettypeAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.isGet()) {
            let map = {
                hotelId: this.get('hotelId'),
             
            };
            data = await this.model('hroomtype').where(map).select();
        } else {
            //data = await this.modelInstance.where({userCell: "111"}).find();
        }
        return this.success(data);
    }
  
}