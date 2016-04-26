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
  //获取城市酒店
    async getlistbycityAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.isGet()) {
            let map = {
                hotelCity: this.get('hotelCity'),

                hotelState: 2,
            };
            let hotelCity = this.get('hotelCity');
              let hotelLatitude = this.get('hotelLatitude');
              let hotelLongitude = this.get('hotelLongitude');
              let page = this.get('page');
              let num = this.get('num');
            data = await this.model('hotel').getlistbycity(hotelLatitude,hotelLongitude,hotelCity,1,page,num);
        } else {
            //data = await this.modelInstance.where({userCell: "111"}).find();
        }
        return this.success(data);
    }
}