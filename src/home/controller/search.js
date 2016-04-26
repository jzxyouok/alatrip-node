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
   async resultAction() {
        let type = this.get('type');

        switch (type) {
            case '1':
           
                let map = {
                    hotelCity: this.get('CityName'),
                    hotelState: 1
                };

                let page = this.get('page') ? this.get('page') : 1;
                let data = await this.model('hotel').findHotelByAddress(map, page, 1);
                let html = pagination(data, this.http, {});
                this.assign('pagination', html);
                this.assign('list', data);
                this.display();


                break;
            case '2':
                this.assign('name', "www");
                break;
            default:

        }

        return this.display();
    }
}