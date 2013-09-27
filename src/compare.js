

function userCommit()
{
    var r_number=getrandm();
    var u_number=getinput();
    compareNum(r_number,u_number);
    showresult(compareNum(r_number,u_number));
    return true;
}




function compareNum(rnumber,unumber)
{
    var a_counts=0,b_counts= 0,bx_counts=0;
    for(var i=0;i<4;i++)
    {
        if(rnumber[i]==unumber[i])
        {
            a_counts++
        }

    }

    for(var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            if(rnumber[i]==unumber[j])
            {
                bx_counts++;
            }

        }
    }

    b_counts=bx_counts-a_counts;

    return a_counts+"A"+b_counts+"B";

}

function getrandm()
{
       var  thisnumber=new_random_number;
        thisnumber.toString();
        return thisnumber;

}

function getinput()
{
    var user_num= document.getElementById("input_num").value;
    return user_num;
}

function showresult(game_result)
{
    document.getElementById("label01").innerText=game_result;
}




