$(function(){
   
  //滑动导航
  n=$('.nav_0 li').size();  

  var wh=100*n+"%";
  $('.nav_0').width(wh);
  var lt=(100/n/3);
 
  var lt_li=lt+"%";
  $('.nav_0 li').width(lt_li);      
  var y=0;
  var w=n/2; 
  var a=1           
  $(".nav_0").swipe( {          
    swipeLeft:function() {
      if(a==4){
        
      }else{
        y=y-lt;               
        var t=y+"%";                  
        $(this).css({'-webkit-transform':"translate("+t+")",'-webkit-transition':'600ms linear'} );
        a++ 
      }
    },
    swipeRight:function() {
      if(a==1){
       
      }else{
        y=y+lt;
        var t=y+"%";
        $(this).css({'-webkit-transform':"translate("+t+")",'-webkit-transition':'600ms linear'} ); 
        a--
      }
      
    }
  });
//end
//左右点击翻页
   m=$('#content #s_1 .mask .tupian img').size();  

  var sh=100*m+"%";
  $('#content #s_1 .mask .tupian').width(sh);
  var  ss=$(window).width()
  $('#content #s_1 .mask .tupian img').width(ss);      
  var b=1  
  $("#content #s_1 .mask .fanye .mask_left").click(function(){
      if(b==4){

      }else{
        $('#content #s_1 .mask .tupian').animate({"left":"-="+ss},300)
        b=b+1
       $("#content #s_1 .mask .fanye .nubmer").html(b+"/4")
      }
  }) 
  $("#content #s_1 .mask .fanye .mask_right").click(function(){
      if(b==1){

      }else{
        $('#content #s_1 .mask .tupian').animate({"left":"+="+ss},300)
        b=b-1
       $("#content #s_1 .mask .fanye .nubmer").html(b+"/4")
      }
  })           
 
    //end//
  //图片轮播//
  $(".main_visual").hover(function(){
        $("#btn_prev,#btn_next").fadeIn()
    },function(){
        $("#btn_prev,#btn_next").fadeOut()
    });
    
    $dragBln = false;
    
    $(".main_image").touchSlider({
        flexible : true,
        speed : 200,
        btn_prev : $("#btn_prev"),
        btn_next : $("#btn_next"),
        paging : $(".flicking_con a"),
        counter : function (e){
            $(".flicking_con a").removeClass("on").eq(e.current-1).addClass("on");
        }
    });
    
    $(".main_image").bind("mousedown", function() {
        $dragBln = false;
    });
    
    $(".main_image").bind("dragstart", function() {
        $dragBln = true;
    });
    
    $(".main_image a").click(function(){
        if($dragBln) {
            return false;
        }
    });
    
    timer = setInterval(function(){
        $("#btn_next").click();
    }, 5000);
    
    $(".main_visual").hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        },5000);
    });
    
    $(".main_image").bind("touchstart",function(){
        clearInterval(timer);
    }).bind("touchend", function(){
        timer = setInterval(function(){
            $("#btn_next").click();
        }, 5000);
    });
    
    //end//
    //facebook//
            
         $("#content #facebook .f_top .r").click(function(){
         	  if($("#content #facebook .f_b").is(":visible")){
         	  	$(this).css("background-position","-185px -13px")
              $("#content #facebook .f_b").hide()
         	  }else{
                $(this).css("background-position","-185px -32px")
              $("#content #facebook .f_b").show() 
         	  }
          })
         $("#content #facebook .f_b .txt textarea").focus(function(){
         	$(this).html("")
         })
          $("#content #facebook .f_b .txt textarea").blur(function(){
         	$(this).html("Add a comment...")
         })
          //end//
          //mask//
          $("#content #s_1 .img_1 .page_m").click(function(){
            $("#content #s_1 .mask").css("display","block")
          })
         $("#content #s_1 .mask .close").click(function(){
            $("#content #s_1 .mask").css("display","none")
         })
         //左侧导航栏的弹出//
         var width=$("#content").width()
         var s=true
         $("#title .t_right img").click(function(){
            if(s==true){
               $("#content").animate({"left":"-300px"},100)
               $("#right_page").animate({"left":"-="+'300px'},100)
               s=false
            }else{
                $("#content").animate({"left":"0px"},50)
                $("#right_page").animate({"left":"+="+'300px'},1500)
                
               
               s=true
            }
         })
         //当滚动条到最底部时自动加载图文
          
})