/**
 * Created with JetBrains RubyMine.
 * User: aaa
 * Date: 13-9-24
 * Time: 下午4:15
 * To change this template use File | Settings | File Templates.
 */

describe("random_num", function () {

    it("Is four numbers?", function () {
        var nums = createRandomNum();

        var N = 0;
        for (i = 0; i < 4; i++) {
            if (nums[i] != "") {
                N++;
            }
        }
        expect(

            N

        ).toBe(4);
    });

    it("Is random number?", function () {

    });

    it("Is different number?", function () {

    });

});