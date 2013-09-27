

describe("compare",function()
{
    it("compare user num with random num",function()
    {
        expect(compareNum("1234","5678")).toBe(0+"A"+0+"B");
        expect(compareNum("1234","1234")).toBe(4+"A"+0+"B");
        expect(compareNum("1234","2378")).toBe(0+"A"+2+"B");
        expect(compareNum("1234","4321")).toBe(0+"A"+4+"B");


    });

})




