
counts=0;

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
    var m_counts=0,n_counts= 0,nx_counts=0;
    for(var i=0;i<4;i++)
    {
        if(rnumber[i]==unumber[i])
        {
            m_counts++
        }

    }

    for(var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            if(rnumber[i]==unumber[j])
            {
                nx_counts++;
            }

        }
    }

    n_counts=nx_counts-m_counts;

    return m_counts+"A"+n_counts+"B";

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




