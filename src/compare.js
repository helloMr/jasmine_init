
counts=0;

function userCommit()
{



    var m=0,n= 0,nx;

    var thisnumber=createRandomNum();
 //   document.getElementById("input_num").value="1234";
    user_num= document.getElementById("input_num").value;


    var x = parseInt(user_num);

    var xnum = new Array();
    xnum[0]=x/1000;
    x=x%1000;
    xnum[1]=x/100;
    x=x%100;
    xnum[2]=x/10;
    x=x%10;
    xnum[3]=x/1;

   // var xequal = new Array();
    for(var i=0;i<4;i++)
    {
        if(xnum[i]===thisnumber[i])
        {
            m++
        }
//        xequal[i]=1;
    }

    for(var i=0;i<4;i++)
    {
        for(var j=i;j<4;j++)
        {
            if(xnum[i]===thisnumber[j])
            {
                nx++;
            }

        }
    }
    n=nx-m;



    user_result=m+"A"+n+"B";
    document.getElementById("label01").innerText=user_result;



    return true;
}