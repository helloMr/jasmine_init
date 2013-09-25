/**
 * Created with JetBrains RubyMine.
 * User: aaa
 * Date: 13-9-25
 * Time: 下午3:13
 * To change this template use File | Settings | File Templates.
 */

describe("compare",function()
{
    it("compare user num with random num",function()
    {   document.getElementById("commit_num").value="1234";
        expect(userCommit()).toBe(true);
    });
})
