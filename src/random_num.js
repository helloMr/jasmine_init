/*window.onload=function(){
    var n=na=nb=nc='';
    n=parseInt(Math.random()*10);
    na=parseInt(Math.random()*10);
    nb=parseInt(Math.random()*10);
    nc=parseInt(Math.random()*10); */
    //na=parseInt(Math.random()*(20-11+1) + 11);
    //nb=parseInt(Math.random()*100+1);
   // nc=parseInt(Math.random()*(100-51+1) + 51);

//    var o=document.getElementsByTagName('input');
//    o[0].value=n
//    o[1].value=na;
//    o[2].value=nb;
//    o[3].value=nc;

    //11-20: <input type="text" /><br />
   // 1-100: <input type="text" /><br />
    //51-100: <input type="text" /><br />

//} // shawl.qiu script


function createRandomNum() {

    var randomNum = new Array()
    var tmp=-1;
    var repeat=false;
    for (var i=0;i<4;i++)
    {
        repeat=0;
        tmp=parseInt(Math.random() * 10);
        for(var j=0;j<i;j++)
        {
            if(tmp==randomNum[j])
            {
                repeat=true;
                break;
            }
        }
        if(!repeat)
        {
            randomNum[i]=tmp;
        }
        else
        {
            i=i-1;//若重复，循环变量i-1
        }
    }

    //显示随机数
//    var o=document.getElementsByTagName('input');
//    for(i=0;i<4;i++)
//    {
//        o[i].value=randomNum[i];
//      }
    return  randomNum;





//    var n1 = n2 = n3 = n4 = '';
//    n1 = parseInt(Math.random() * 10);
//    n2 = parseInt(Math.random() * 10);
//    n3 = parseInt(Math.random() * 10);
//    n4 = parseInt(Math.random() * 10);
//
//    var randomNum = new Array()
//    randomNum[0] = n1
//    randomNum[1] = n2
//    randomNum[2] = n3
//    randomNum[3] = n4
//
//
//    return randomNum;
}




