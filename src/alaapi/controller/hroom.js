'use strict';

import Base from './base.js';

export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  indexAction() {
    //auto render template file index_index.html
    return this.display();
  }
  //获取酒店房间类型
  async getroomAction() {
    // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
    let roomdata=[];
    if (this.isGet()) {
      let map = {
        hotelId: this.get('hotelId'),
        hroomtypeId: this.get('hroomtypeId'),

        hroomSate: 1,
      };
      let data = await this.model('hroom').where(map).select();
      for(let hroom of data){
        var lable = 1;
        let states = await this.model('hroomSate').where({hroomId:hroom.hroomId}).select();
        for(let state of states){
          if(timeInclude(state.hroomstatebtime,state.hroomstateetime,this.get('btime'),this.get('etime'))){
            label=0;
            break;
          }
        }
        if(lable==1){
          roomdata.push(hroom);
        }
        
      }

    } else {
      //data = await this.modelInstance.where({userCell: "111"}).find();
    }
    return this.success(roomdata);
  }

}