
describe("given random_number and user_number when only compare 6 times result: times",function()
    {
        it("no time success",function()
            {
                var mock_number=new Array("1563","2022","3312","4444","5566","1876");
                expect(count_times("1234",mock_number)).toBe(0);
            }
        );

        it("first time success",function()
            {
                var mock_number=new Array("1234");
                expect(count_times("1234",mock_number)).toBe(1);
            }
       );

        it("third time success",function()
            {
                var mock_number=new Array("1111","2222","1234");
                expect(count_times("1234",mock_number)).toBe(3);
            }
        );

        it("sixth time success",function()
            {
                var mock_number=new Array("1563","2022","3312","4444","5566","1234");
                expect(count_times("1234",mock_number)).toBe(6);
            }
        );

        it("try three times -> failure",function()
            {
                var mock_number=new Array("1563","6543","9898");
                expect(count_times("1234",mock_number)).toBe(0);
            }
        );

//        it("try three times -> failure",function()
//            {
//                var mock_number=new Array("1111","2222","3333","1234");
//                expect(count_times("1234",mock_number)).toBe(3);
//            }
//        );
//
//        it("try six times -> failure",function()
//            {
//                var mock_number=new Array("1111","2222","3333","1234");
//                expect(count_times("1234",mock_number)).toBe(3);
//            }
//        );





    }

);