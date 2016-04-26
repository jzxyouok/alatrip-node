'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  adapter: {
    mysql: {
     host: '127.0.0.1',
      port: '3306',
      database: 'myhome',
      user: 'root',
      password: '1234',
      prefix: 'ala_',
      encoding: 'utf8'
    },
    mongo: {

    }
  }
};