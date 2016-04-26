'use strict';
/**
 * model
 */
export default class extends think.model.base {
        //寻找城市酒店
        async findHotelByAddress(map, page, nums) {
                //map.pass=think.md5(map.pass+'eyblog');
                let data = await this.where(map)
                        .page(page, nums || 10)
                        .countSelect();
                return data;
        }

        async getlistbycity(lat,lon,hotelCity,hotelState,page,num) {
                let p = (page-1)*num;
                
                let sql = "SELECT *,ACOS(SIN(('"+lat+"' * 3.1415) / 180 ) *SIN((hotelLatitude * 3.1415) / 180 ) +COS(('"+lat+"' * 3.1415)/180)*COS((hotelLatitude*3.1415)/180)*COS(('"+lon+"'*3.1415)/180-(hotelLongitude*3.1415)/180))*6380 AS dis"+ 
                "FROM ala_hotel WHERE hotelCity='"+hotelCity+"' AND hotelState='"+hotelState+"' order by dis LIMIT "+p+","+num;
                let data = await this.query(sql);
                return data;
        }

}