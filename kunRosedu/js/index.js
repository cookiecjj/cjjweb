
/*添加外观效果*/
function featureBind()
{
	/*绑定阴影效果*/
	$("body .main_content_mid").on("mouseover",function(){
		   
		  $(this).css("box-shadow","0px 10px 30px   #505050")
	 	
	})
	$(".main_content_mid").on("mouseleave",function(){
		
		  $(this).css("box-shadow","0px 10px 30px   #808080");
	 
	})
	
	
	 
	
	
}

/*给定指定元素背景*/
function backgroundBind()
{  
     var len=$(".main_content_mid").length;
   	 for(var i=0;i<len;i++)
   	 {
   	 	 $(".main_content_mid:eq("+i+")").css("background","url(img/background/"+ i%7+".jpg) no-repeat");	
   	 	  $(".main_content_mid:eq("+i+")").css("background-size","cover");	
   	  
   	 	
   	 }
   	 
   	
 
  
	
}



$(function(){
	
	featureBind();
	backgroundBind()
});
