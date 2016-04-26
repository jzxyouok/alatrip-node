'use strict';
/**
 * model
 */
export default class extends think.model.base {
      //登录
	async login(map){
		//map.pass=think.md5(map.pass+'eyblog');
		let data=await this.where(map).find();
		return data;
	}
      //注册
	async register(map){
		//map.pass=think.md5(map.pass+'eyblog');
        
		let data=await this.add(map);
		return data;
	}

}