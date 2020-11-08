var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var players=[];
var iframes = $(".carousel__iframe");	  
function onYouTubePlayerAPIReady() {
for (var i = 0; i < iframes.length; i++) {
	var iframeItem = iframes[i];
	players[i] = new YT.Player(iframeItem, {
				suggestedQuality: 'hd720'
			  });
		  }
		}
$(document).ready(function() {
	$('.click-menu-mobile .icon-bar-mobile').click(function(){
		
		 $('.show-mobile-ul').slideToggle();
	});
    equalize();
    $('[data-toggle="tooltip"]').tooltip(); 
	
	$(".formguidonhang").submit(function () {
    // prevent duplicate form submissions
      $(this).find(":submit").attr('disabled', 'disabled');
	
   });

   /*slider pdoduct*/
	  var sync1 = $("#sync1");
	  var sync2 = $("#sync2");
	 
	  sync1.owlCarousel({
	    singleItem : true,
	    autoPlay : false,
	    slideSpeed :100,
	    navigation: true,
	    pagination:false,
	    afterAction : syncPosition,
	    responsiveRefreshRate : 200,
	    navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	    afterInit : function(el){
	        el.find(".owl-item").eq(0).addClass("activeimg");
	      }
		
	  });
	
	  sync2.owlCarousel({
	    items : 5,
	    itemsDesktop      : [1199,10],
	    itemsDesktopSmall     : [979,10],
	    itemsTablet       : [768,8],
	    itemsMobile       : [479,4],
	    pagination:false,
	    responsiveRefreshRate : 100,
	    afterInit : function(el){
	        el.find(".owl-item").eq(0).addClass("activedt");
	      }
	  });
	 
	  function syncPosition(el){
	    var current = this.currentItem;
	    $("#sync2")
	      .find(".owl-item")
	      .removeClass("activedt")
	      .eq(current)
	      .addClass("activedt")
	     
	      
	    if($("#sync2").data("owlCarousel") != undefined){
	      center(current)
	    }
		
		// youtube
		for (var i = 0; i < players.length; ++i) {
            players[i].pauseVideo();
			
         }

          $(".backdrop").show();
		  
	  }
	  
	 
		  $(".backdrop").click(function() {
			var i = $(this).hide().index('.backdrop');
			players[i].playVideo();
			$(this).html('');
		  });
	 
	  $("#sync2").on("click", ".owl-item", function(e){
	    e.preventDefault();
	    var number = $(this).data("owlItem");
	    sync1.trigger("owl.goTo",number);
	  });
	 
	  function center(number){
	    var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
	    var num = number;
	    var found = false;
	    for(var i in sync2visible){
	      if(num == sync2visible[i]){
	        var found = true;
	      }
	    }
	 
	    if(found==false){
	      if(num>sync2visible[sync2visible.length-1]){
	        sync2.trigger("owl.goTo", num - sync2visible.length+2)
	      }else{
	        if(num - 1 == -1){
	          num = 0;
	        }
	        sync2.trigger("owl.goTo", num);
	      }
	    } else if(num == sync2visible[sync2visible.length-1]){
	      sync2.trigger("owl.goTo", sync2visible[1])
	    } else if(num == sync2visible[0]){
	      sync2.trigger("owl.goTo", num-1)
	    }
	    
	  }
	 
   /*end*/
	  $.fn.customerPopup = function (e, intWidth, intHeight, blnResize) {
		    
		    // Prevent default anchor event
		    e.preventDefault();
		    
		    // Set values for window
		    intWidth = intWidth || '500';
		    intHeight = intHeight || '500';
		    strResize = (blnResize ? 'yes' : 'no');

		    // Set title and open popup with focus on it
		    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
		        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,            
		        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
		  }
	 
	//dm mobile
  $('.btshowdanhmucmobile').click(function(){
	  $(".wrapdanhmucmobile .contentdmmobile").removeClass("hidedanhmucmobile");
	  $(".wrapdanhmucmobile .contentdmmobile").addClass("showdanhmucmobile");
	  //bt
	  $(".btshowdanhmucmobile").removeClass("bthidedanhmucmobile");
	  $(".btshowdanhmucmobile").addClass("bthiendanhmucmobile");
	  $(".btshowdanhmucmobile").hide();
	  $(".bthidedmmobile").removeClass("btandmmobile");
	  $(".bthidedmmobile").addClass("bthiendmmobile");
	  
  }); 
  
  $('.bthidedmmobile').click(function(){
	  $(".wrapdanhmucmobile .contentdmmobile").addClass("hidedanhmucmobile");
	  $(".wrapdanhmucmobile .contentdmmobile").removeClass("showdanhmucmobile");
	  //bt
	  $(".btshowdanhmucmobile").addClass("bthidedanhmucmobile");
	  $(".btshowdanhmucmobile").removeClass("bthiendanhmucmobile");
	  $(".btshowdanhmucmobile").show();
	  $(".bthidedmmobile").addClass("btandmmobile");
	  $(".bthidedmmobile").removeClass("bthiendmmobile");
  });
  
  $('.sharedetail').on("click", function(e) {
       $(this).customerPopup(e);
   });
  
	  $('[data-countdown]').each(function() {
		  var $this = $(this), finalDate = $(this).data('countdown');
		  $this.countdown(finalDate, function(event) {
		    $this.html(event.strftime('%D Ngày %H:%M:%S'));
		  });
		});
	//giờ thêm span
	$('[data-time]').each(function() {
		  var $this = $(this), finalDate = $(this).data('time');
		  $this.countdown(finalDate, function(event) {
		    $this.html(event.strftime("<div class='block'><p>%D</p><span>Ngày</span></div> <div class='block'><p>%H</p><span>Giờ</span></div> <div class='block'><p>%M</p><span>Phút</span></div> <div class='block'><p>%S</p><span>Giây</span></div>"));
		  });
	});
	
	 
    /*kéo*/
	  $(window).scroll(function()
			    {
			          //var TopFixMenu = $("#fixNav");
			          if($(window).scrollTop() + $(window).height() >= 1400)
					  {
			        	  $('.activemuangay').css("display", "block");
					  }
					  else
				      {
				    	  
						  $('.activemuangay').css("display", "none");
				      }
			           
			       
		});
	  
	  $('#checkhoadon').change(function() {
		if ($(this).is(":checked")) {
		    $('.wrap-xuathoadon').show();
			$('.tencongty').prop('required',true);
			$('.diachicongty').prop('required',true);
			$('.mstcongty').prop('required',true);
		}else{
			$('.wrap-xuathoadon').hide();
			$('.tencongty').prop('required',false);
			$('.diachicongty').prop('required',false);
			$('.mstcongty').prop('required',false);
		}
      });
	  $('.clickcheckbox').change(function() {
		  var idprice="";
		  var idnsx="";
		  var locdm="";
		  var idct="";
		  $(".clickcheckbox").each(function(){
			   
			  if(this.checked)
			  {
				  var ktpl=$(this).attr("pl");
				  if(ktpl=='p')//giá
				  {
					  idprice+=$(this).attr("item")+"-";
					  
				  }
				  if(ktpl=='n')
				  {
					  idnsx+=$(this).attr("item")+"-";
				  }
				  if(ktpl=='locdm')
				  {
					  locdm+=$(this).attr("item")+"-";
				  }
				 
			  }
			  idct=$(this).attr("itemct");
          });
		  
		  window.location.href=base_url+'catalog/boolurl?gia='+idprice+'&nsx='+idnsx+'&idct='+idct+'&locdm='+locdm;
	  });
	  $('.clickcheckboxmobile').change(function() {
		  var idprice="";
		  var idnsx="";
		  var locdm="";
		  var idct="";
		  $(".clickcheckboxmobile").each(function(){
			   
			  if(this.checked)
			  {
				  var ktpl=$(this).attr("pl");
				  if(ktpl=='p')//giá
				  {
					  idprice+=$(this).attr("item")+"-";
					  
				  }
				  if(ktpl=='n')
				  {
					  idnsx+=$(this).attr("item")+"-";
				  }
				  if(ktpl=='locdm')
				  {
					  locdm+=$(this).attr("item")+"-";
				  }
				 
			  }
			  idct=$(this).attr("itemct");
          });
		  
		  window.location.href=base_url+'catalog/boolurl?gia='+idprice+'&nsx='+idnsx+'&idct='+idct+'&locdm='+locdm;
	  });
	  $('body').on('click','.number-minus', function (){
		  var num=$('.input-text-sl').val();
		  num=parseInt(num);
		  var booltru=1;
		  if(num<=0)
		  {
			  alert('Xin vui lòng chọn số lượng.');
			  booltru=0;
		  }
		  var status=$('.input-text-sl').attr('status');
		  if(status<1)
		  {
			  alert('Sản phẩm này đã hết hàng, bạn không thể thêm số lượng vào giỏ hàng.');
			  booltru=0;
		  }
		  var max=$('.input-text-sl').attr('maxlength');
		  max=parseInt(max);
		  if(num>max)
		  {
			  alert('Sản phẩm này giới hạn bạn không được mua trên '+ max + ' sản phẩm.');
			  $('.input-text-sl').val(max);
			  booltru=0;
		  }
		  if(booltru>0)
		  {
			  $('.input-text-sl').val(num-1);
		  }
		  
	  });
	  $('body').on('click','.number-plus', function (){
		  var num=$('.input-text-sl').val();
		  num=parseInt(num);
		  var booltru=1;
		  
		  var status=$('.input-text-sl').attr('status');
		  if(status<1)
		  {
			  alert('Sản phẩm này đã hết hàng, bạn không thể thêm số lượng vào giỏ hàng.');
			  booltru=0;
		  }
		  var max=$('.input-text-sl').attr('maxlength');
		  max=parseInt(max);
		  if(num>=max)
		  {
			  alert('Sản phẩm này giới hạn bạn không được mua trên '+ max + ' sản phẩm.');
			  $('.input-text-sl').val(max);
			  booltru=0;
		  }
		  if(booltru>0)
		  {
			  $('.input-text-sl').val(num+1);
		  }
	  });
	 
	  
	/*end kéo*/
    $(".tp-banner").show().revolution({dottedOverlay:"none", delay:9000, startwidth:1170, startheight:540, hideThumbs:200, thumbWidth:100, thumbHeight:50, thumbAmount:5, navigationType:"bullet", navigationArrows:"solo", navigationStyle:"preview4", touchenabled:"on", onHoverStop:"on", swipe_velocity:0.7, swipe_min_touches:1, swipe_max_touches:1, drag_block_vertical:false, parallax:"mouse", parallaxBgFreeze:"on", parallaxLevels:[7, 4, 3, 2, 5, 4, 3, 2, 1, 0], keyboardNavigation:"off", navigationHAlign:"center", 
    navigationVAlign:"bottom", navigationHOffset:0, navigationVOffset:20, soloArrowLeftHalign:"left", soloArrowLeftValign:"center", soloArrowLeftHOffset:20, soloArrowLeftVOffset:0, soloArrowRightHalign:"right", soloArrowRightValign:"center", soloArrowRightHOffset:20, soloArrowRightVOffset:0, shadow:0, fullWidth:"on", fullScreen:"off", spinner:"spinner1", stopLoop:"off", stopAfterLoops:-1, stopAtSlide:-1, shuffle:"off", autoHeight:"off", forceFullWidth:"off", hideThumbsOnMobile:"off", hideNavDelayOnMobile:1500, 
    hideBulletsOnMobile:"off", hideArrowsOnMobile:"off", hideThumbsUnderResolution:0, hideSliderAtLimit:0, hideCaptionAtLimit:0, hideAllCaptionAtLilmit:0, startWithSlide:0, fullScreenOffsetContainer:""});
   
    $("#preloader").fadeOut(30);
    $(".testslider").fadeOut(2000);
    $(".btn-cart").tooltip({title:"Thêm Vào Giỏ Hàng"});
    $(".btn-wish").tooltip({title:"Thích"});
    $(".btn-quickview").tooltip({title:"Xem Nhanh"});
	$(".btn-setting-pr").tooltip({title:"Xem Sản Phẩm"});
    $(".selectpicker").selectpicker({style:"btn-select", size:4});
    $(".mobile-menu").slicknav({prependTo:".navbar-header", parentTag:"liner", allowParentLinks:true, duplicate:true, label:"", closedSymbol:'<i class="fa fa-angle-right"></i>', openedSymbol:'<i class="fa fa-angle-down"></i>'});
    $(".lightbox").nivoLightbox({effect:"fadeScale", keyboardNav:true});
    $(".nav > li:has(ul)").addClass("drop");
    $(".nav > li.drop > ul").addClass("dropdown");
    $(".nav > li.drop > ul.dropdown ul").addClass("sup-dropdown");
    var owl = $(".giasocsale");
    owl.owlCarousel({navigation:false, pagination:true, autoPlay:true, items:1, itemsTablet:1, stagePadding:90, smartSpeed:490, itemsDesktop:[1199, 4], itemsDesktopSmall:[980, 3], itemsTablet:[768, 3], itemsTablet:[767, 3], itemsTabletSmall:[480, 1], itemsMobile:[479, 1]});
    var owl = $(".xuhuong-pr");
    owl.owlCarousel({navigation:false, pagination:true, autoPlay:true, items:4, itemsTablet:3, stagePadding:90, smartSpeed:450, itemsDesktop:[1199, 4], itemsDesktopSmall:[980, 3], itemsTablet:[768, 3], itemsTablet:[767, 3], itemsTabletSmall:[480, 1], itemsMobile:[479, 1]});
    var owl = $(".new-products-home");
    owl.owlCarousel({navigation:true, pagination:false, autoPlay:true, items:4, itemsTablet:3, stagePadding:90, smartSpeed:450, itemsDesktop:[1199, 4], itemsDesktopSmall:[980, 3], itemsTablet:[768, 3], itemsTablet:[767, 3], itemsTabletSmall:[480, 2], itemsMobile:[479, 2]});
    var owl = $(".new-products");
    owl.owlCarousel({navigation:true, pagination:false, autoPlay:true, items:5,itemsTablet:3, stagePadding:90, smartSpeed:450, itemsDesktop:[1199, 5], itemsDesktopSmall:[980, 3], itemsTablet:[768, 3], itemsTablet:[767, 3], itemsTabletSmall:[480, 2], itemsMobile:[479, 2]});
    
    var owl = $("#client-logo");
    owl.owlCarousel({navigation:false, pagination:false, items:5, itemsTablet:3, stagePadding:90, smartSpeed:450, itemsDesktop:[1199, 4], itemsDesktopSmall:[980, 3], itemsTablet:[768, 3], itemsTablet:[767, 2], itemsTabletSmall:[480, 2], itemsMobile:[479, 1]});
    var owl = $(".testimonials-carousel");
    owl.owlCarousel({navigation:false, pagination:true, slideSpeed:1000, stopOnHover:true, autoPlay:true, items:1, itemsDesktop:[1199, 1], itemsDesktopSmall:[980, 1], itemsTablet:[768, 1], itemsTablet:[767, 1], itemsTabletSmall:[480, 1], itemsMobile:[479, 1]});
    var owl = $(".touch-slider");
    owl.owlCarousel({navigation:true, pagination:false, slideSpeed:1000, stopOnHover:true, autoPlay:true, items:1, itemsDesktop:[1199, 1], itemsDesktopSmall:[980, 1], itemsTablet:[768, 1], itemsTablet:[767, 1], itemsTabletSmall:[480, 1], itemsMobile:[479, 1]});
    var newProducts = $(".new-products");
    newProducts.find(".owl-prev").html('<i class="fa fa-angle-left"></i>');
    newProducts.find(".owl-next").html('<i class="fa fa-angle-right"></i>');
    var newProductshome = $(".new-products-home");
    newProductshome.find(".owl-prev").html('<i class="fa fa-angle-left"></i>');
    newProductshome.find(".owl-next").html('<i class="fa fa-angle-right"></i>');
    var testiCarousel = $(".testimonials-carousel");
    testiCarousel.find(".owl-prev").html('<i class="fa fa-angle-left"></i>');
    testiCarousel.find(".owl-next").html('<i class="fa fa-angle-right"></i>');
    var touchSlider = $(".touch-slider");
    touchSlider.find(".owl-prev").html('<i class="fa fa-angle-left"></i>');
    touchSlider.find(".owl-next").html('<i class="fa fa-angle-right"></i>');
    var owl;
    owl = $("#owl-demo");
    owl.owlCarousel({navigation:false, slideSpeed:300, paginationSpeed:400, singleItem:true, afterInit:afterOWLinit, afterUpdate:afterOWLinit});
    function afterOWLinit() {
      $(".owl-controls .owl-page").append('<a class="item-link" />');
      var pafinatorsLink = $(".owl-controls .item-link");
      $.each(this.owl.userItems, function(i) {
        $(pafinatorsLink[i]).css({"background":"url(" + $(this).find("img").attr("src") + ") center center no-repeat", "-webkit-background-size":"cover", "-moz-background-size":"cover", "-o-background-size":"cover", "background-size":"cover"}).on("click", function() {
          owl.trigger("owl.goTo", i);
        });
      });
      $(".owl-pagination").prepend('<a href="#prev" class="prev-owl"/>');
      $(".owl-pagination").append('<a href="#next" class="next-owl"/>');
      $(".next-owl").on("click", function() {
        owl.trigger("owl.next");
      });
      $(".prev-owl").on("click", function() {
        owl.trigger("owl.prev");
      });
    }
    var o = $(".toggle");
    $(window).on("load", function() {
      $(".toggle").on("click", function(e) {
        e.preventDefault();
        var tmp = $(this);
        o.each(function() {
          if ($(this).hasClass("active") && !$(this).is(tmp)) {
            $(this).parent().find(".toggle_cont").slideToggle();
            $(this).removeClass("active");
          }
        });
        $(this).toggleClass("active");
        $(this).parent().find(".toggle_cont").slideToggle();
      });
      $(window).on("click touchstart", function(e) {
        var container = $(".toggle-wrap");
        if (!container.is(e.target) && container.has(e.target).length === 0 && container.find(".toggle").hasClass("active")) {
          container.find(".active").toggleClass("active").parent().find(".toggle_cont").slideToggle();
        }
      });
    });
    var offset = 200;
    var duration = 500;
    $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(400);
      } else {
        $(".back-to-top").fadeOut(400);
      }
    });
    $(".back-to-top").on("click", function(event) {
      event.preventDefault();
      $("html, body").animate({scrollTop:0}, 600);
      return false;
    });
    
   
    $('.clickradiothanhtoan').click(function(){
        var giatri=$(this).val();
        if(giatri==1)
        {
            $('.wrap-taikhoannganhang').show();
        }else{
            $('.wrap-taikhoannganhang').hide();
        }
    });
});
jQuery(window).on('load', function() {
		equalize();
	});