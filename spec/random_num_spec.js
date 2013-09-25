/**
 * Created with JetBrains RubyMine.
 * User: aaa
 * Date: 13-9-24
 * Time: 下午4:15
 * To change this template use File | Settings | File Templates.
 */

describe("random_num.js", function () {

    it("Is four numbers?", function () {
        var nums = createRandomNum();

        var N = 0;
        for (i = 0; i < 4; i++) {
            if (nums[i] !== "") {
                N++;
            }
        }
        expect(

            N

        ).toBe(4);
    });

    it("Is random number?", function () {
        var tmpNum;
        var frequency = new Array();
        var sum = new Array(0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        var rightP=0;
        for ( var i = 0; i < 1000; i+=4) {
            tmpNum = createRandomNum();
            frequency[i]=tmpNum[0];
            frequency[i+1]=tmpNum[1];
            frequency[i+2]=tmpNum[2];
            frequency[i+3]=tmpNum[3];

        }

        for (i = 0; i < 1000; i++)
        {

                if (frequency[i] === 0) {
                    sum[0]++ ;
                }
                if (frequency[i]=== 1) {
                    sum[1]++ ;
                }
                if (frequency[i] === 2) {
                    sum[2]++ ;
                }
                if (frequency[i] === 3) {
                    sum[3]++  ;
                }
                if (frequency[i] === 4) {
                    sum[4]++  ;
                }
                if (frequency[i] === 5) {
                    sum[5]++  ;
                }
                if (frequency[i] === 6) {
                    sum[6]++  ;
                }
                if (frequency[i] === 7) {
                    sum[7]++   ;
                }
                if (frequency[i] === 8) {
                    sum[8]++   ;
                }
                if (frequency[i] === 9) {
                    sum[9]++   ;
                }

        }

        for(i=0;i<10;i++)
        {
            var per=sum[i]/1000;
            if(per>=0.07&&per<=0.13)
            {
                rightP++;
            }
        }

       expect(rightP).toBe(10);



    });

    it("Is different number?", function () {
        var cnums = createRandomNum();
        var count_diff=0;
        for(var i=0;i<4;i++)
        {
            for(var j=i+1;j<4;j++)
            {
                if(cnums[i]===cnums[j])
                    count_diff++;
            }
        }
        expect(

            count_diff

        ).toBe(0);

    });

});