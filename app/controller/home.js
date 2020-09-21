'use strict';

const Controller = require('egg').Controller;
const axios = require('axios');

var IpPattern = /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/g;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async ip() {
    const { ctx } = this;
    // 为给定 ID 的 user 创建请求
    const response = await axios.get('http://checkip.dyndns.com/');
    const ip = IpPattern.exec(response.data)[0];
    ctx.body = ip;
  }
}

module.exports = HomeController;
