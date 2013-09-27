

function userRandomNum()
{
    new_random_number =createRandomNum();
    return   new_random_number;

}

//测试实例


function get_mock_random_num()
{
    return 1234;
}



function get_mock_user_num()
{
    var mock_user_num=createRandomNum();
    mock_user_num.toString();
    return   mock_user_num;
}


//rand_number="1234"
 // user_number   ="1234"
function count_times(rand_number,user_number)
{
    var success_result=4+"A"+0+"B";
    var times= 1,success_tag=false;
//    var per_result=compareNum(rand_number,user_number[0]);


    if (user_number.length < 7)
    {
        for (var i = 0; i < user_number.length; i++) {
            per_result   = compareNum(rand_number, user_number[i]);
            if (per_result != success_result) {

                times++;
            }
            else {
                success_tag=true;
                break;
            }

        }

        if(success_tag==true)
        {
            return times;
        }
        else
        {
            return 0;
        }

    }



//
//    if (user_number.length < 7)
//    {
//        for (var i = 1; i < user_number.length; i++) {
//            if (per_result != success_result) {
//                per_result = compareNum(rand_number, user_number[i]);
//                times++;
//            }
//            else {
//                  success_tag=true;
//                break;
//            }
//
//        }
//
//        if(success_tag==true)
//        {
//            return times;
//        }
//        else
//        {
//            return 0;
//        }
//
//    }


//    if(user_number.length<7)
//    {
//        for( var i=1; i< user_number.length;i++)
//        {
//            if(per_result!=success_result)
//            {
//                per_result =  compareNum(rand_number,user_number[i]);
//                counts++;
//            }
//            else break;
//
//        }
//        return counts;
//    }

}


function success()
{

}