$(document).ready(function(){
	var base_url = "http://localhost:3000";
	$('.clichhinhthucthunhap').click(function(){
		var hinhthuc=$(this).val();
		var tienvay=$('.sotienvaybt').val();
		var thoihan=$('.thoihanvaybt').val();
		if(tienvay=="")
		{
			alert('Vui Lòng Nhập Số Tiền Cần Vay');
			$('.sotienvaybt').focus();
			return false;
		}
		if(hinhthuc==0)
		{
			var congty=$('.clichhinhthuccongty:checked').val();
			$('.hidecongty').show();
			$.post(base_url+'/bangtinh',{'tienvay':tienvay,'thoihan':thoihan,'sonam':congty},function(data){
    			 $('.showbangtinh').html(data);
            })
		}else{
			$('.hidecongty').hide();
			$.post(base_url+'/bangtinh',{'tienvay':tienvay,'thoihan':thoihan,'sonam':0},function(data){
    			 $('.showbangtinh').html(data);
            })
		}
	});
	
	$('.clichhinhthuccongty').click(function(){
		var hinhthuc=$('clichhinhthucthunhap').val();
		var tienvay=$('.sotienvaybt').val();
		var thoihan=$('.thoihanvaybt').val();
		var congty=$(this).val();
		if(tienvay=="")
		{
			alert('Vui Lòng Nhập Số Tiền Cần Vay');
			$('.sotienvaybt').focus();
			return false;
		}	
			$.post(base_url+'/bangtinh',{'tienvay':tienvay,'thoihan':thoihan,'sonam':congty},function(data){
    			 $('.showbangtinh').html(data);
            })
	});
	
	$('.sotienvaybt').keyup(function(){
		var hinhthuc=$('.clichhinhthucthunhap').val();
		
		var tienvay=$('.sotienvaybt').val();
		
		var thoihan=$('.thoihanvaybt').val();
		if(tienvay=="")
		{
			
			alert('Vui Lòng Nhập Số Tiền Cần Vay');
			$('.sotienvaybt').focus();
			return false;
		}
		if(hinhthuc==0)
		{
			var congty=$('.clichhinhthuccongty').val();
			$('.hidecongty').show();
			$.post(base_url+'/bangtinh',{'tienvay':tienvay,'thoihan':thoihan,'sonam':congty},function(data){
    			 $('.showbangtinh').html(data);
            })
		}else{
			$('.hidecongty').hide();
			$.post(base_url+'/bangtinh',{'tienvay':tienvay,'thoihan':thoihan,'sonam':0},function(data){
    			 $('.showbangtinh').html(data);
            })
		}
	});
	
	$('.thoihanvaybt').change(function(){
		var hinhthuc=$('.clichhinhthucthunhap').val();
		
		var tienvay=$('.sotienvaybt').val();
		
		var thoihan=$('.thoihanvaybt').val();
		if(tienvay=="")
		{
			alert('Vui Lòng Nhập Số Tiền Cần Vay');
			$('.sotienvaybt').focus();
			return false;
		}
		if(hinhthuc==0)
		{
			var congty=$('.clichhinhthuccongty').val();
			$('.hidecongty').show();
			$.post(base_url+'/bangtinh',{'tienvay':tienvay,'thoihan':thoihan,'sonam':congty},function(data){
    			 $('.showbangtinh').html(data);
            })
		}else{
			$('.hidecongty').hide();
			$.post(base_url+'/bangtinh',{'tienvay':tienvay,'thoihan':thoihan,'sonam':0},function(data){
    			 $('.showbangtinh').html(data);
            })
		}
	});
		
	
	
	$('.clickmodaldangki').click(function(){
		$('#modaldangki').modal('show');
	});
	
	$('.clickdangkiformmodal').click(function(){
		 var hovaten=$('.hovatenmodal').val();
		 var sodienthoai=$('.sodienthoaimodal').val();
		 var diachi=$('.diachimodal').val();
		 var sotienvay=$('.sotienvaymotmodal').val();
		 var socmndmodal=$('.socmndmodal').val();
		 var ngaysinhmodal=$('.ngaysinhmodal').val();
		 var hinhthucnhanluongmodal=$('.hinhthucnhanluongmodal').val();
		 if(hovaten=="")
		 {
			 alert("Vui Lòng Nhập Họ Và Tên");
			 $('.hovatenmodal').focus();
			 return false;
		 }
		 if(sodienthoai=="")
		 {
			 alert("Vui Lòng Nhập Số Điện Thoại");
			 $('.sodienthoaimodal').focus();
			 return false;
		 }
		 if(diachi=="")
		 {
			 alert("Vui Lòng Nhập Địa Chỉ");
			 $(".diachimodal").focus();
			 return false;
		 }
		 if(sotienvay=="")
		 {
			 alert("Vui Lòng Nhập Số Tiền Cần Vay");
			 $('.sotienvaymotmodal').focus();
			 return false;
		 }
		 if(socmndmodal=="")
		 {
			 alert('Vui Lòng Nhập Số CMND');
			 $('.socmndmodal').focus();
			 return false;
		 }
		 if(ngaysinhmodal=="")
		 {
			 alert('Vui Lòng Nhập Ngày Sinh');
			 $('.ngaysinhmodal').focus();
			 return false;
		 }
		 if(hinhthucnhanluongmodal==""){
			 alert('Vui Lòng Chọn Hình Thức Nhận Lương');
			 $('.hinhthucnhanluongmodal').focus();
			 return false;
		 }
		 $('.dangchaydkmodal').show();
		 $.ajax({
					   type: "POST",
					   //url: base_url+'/dichvu',
					   url: base_url+'/dangki',
					   data: $('.formdangki').serialize(), 
					   success: function(data)
					   {
						   $('.show-ajax-thongbao').html(data);
					   }
					}).always(function(){
						 $('#modaldangki').modal('hide');
						 $('#modalthongbao').modal('show');
						 $('.dangchaydkmodal').hide();
						  
					});
					
		
		 
	});
	
	$('.clickdangkiform').click(function(){
		 var hovaten=$('.hovaten').val();
		 var sodienthoai=$('.sodienthoai').val();
		 var diachi=$('.diachi').val();
		 var sotienvay=$('.sotienvayhome').val();
		 var socmnd=$('.socmnd').val();
		 var ngaysinh=$('.ngaysinh').val();
		 var hinhthucnhanluong=$('.hinhthucnhanluong').val();
		 if(hovaten=="")
		 {
			 alert("Vui Lòng Nhập Họ Và Tên");
			 $('.hovaten').focus();
			 return false;
		 }
		 if(sodienthoai=="")
		 {
			 alert("Vui Lòng Nhập Số Điện Thoại");
			 $('.sodienthoai').focus();
			 return false;
		 }
		 if(diachi=="")
		 {
			 alert("Vui Lòng Nhập Địa Chỉ");
			 $(".diachi").focus();
			 return false;
		 }
		 if(sotienvay=="")
		 {
			 alert("Vui Lòng Nhập Số Tiền Cần Vay");
			 $('.sotienvayhome').focus();
			 return false;
		 }
		 if(socmnd=="")
		 {
			 
			  alert("Vui Lòng Nhập Số CMND");
			 $('.socmnd').focus();
			 return false;
		 }
		 if(ngaysinh=="")
		 {
			 alert("Vui Lòng Nhập Ngày Sinh");
			 $('.ngaysinh').focus();
			 return false;
		 }
		 if(hinhthucnhanluong=="")
		 {
			 alert("Vui Lòng Nhập Ngày Sinh");
			 $('.hinhthucnhanluong').focus();
			 return false;
			 
		 }
		 $('.dangchayhome').show();
		 $.ajax({
					   type: "POST",
					   //url: base_url+'/dichvu',
					   url: base_url+'/dangki',
					   data: $('.formdangkihome').serialize(), 
					   success: function(data)
					   {
							console.log("ajax complete");
						   $('.show-ajax-thongbao').html(data);
					   }
					}).always(function(){
						console.log("ajax complete");
						 $('#modalthongbao').modal('show');
						 $('.hovaten').val('');
						 $('.coquanhientai').val('');
						 $('.sodienthoai').val('');
						 $('.diachi').val('');
						 $('.sotienvayhome').val('');
						 $('.socmnd').val('');
						 $('.ngaysinh').val('');
						 
						 $('.dangchayhome').hide();
					});
					
		
		 
	});
	var boolimgyoutube = $('.kiemtraimg').height();
	$(".showheightvideo").css("height",boolimgyoutube+'px');
	// hiện modal quảng cáo
	$('#modalqc').modal('show');
	// click giá trị khung detail span
	$('body').on('click','.clickdtipmot', function (){
		  $('.clickdtipmot').removeClass('activecheck');
		   $(this).addClass('activecheck');
		   var itemsize=$(this).attr('item');
		   $('.inputvaluemot').attr('value',itemsize);
		   // lấy ds input
		   var idsp=$(this).attr('idsp');
		   var ipmot=$('.inputvaluemot').val();
		   var iphai=$('.inputvaluehai').val();
		   var ipba=$('.inputvalueba').val();
		   $.post(base_url+'catalog/pricethuoctinh',{'ipmot':ipmot,'iphai':iphai,'ipba':ipba,'idsp':idsp},function(data){
    			//console.log(data);
				var mang=jQuery.parseJSON(data);
				if(data.length > 3)
				{
					var codeal=parseInt(mang.codeal);
					var lienhe=parseInt(mang.lienhe);
					var showscript="$('[data-countdown]').each(function() {var $this = $(this), finalDate = $(this).data('countdown');$this.countdown(finalDate, function(event) {$this.html(event.strftime('%D Ngày %H:%M:%S'));});});";
					if(codeal>0)
					{
						$('.showpricegiatri').html(mang.gia+' đ'+'<del>'+mang.giachuadeal+' đ</del>');
						$('.dealthuoctinh').html("<p><i class='icon-clock icons'></i> DEAL Còn: <span data-countdown='"+mang.ngaykt+"'></span></p> <script>"+showscript+"</script>");
						
					}else{
						if(lienhe==1)
						{
							$('.showpricegiatri').html('Giá Liên Hệ');
						}else{
					    $('.showpricegiatri').html(mang.gia+' đ');
						}
						$('.dealthuoctinh').html('');
					}
					// hết hàng
					
					var hethang=parseInt(mang.hethang);
					
					if(hethang==0)
					{
						$('.thuoctinhch').hide();
						$('.thuoctinhhh').show();
						$('.thuoctinhlienhe').hide();
					}else{
						$('.thuoctinhch').show();
						$('.thuoctinhhh').hide();
						$('.thuoctinhlienhe').hide();
					}
					
					// giá liên hệ
					
					if(lienhe==1)
					{
						$('.thuoctinhch').hide();
						$('.thuoctinhhh').hide();
						$('.thuoctinhlienhe').show();
					}
					
				}
            })
		   
	  });
	  $('body').on('click','.clickdtiphai', function (){
		  $('.clickdtiphai').removeClass('activecheck');
	
		   $(this).addClass('activecheck');
		   var itemsize=$(this).attr('item');
		   $('.inputvaluehai').attr('value',itemsize);
		   
		   // lấy ds input
		   var idsp=$(this).attr('idsp');
		   var ipmot=$('.inputvaluemot').val();
		   var iphai=$('.inputvaluehai').val();
		   var ipba=$('.inputvalueba').val();
		   $.post(base_url+'catalog/pricethuoctinh',{'ipmot':ipmot,'iphai':iphai,'ipba':ipba,'idsp':idsp},function(data){
    			var mang=jQuery.parseJSON(data);
                if(data.length > 3)
				{
					var codeal=parseInt(mang.codeal);
					var lienhe=parseInt(mang.lienhe);
					var showscript="$('[data-countdown]').each(function() {var $this = $(this), finalDate = $(this).data('countdown');$this.countdown(finalDate, function(event) {$this.html(event.strftime('%D Ngày %H:%M:%S'));});});";
					if(codeal>0)
					{
						$('.showpricegiatri').html(mang.gia+' đ'+'<del>'+mang.giachuadeal+' đ</del>');
						$('.dealthuoctinh').html("<p><i class='icon-clock icons'></i> DEAL Còn: <span data-countdown='"+mang.ngaykt+"'></span></p> <script>"+showscript+"</script>");
						
					}else{
						 if(lienhe==1)
						{
							$('.showpricegiatri').html('Giá Liên Hệ');
						}else{
					     $('.showpricegiatri').html(mang.gia+' đ');
						}
						  $('.dealthuoctinh').html('');
					}
					// hết hàng
					
					var hethang=parseInt(mang.hethang);
					
					if(hethang==0)
					{
						$('.thuoctinhch').hide();
						$('.thuoctinhhh').show();
						$('.thuoctinhlienhe').hide();
					}else{
						$('.thuoctinhch').show();
						$('.thuoctinhhh').hide();
						$('.thuoctinhlienhe').hide();
					}
					// giá liên hệ
					
					if(lienhe==1)
					{
						$('.thuoctinhch').hide();
						$('.thuoctinhhh').hide();
						$('.thuoctinhlienhe').show();
					}
				}
                
            })
	  });
	  
	  $('body').on('click','.clickdtipba', function (){
		  $('.clickdtipba').removeClass('activecheck');
	
		   $(this).addClass('activecheck');
		   var itemsize=$(this).attr('item');
		   $('.inputvalueba').attr('value',itemsize);
		   
		   // lấy ds input
		   var idsp=$(this).attr('idsp');
		   var ipmot=$('.inputvaluemot').val();
		   var iphai=$('.inputvaluehai').val();
		   var ipba=$('.inputvalueba').val();
		   $.post(base_url+'catalog/pricethuoctinh',{'ipmot':ipmot,'iphai':iphai,'ipba':ipba,'idsp':idsp},function(data){
    			var mang=jQuery.parseJSON(data);
				
				if(data.length > 3)
				{
					var codeal=parseInt(mang.codeal);
					var lienhe=parseInt(mang.lienhe);
					var showscript="$('[data-countdown]').each(function() {var $this = $(this), finalDate = $(this).data('countdown');$this.countdown(finalDate, function(event) {$this.html(event.strftime('%D Ngày %H:%M:%S'));});});";
					if(codeal>0)
					{
						$('.showpricegiatri').html(mang.gia+' đ'+'<del>'+mang.giachuadeal+' đ</del>');
						$('.dealthuoctinh').html("<p><i class='icon-clock icons'></i> DEAL Còn: <span data-countdown='"+mang.ngaykt+"'></span></p> <script>"+showscript+"</script>");
						
					}else{
					    if(lienhe==1)
						{
							$('.showpricegiatri').html('Giá Liên Hệ');
						}else{
					    $('.showpricegiatri').html(mang.gia+' đ');
						}
						$('.dealthuoctinh').html('');
					}
					// hết hàng
					
					var hethang=parseInt(mang.hethang);
					
					if(hethang==0)
					{
						$('.thuoctinhch').hide();
						$('.thuoctinhhh').show();
						$('.thuoctinhlienhe').hide();
					}else{
						$('.thuoctinhch').show();
						$('.thuoctinhhh').hide();
						$('.thuoctinhlienhe').hide();
					}
					// giá liên hệ
					
					if(lienhe==1)
					{
						$('.thuoctinhch').hide();
						$('.thuoctinhhh').hide();
						$('.thuoctinhlienhe').show();
					}
				}
                
            })
	  });
	// click kiểm tra số lượng còn hàng
	$().click(function(){
		
	});
    // click giá trị price detail
    $('body').on('click','.pricegiatri', function (){
       
        var idgiatri=$(this).attr('idgiatri');
        
        $.post(base_url+'catalog/pricegiasi',{'id':idgiatri},function(data){
    			 $('.showpricegiatri').html(data);
        })
    });
    
    $('body').on('click','.pricegiatrigoc', function (){

        var idgiatri=$(this).attr('idsp');
        
        $.post(base_url+'catalog/pricegiatrigoc',{'id':idgiatri},function(data){
    			 $('.showpricegiatri').html(data);
        })
    });
    // click bảnh giá si
    $('.clickgiasi').click(function(){
        var idpr=$(this).attr('idpr');
        $('#modalgiasi').modal('show');
    });
	// tìm kiếm
	$('.searchajax').keyup(function(){
	    var text=$(this).val();
	    
	    if(text!="")
	    {
	        $('.wrap-search-text').show();
	    $.post(base_url+'catalog/searchajax',{'text':text},function(data){
    			     $('.data-wrap-search').html(data);
            })
	    }else{
	       $('.wrap-search-text').hide();
	    }
	});
	//cart
	$('body').on('keyup', '.ajaxformcart', function (){
	    
	     var giatricart=$(this).val();
	     var maid=$(this).attr('maid');
		 var idsanpham=$(this).attr('idsp');
	     if(giatricart!="")
	     {
	         

            $.post(base_url+'catalog/kiemtraslspedit',{'idsp':idsanpham,'maid':maid,'slsp':giatricart},function(data){
    			
				
				//console.log(data);
				var mang=jQuery.parseJSON(data);
				if(data.length > 3)
				{
					var spcon=mang.spcon;
					
					spcon=parseInt(spcon);
					if(spcon>0)
					{
						alert('Thuộc tính này chỉ còn lại '+spcon+' sản phẩm, Bạn chỉ đặt được tối đa '+spcon+' sản phẩm');
					    return false;
					}else{
						alert('Thuộc tính sản phẩm này đã hết hàng');
						return false;
					}
				}else{
					$.ajax({
					   type: "POST",
					   url: base_url+'giohang/update',
					   data: $('.formajaxcart').serialize(), 
					   success: function(data)
					   {
						   $('.wrap-content-ajax').html(data);
					   }
				   
					});
					//load lại giỏ hàng top
					$.post(base_url+'giohang/indexgiohangngoai',{},function(data){
							 $('.giohangajaxtop').html(data);
					})
				}
				
         });			
            
	     }
		 
		 
		 
	});
	//modal sản phẩm
	$('.item-sanpham-ajax').click(function(){
	    $('#modalsanpham').modal('show');
	    var idsanpham=$(this).attr('idsanpham');
	    $.post(base_url+'catalog/detailajax',{'id':idsanpham},function(data){
    			    $('.show-ajax-sanpham').html(data);
       })
       	
	});
	$('.addcartgialienhe').click(function(){
		  alert('Sản phẩm giá liên hệ, nên bạn không thêm sản phẩm này vào giỏ hàng');
	});
	$('.addcartcatalog').click(function(){
		  var idsp=$(this).attr('idsp');
		  
		   $.post(base_url+'catalog/kiemtraslsp',{'idsp':idsp,'maid':' -  -  - ','slsp':'1'},function(data){
			  // alert(data);
			    console.log(data);
				var mang=jQuery.parseJSON(data);
				if(data.length > 3)
				{
					var spcon=mang.spcon;
					spcon=parseInt(spcon);
					
					if(spcon>0)
					{
						alert('Thuộc tính này chỉ còn lại '+spcon+' sản phẩm, Bạn chỉ đặt được tối đa '+spcon+' sản phẩm');
					    return false;
					}else{
						alert('Thuộc tính sản phẩm này đã hết hàng');
						return false;
					}
					
				}else{
					$('#modalsanpham').modal('hide');
					$('#modalgiohang').modal('show');
				    $.post(base_url+'giohang/addajax',{'qty':1,'idgiohang':idsp},function(data){
						$('.show-ajax-giohang').html(data);
					
					}).always(function(){
						   $.post(base_url+'giohang/indexgiohangngoai',{},function(data){
								 $('.giohangajaxtop').html(data);
							})
					});
				} 
		   });
		  
	});
	$('body').on('click','.addgiohangsanpham', function (){
	      
	      var chonsl=$('.input-text-sl').val();
		  if(chonsl<1)
		  {
			 alert('Vui Lòng Chọn Số Lượng'); 
			 return false;
		  }
		  // kiểm tra số lượng còn lại của sản phẩm này 
		  var idsanpham=$(this).attr('idsp');
		  var ipmot='';
		  var iphai='';
		  var ipba='';
		  if($('.inputvaluemot').length)
		  {
			  ipmot=$('.inputvaluemot').val()
		  }
		  if($('.inputvaluehai').length)
		  {
			  iphai=$('.inputvaluehai').val()
		  }
		  if($('.inputvalueba').length)
		  {
			  ipba=$('.inputvalueba').val()
		  }
		  var maid=ipmot+' - '+iphai+' - '+ipba+' - ';
		  
		   
		  $.post(base_url+'catalog/kiemtraslsp',{'idsp':idsanpham,'maid':maid,'slsp':chonsl},function(data){
    			
				
				//console.log(data);
				var mang=jQuery.parseJSON(data);
				if(data.length > 3)
				{
					var spcon=mang.spcon;
					spcon=parseInt(spcon);
					if(spcon>0)
					{
						alert('Thuộc tính này chỉ còn lại '+spcon+' sản phẩm, Bạn chỉ đặt được tối đa '+spcon+' sản phẩm');
					    return false;
					}else{
						alert('Thuộc tính sản phẩm này đã hết hàng');
						return false;
					}
					
				}else{
					$('#modalsanpham').modal('hide');
					$('#modalgiohang').modal('show');
				   
					$.ajax({
					   type: "POST",
					   url: base_url+'giohang/addajax',
					   data: $('.addformgiohang').serialize(), 
					   success: function(data)
					   {
						   $('.show-ajax-giohang').html(data);
					   }
					}).always(function(){
						   $.post(base_url+'giohang/indexgiohangngoai',{},function(data){
								 $('.giohangajaxtop').html(data);
							})
					});
				}
				
         });
		         
	});
	

	
	
	
	$(".search-button").click(function(){
	     var search=$('.search-field').val();
		 if(search=="")
		 {
			 alert('Bạn Nhập Từ Khóa Để Tìm Kiếm');
			 return false;
			 
		 }
		 if(validText(search)==false)
		 {
			 alert("Không nhập được các ký tự: @ # $ % ^ * ~ < > ( ) ..");
			 $("#search").val("");
			 return false;
			 
		 }
		
		 
	});
	//modal
	
	
	$('body').on('click', '.modal-xemnhanh', function (){
		$.post(base_url+'catalog/detailmodal',{'idpr':2},function(data){
			$('.modal-xemnhanh-content').append(data);
        }).always(function(){
	    	   
        });
   });
	//san pham
	
	var pagecmpr=1;
	var pageblpr=$('.pagecommentpr').attr('idpage');
	$('.submitbinhluan').click(function(){
		  var noidungbl=$('#binhluansanpham').val();
		  var idpr=$('#idpr').val();
		  var linkpr=$('#linkpr').val();
		  var tenuser=$('#commentnameuser').val();
		  var phoneuser=$('#commentphoneuser').val();
		  var star=$('.rowraingcomment .checkrating input').val();
		  if(tenuser=="")
		  {
			  alert('Vui lòng nhập tên');
			  $('#commentnameuser').focus();
			  return false;
		  }
		  if(noidungbl=="")
		  {
			  alert('Vui lòng nhập nội dung bình luận');
			  $('#binhluansanpham').focus();
			  return false; 
		  }
		  if(star=="")
		  {
			  alert('Vui lòng đánh giá cho sản phẩm này từ 1 đến 5 sao');
			  return false;
		  }
		  $.post(base_url+'catalog/binhluan',{'idpr':idpr,'linkpr':linkpr,'noidung':noidungbl,'ten':tenuser,'phone':phoneuser,'star':star},function(data){
          }).always(function(){
	    	   alert('Bình luận của bạn đã được gửi .'); 
	    	   $('#binhluansanpham').val('');
	    	   $('#commentnameuser').val('');
	    	   $('#commentphoneuser').val('');
          });
		 
		  
     
	});
	//load bình luận
	if(pageblpr==1)
	{
		var idpr=$('.pagecommentpr').attr('idpr');
		$.post(base_url+'catalog/listbinhluan',{'idpr':idpr,'idpt':1},function(data){
			   $('.pagecommentpr').html(data);
			   pagecmpr+=1;
			   
        })
	}
	$('.xemthembinhluancmpr').click(function(){
		
    	var idpr=$('.pagecommentpr').attr('idpr');
		$.post(base_url+'catalog/listbinhluan',{'idpr':idpr,'idpt':pagecmpr},function(data){
			   $('.pagecommentpr').append(data);
			   pagecmpr+=1;
			   
        })
    });
	//tin tức
	var pagecmnews=1;
	var pageblnews=$('.pagecommentnew').attr('idpagenew');
	$('.submitbinhluannews').click(function(){
		  var noidungbl=$('#binhluansanpham').val();
		  var idpr=$('#idpr').val();
		  var linkpr=$('#linkpr').val();
		  var tenuser=$('#commentnameuser').val();
		  var phoneuser=$('#commentphoneuser').val();
		 
		  if(tenuser=="")
		  {
			  alert('Vui lòng nhập tên');
			  $('#commentnameuser').focus();
			  return false;
		  }
		  if(noidungbl=="")
		  {
			  alert('Vui lòng nhập nội dung bình luận');
			  $('#binhluansanpham').focus();
			  return false; 
		  }
		  
		  $.post(base_url+'news/binhluan',{'idpr':idpr,'linkpr':linkpr,'noidung':noidungbl,'ten':tenuser,'phone':phoneuser},function(data){
          }).always(function(){
	    	   alert('Bình luận của bạn đã được gửi .'); 
	    	   $('#binhluansanpham').val('');
	    	   $('#commentnameuser').val('');
	    	   $('#commentphoneuser').val('');
          });
		 
		  
     
	});
	//load bình luận tin tức
	if(pageblnews==1)
	{
		var idpr=$('.pagecommentnew').attr('idnew');
		$.post(base_url+'news/listbinhluan',{'idpr':idpr,'idpt':1},function(data){
			   $('.pagecommentnew').html(data);
			   pagecmnews+=1;
			   
        })
	}
	$('.xemthembinhluancmnew').click(function(){
		
    	var idpr=$('.pagecommentnew').attr('idnew');
		$.post(base_url+'news/listbinhluan',{'idpr':idpr,'idpt':pagecmnews},function(data){
			   $('.pagecommentnew').append(data);
			   pagecmnews+=1;
			   
        })
    });
	//khu vực
	
	$('.khuvucnew').change(function(){
    	var name=$(this).val();
    	/*$('.quannew').html('<option value="">Quận</option>');*/
    	if(name=="")
    	{
    		$('.quannew').html('<option value="">Quận</option>');
			
    		$('.phuongnew').html('<option value="">Phường</option>');
    		return false;
    	}
    	/*$('.quannew').html('<option value="">Quận</option>');
    	$('.phuongnew').html('<option value="">Phường</option>');*/
    	$.post(base_url+'order/quan',{'id':name},function(data){
              $('.showajaxquan').html(data);
			   $(selectpicker).selectpicker('refresh');
      	 });  
    });
    $('body').on('change', '.quannew', function (){
		
    	var name=$(this).val();
    	/*$('.phuongnew').html('<option value="">Phường</option>');*/
    	$.post(base_url+'order/phuong',{'id':name},function(data){
              $('.showajaxphuong').html(data);
      	 });  
    });
  //mail
	$('.clickdangki').click(function(){
		var mail=$('.textdangki').val();
		if(mail=="")
		{
			alert('Vui lòng nhập địa chỉ mail để nhận tin khuyến mãi mới nhất');
			return false;
		}
		if(isEmail(mail)==false)
		{
			alert('Vui Lòng Nhập Đúng Địa Chỉ Email');
			return false;
		}
		$.post(base_url+'home/mail',{'mail':mail},function(data){
        }).always(function(){
        	   $('.textdangki').val('');
	    	   alert('Gửi Mail Nhận Thông Báo Thành Công'); 
          });
	});
	//lienhe
	$('.clicklienhe').click(function(){
		 var name=$('.tenlienhe').val();
		 var phone=$('.phonelienhe').val();
		 var mail=$('.maillienhe').val();
		 var ghichu=$('.tinnhanlienhe').val();
		 if(name=="")
		 {
			 alert('Vui lòng nhập tên liên hệ');
			 return false;
		 }
		 if(phone=="")
		 {
			 alert('Vui lòng nhập số điện thoại liên hệ');
			 return false;
		 }
		 if(mail=="")
		 {
			 alert('Vui lòng nhập email liên hệ');
			 return false;
		 }
		 if(ghichu=="")
		 {
			 alert('Vui lòng nhập ghi chú');
			 return false;
		 }
		 $.post(base_url+'contact/gui',{'name':name,'phone':phone,'mail':mail,'ghichu':ghichu},function(data){
	        }).always(function(){
	        	$('.tenlienhe').val('');
	   		 $('.phonelienhe').val('');
	   		 $('.maillienhe').val('');
	   		 $('.tinnhanlienhe').val('');
		    	   alert('Gửi Thông Tin Liên Hệ Thành Công'); 
	          });
	});
	//đơn hàng vận chuyển
	$('.vanchuyenkhuvuc').change(function(){
		var idname=$(this).val();
		 $.post(base_url+'order/vanchuyen',{'idname':idname,'kv':1},function(data){
			   $('.phi-dathang').html(data);
	        }).always(function(){
	        	  
	          });
	});
	
	$('.vanchuyenquan').change(function(){
		var idquan=$(this).val();
		var idkv=$('.vanchuyenkhuvuc').val();
		 $.post(base_url+'order/vanchuyen',{'idquan':idquan,'kv':2,'idkv':idkv},function(data){
			   $('.phi-dathang').html(data);
	        }).always(function(){
	        	  
	          });
	});
	//áp dụng mã khuyến mãi
	$('.btn-primary-discount').click(function(){
		    var makhuyenmai=$('.discount_code').val();
			if(makhuyenmai=="")
			{
				alert('Vui lòng nhập mã khuyến mãi');
				return fasle;
			}
		    var khuvucmakm=$('.vanchuyenkhuvuc').val();
		    var quanmakm=$('.vanchuyenquan').val();
		    $.post(base_url+'order/makhuyenmai',{'idquan':quanmakm,'idkhuvuc':khuvucmakm,'makhuyenmai':makhuyenmai},function(data){
				   $('.phi-dathang').html(data);
		    }).always(function(){
		        	  
		    });
	});
	
	//load quảng cáo giữa trang
	var newsqangcao=parseInt($('.wrapnews').attr('idshowqc'));
	var idnewsqangcao=$('.wrapnews').attr('idnews');
	if(newsqangcao==1)
	{
	    //alert(1);
	    $.post(base_url+'news/showquangcao',{'id':idnewsqangcao},function(data){
			   $('.showquangcaogiua').html(data);
			  
	        }).always(function(){
	        	   
	          });
	}
	
	var newsqangcaosp=parseInt($('.wrapspqc').attr('idshowspqc'));
	var idsanphamqangcao=$('.wrapspqc').attr('idsanpham');
	if(newsqangcaosp==1)
	{
	    $.post(base_url+'news/showquangcaosp',{'id':idsanphamqangcao},function(data){
			   $('.showquangcaospgiua').html(data);
			  
	        }).always(function(){
	        	   
	          });
	}
    
});

function validate(evt) {
	  var theEvent = evt || window.event;
	  var key = theEvent.keyCode || theEvent.which;
	  key = String.fromCharCode( key );
	  var regex = /[0-9]|\./;
	  if( !regex.test(key) ) {
	    theEvent.returnValue = false;
	    if(theEvent.preventDefault) theEvent.preventDefault();
	  }
}
function validText(value) {
	var chaos = new Array ("'","~","@","#","$","%","^","&","*",";","/","\\","|","{","}",">","<","+","-","(",")","?");
	var sum = chaos.length;
	for (var i in chaos) {if (!Array.prototype[i]) {sum += value.lastIndexOf(chaos[i])}}
	if (sum) {
	//alert("Một số phần không nên có những ký tự đặc biệt như kiểu này: @ # $ % ^ * ~ ");
	return false;
	}
	return true;
}
function isEmail(email) {
	var isValid = false;
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(regex.test(email)) {
		isValid = true;
		
	}
	return isValid;
}
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    } else {
        return true;
    }      
}

