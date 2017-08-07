//顶部我的邦礼网账户下拉菜单

$(function(){
	//顶部我的邦礼网账户下拉菜单
	$('.my_account').on('mouseover',function(){
		$('.my_account_menu').slideDown();
	});
	$('.my_account').on('mouseleave',function(){
		$('.my_account_menu').slideUp();
	});
	$('.my_account_menu>li').on('mouseover',function(){
		$(this).css('background','#fff').siblings().css('background','#F7F6F6');
	});
	//顶部我的邦礼网账户下拉菜单结束
	
	//顶部中间广告图关闭
	$('.header_middle span').on('click',function(){
		$('.header_middle').hide();
	});
	
	//子集导航菜单选项卡效果
	$('.subMenuUl').hide();
	$('.navBottomLeftUl').css({'border-left':'1px solid #ccc','border-bottom':'1px solid #ccc'})
	$('.navBottomLeftUl>li').on('mouseover',function(){
		var _index=$(this).index();
		$(this).css({'border-top':'1px solid #ccc','border-bottom':'1px solid #ccc','border-left':'1px solid #ccc','border-right':'1px solid transparent'}).siblings().css('border-right','1px solid #ccc');
		$('.subMenuUl').eq(_index).show().siblings().hide();
	});
	$('.navBottomLeftUl>li').on('mouseleave',function(){
		$(this).css('border','1px solid transparent').siblings().css('border','1px solid transparent');
		$('.navBottomLeftUl').css({'border-left':'1px solid #ccc','border-bottom':'1px solid #ccc'})
		$('.subMenuUl').hide();
	});
	$('.subMenuUl').on('mouseover',function(){
		var _index=$(this).index();
		$('.navBottomLeftUl>li').eq(_index).css({'border-top':'1px solid #ccc','border-bottom':'1px solid #ccc','border-left':'1px solid #ccc','border-right':'1px solid transparent'}).siblings().css('border-right','1px solid #ccc');
		$(this).show();
	});
	$('.subMenuUl').on('mouseleave',function(){
		$(this).hide();
		$('.navBottomLeftUl>li').css('border','1px solid transparent');
	});
	$('.navBottomLeftUl>li').on('mouseover',function(){
		$('.subMenu').show();
	})
	$('.subMenu').on('mouseleave',function(){
		$(this).hide();
	})
	
	
	//广告轮播图
	$('.BannerBtn>li').on('mouseover',function(){
		$(this).css('background','red').siblings().css('background','#fff');
		var _index=$(this).index();
		$('.banner>a').eq(_index).fadeIn().siblings('a').fadeOut();
		clearInterval(BannerTimer);
	});
	$('.banner>a').on('mouseover',function(){
		clearInterval(BannerTimer);
	});
	$('.banner>a').on('mouseleave',function(){
		AutoPlay();
	});
	//自动播放轮播图
	var BannerTimer=null;
	var BannerIndex=$('.BannerBtn>li').index();
	console.log('BannerIndex:'+BannerIndex);
	function AutoPlay(){
		clearInterval(BannerTimer);
		BannerTimer=setInterval(function(){
			
			BannerIndex++;
			
			if(BannerIndex==$('.banner>a').length){
				BannerIndex=0;
			}
			$('.BannerBtn>li').eq(BannerIndex).css('background','red').siblings().css('background','#fff');
			$('.banner>a').eq(BannerIndex).fadeIn().siblings('a').fadeOut();
		},2000);
	}
	AutoPlay();
	
	//轮播图右侧选项卡
	$('.info>a').on('mouseover',function(){
		var _index=$(this).index();
		if(_index==0){
			$(this).css({'border':'none','background':'none'}).siblings('.info>a').css({'border-left':'1px solid #C7C7C7','border-bottom':'1px solid #C7C7C7','background':'#F7F6F6'})
			$('.info>ul').eq(_index).show().siblings('ul').hide();
		}
		else{
			$('.info>a').eq(1).css({'border':'none','background':'none'}).siblings('.info>a').css({'border-right':'1px solid #C7C7C7','border-bottom':'1px solid #C7C7C7','background':'#F7F6F6'})
			$('.info>ul').eq(1).show().siblings('ul').hide();
		}
	});
	
	//返回顶部按钮
	
	
});
$(function(){
//	
//		$('.ReturnTop').hide();
//		$(window).scroll(function(){
//			var sc=$(window).scrollTop();
//			var Height=$(window).height();
//			if(sc>0){
//				$('.ReturnTop').fadeIn(1500);
//			}
//			else{
//				$('.ReturnTop').fadeOut(1500);
//			}
//			$('.ReturnTop').on('click',function(){
//					$('body,html').animate({
//						scrollTop:0
//					},300);
//					return false;
//			});
//		});
		
(function() {  
//  var $backToTopTxt = "返回顶部"  
    $backToTopEle = $('<div class="ReturnTop"><img src="images/result-top-btn.png"/></div>').appendTo($("body")).click(function() {  
        $("html, body").animate({  
            scrollTop: 0  
        },120);  
    })  
    $backToTopFun = function() {  
        var st = $(document).scrollTop(),  
        winh = $(window).height(); (st > 0) ? $backToTopEle.fadeIn() : $backToTopEle.fadeOut();  
        //IE6下的定位  
        if (!window.XMLHttpRequest) {  
            $backToTopEle.css("top", st + winh - 166);  
        }  
    };  
    $(window).on("scroll", $backToTopFun);  
    $(function() {  
        $backToTopFun();  
    });  
})();  
		
	
});
	
	//每层楼层广告中的按钮（上一个 下一个）；
	$(function(){
		var FloorIndex=$('.bannerAuto>.bannerAuto1').index();
		$('.bannerAuto>span:nth-child(6)').on('click',function(){
			FloorIndex++;
			if(FloorIndex==4){
				FloorIndex=0;
			}
			$('.bannerAuto1').eq(FloorIndex).fadeIn().siblings('.bannerAuto1').hide();
			
		});
		$('.bannerAuto>span:nth-child(5)').on('click',function(){
			FloorIndex--;
			if(FloorIndex==-1){
				FloorIndex=3;
			}
			$('.bannerAuto1').eq(FloorIndex).fadeIn().siblings('.bannerAuto1').hide();
		});
		
		//自动播放楼层中的广告图
		var bannerAutoTimer=null;
		var FloorIndex=$('.bannerAuto>.bannerAuto1').index();
		console.log('FloorIndex:'+FloorIndex);
		function bannerAuto(){
			clearInterval(bannerAutoTimer);
			bannerAutoTimer=setInterval(function(){
				FloorIndex++;
				if(FloorIndex==4){
					FloorIndex=0;
				}
				$('.bannerAuto1').eq(FloorIndex).fadeIn().siblings('.bannerAuto1').hide();
			},2000);
		}
		bannerAuto();
		$('.bannerAuto').on('mouseover',function(){
			clearInterval(bannerAutoTimer);
		});
		$('.bannerAuto').on('mouseleave',function(){
			bannerAuto();
		});
		
		
		//平滑过渡
		$('.goodsShow>ul>li>a').on('mouseover',function(){
			$(this).animate({
				marginLeft:"-10px"
			},300);
		});
		$('.goodsShow>ul>li>a').on('mouseleave',function(){
			$(this).animate({
				marginLeft:"0"
			},300);
		});
	});

	

