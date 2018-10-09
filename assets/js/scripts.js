function nuit(){
	var btnDayNight = document.getElementById("btnDayNight");
   	if(body.className=='day'){
  		body.className='night';
  		btnDayNight.innerHTML="Click to day mode";
   	}else{
   		body.className='day';
  		btnDayNight.innerHTML="Click to night mode";
  	}
}
