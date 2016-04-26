'use strict';
/**
 * model
 */
export default class extends think.model.base {
     async saveTest(data) {
        let info = await this.where({ testCell: data.testCell }).find();
        if (think.isEmpty(info)) {
            return Promise.reject(new Error('不存在'));
        }

        return this.where({  testCell: data.testCell }).update(data);
    }

}