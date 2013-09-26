

describe("compare",function()
{
    it("compare user num with random num",function()
    {   document.getElementById("commit_num").value="1234";
        expect(userCommit()).toBe(true);
    });
})
