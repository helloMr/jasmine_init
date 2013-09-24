function first_function(){
	
	return "hello world";
}

window.onload=function(){
    var n=na=nb=nc='';
    n=parseInt(Math.random()*10+1);
    na=parseInt(Math.random()*(20-11+1) + 11);
    nb=parseInt(Math.random()*100+1);
    nc=parseInt(Math.random()*(100-51+1) + 51);

    var o=document.getElementsByTagName('input');
    o[0].value=n;
    o[1].value=na;
    o[2].value=nb;
    o[3].value=nc;
} // shawl.qiu script