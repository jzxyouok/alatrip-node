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
    /////////////////////////////////////////////////////////////////
    //门锁api
    //////////////////////////////////////////////////////////////
    //获取老用户订单
    async getlistAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.isGet()) {
            let map = {
                hotelCode: this.get('hotelCode'),
                hroomorderGate: this.get('hroomorderGate'),
            };
            data = await this.model('hroomorder').where(map).join("ala_user ON ala_hroomorder.usercell=ala_user.userCell").select();
        } else {
            //data = await this.modelInstance.where({userCell: "111"}).find();
        }
        return this.success(data);
    }
    async getnewAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.isGet()) {
            let map = {
                userCell: this.get('userCell'),
                hotelCode: this.get('hotelCode'),
                hroomorderGate: 3,
            };
            data = await this.model('hroomorder').where(map).find();
        } else {
            //data = await this.modelInstance.where({userCell: "111"}).find();
        }
        return this.success(data);
    }
    //更新订单
    async updatebygateAction() {

        let map = {
            hroomorderGate: this.post('hroomorderGate')
        };
        let rows = await this.model('hroomorder').where({ hroomorderId: this.post('hroomorderId') }).update(map);
        return this.success({ affectedRows: rows });
    }
    //更新订单
    async updatebyintimeAction() {

        let map = {
            hroomorderIntime: this.post('hroomorderIntime')
        };
        let rows = await this.model('hroomorder').where({ hroomorderId: this.post('hroomorderId') }).update(map);
        return this.success({ affectedRows: rows });
    }
    //更新订单
    async updatebyouttimeAction() {

        let map = {
            hroomorderOuttime: this.post('hroomorderOuttime')
        };
        let rows = await this.model('hroomorder').where({ hroomorderId: this.post('hroomorderId') }).update(map);
        return this.success({ affectedRows: rows });
    }
    //更新订单
    async updatebyAction() {

        let map = {
            usercell: this.post('usercell')
        };
        let rows = await this.model('hroomorder').where({ hroomorderId: this.post('hroomorderId') }).update(map);
        return this.success({ affectedRows: rows });
    }
    /////////////////////////////////////////////////////////////////
    //APP api
    //////////////////////////////////////////////////////////////
    //添加订单
    async insertAction() {

        let map = {
            usercell: this.post("usercell"),
            hotelCode: this.post("hotelCode"),
            hroomId: this.post("hroomId"),
            hroomorderBtime: this.post("hroomorderBtime"),
            hroomorderEtime: this.post("hroomorderEtime"),
            hroomorderInvoice: this.post("hroomorderInvoice"),
            hroomorderState: this.post("hroomorderState"),
            hroomorderFname: this.post("hroomorderFname"),
            hroomorderFcell: this.post("hroomorderFcell"),
            hroomorderPay: this.post("hroomorderPay"),
            hroomorderDeposit: this.post("hroomorderDeposit"),
            hroomorderGate: this.post("hroomorderGate"),
            //hroomorderIntime: this.post("hroomorderIntime"),
            //hroomorderOuttime: this.post("hroomorderOuttime")

        };

        let insertId = await this.model("hroomorder").add(map);

        //return this.fail(10,"insertId","11");
        return this.success(insertId);
    }
    //获取订单
    async getorderAction() {
        // this.modelInstance.field('id,user_id,type,status,title,pathname,create_time,update_time');
        let data;
        if (this.isGet()) {
            if (this.get('hroomorderState')) {
                let map = {
                    userCell: this.get('userCell'),
                    hroomorderState: this.get('hroomorderState')
                };
                data = await this.model('hroomorder').where(map).select();
            } else {
                let map = {
                    userCell: this.get('userCell'),
                };
                data = await this.model('hroomorder').where(map).select();
            }

        } else {
            //data = await this.modelInstance.where({userCell: "111"}).find();
        }
        return this.success(data);
    }
    //更新订单
    async updatebystateAction() {
        let rows;

        let state = this.post('hroomorderGate');
        if (state == 99) {
            let map = {
                hroomorderState: this.post('hroomorderState'),

            };
            rows = await this.model('hroomorder').where({ hroomorderId: this.post('hroomorderId') }).update(map);
        } else {
            let map = {
                hroomorderState: this.post('hroomorderState'),
                hroomorderGate: this.post('hroomorderGate')
            };
            rows = await this.model('hroomorder').where({ hroomorderId: this.post('hroomorderId') }).update(map);
        }


        return this.success({ affectedRows: rows });
    }
    //删除订单
    async deleteAction() {


        let rows = await this.model('hroomorder').where({ hroomorderId: this.post('hroomorderId') }).delete();
        return this.success({ affectedRows: rows });
    }

}