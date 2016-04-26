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
   async addAction() {
        let data = {
            hotelId: this.post('hotelId'),
            hroomId: this.post('hroomId'),
            userCell: this.post('userCell'),
            pay: this.post('pay'),
            summary: this.post('summary'),
        }
        let result = await this.model('expense').add(data);
        this.success(result);
    }
     
}