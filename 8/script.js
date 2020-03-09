function back()
{
	$("#les8_ex7").attr("src","sv_kletka.gif");
}

function next(les8_ex7)
{
	$("#les8_ex7").attr("src","tem_kletka.gif");
}

function um()
{
	$('#les8_ex7').animate({
          width:"100px",
          height:"100px"
      }, 3000 );
}

function uv()
{
	      $('#les8_ex7').animate({
          width:"400px",
          height:"400px"
      }, 3000 );

}

function d1(){
      $('#faq1').slideToggle(500)
}

function d2(){
      $('#faq2').slideToggle(500)
}

function d3(){
      $('#faq3').slideToggle(500)
}


