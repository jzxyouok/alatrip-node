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
  async deletestateAction() {

    let map = {
      hroomId: this.post('hroomId'),
      hroomorderId: this.post('hroomorderId'),

    };
    let rows = await this.model('hroomstate').where(map).delete();
    return this.success({ affectedRows: rows });
  }
}