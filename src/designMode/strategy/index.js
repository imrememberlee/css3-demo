/*
 * @Description: 策略模式
 * @Author: mengbin.li
 * @Date: 2020-04-27
 * @LastEditors: mengbin.li
 * @LastEditTime: 2020-04-27
 */

// 维护权限列表
const jobList = ['FE', 'BE'];

// 策略
var strategies = {
  checkRole: function(value) {
    if (value === 'juejin') {
      return true;
    }
    return false;
  },
  checkGrade: function(value) {
    if (value >= 1) {
      return true;
    }
    return false;
  },
  checkJob: function(value) {
    if (jobList.indexOf(value) > 0) {
      return true;
    }
    return false;
  },
  checkEatType: function(value) {
    if (value === 'eat melons') {
      return true;
    }
    return false;
  }
};

// 校验规则
var Validator = function() {
  this.cache = [];

  // 添加策略事件
  this.add = function(value, method) {
    this.cache.push(function() {
      return strategies[method](value);
    });
  };

  // 检查
  this.check = function() {
    for (let i = 0; i < this.cache.length; i++) {
      let valiFn = this.cache[i];
      var data = valiFn(); // 开始检查
      if (!data) {
        return false;
      }
    }
    return true;
  };
};

// module.exports = Validator;
export default Validator;
