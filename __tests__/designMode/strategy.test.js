/*
 * @Description: 策略模式test
 * @Author: mengbin.li
 * @Date: 2020-04-27
 * @LastEditors: mengbin.li
 * @LastEditTime: 2020-04-27
 */

// const strategy = require("../../src/designMode/strategy");
import strategy from '../../src/designMode/strategy';

describe("test strategy feature", () => {
    test("enjoy the strategy", () => {
        const validator = new strategy();
        const data1 = {
          role: 'juejin',
          grade: 3
        };
        validator.add(data1.role, 'checkRole');
        validator.add(data1.grade, 'checkGrade');
        const result = validator.check();
        expect(result).toBe(true);

        const validator2 = new strategy();
        const data2 = {
          role: 'juejin',
          job: 'BE'
        };
        validator2.add(data2.role, 'checkRole');
        validator2.add(data2.job, 'checkJob');

        const result2 = validator2.check();
        expect(result2).toBe(true);

    })
});
