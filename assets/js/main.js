(function(a){var h=a(".slider-active"),d=a(".mobile-menu-icon"),e=a(".ras-progress-pie"),c=a(".ras-counter-number"),j=a(".ras-slider-one-col"),m=a(".ras-video-lightbox"),f=a(".recentSlider"),g=a("select"),k=a(".ras-slider-three-col"),i=a(".ras-slider-four-col"),b=a(".ras-blog-2-slider"),l=a("#toTop"),n=a(window);n.on("load",function(){a(".ras-loader").delay(1500).fadeOut("slow")});n.on("scroll",function(){if(n.scrollTop()>150){l.fadeIn()}else{l.fadeOut()}});if(g.length){g.niceSelect()}l.on("click",function(){a("html,body").animate({scrollTop:0},500)});if(m.length){m.magnificPopup({disableOn:700,type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:false,fixedContentPos:false})}if(d.length){d.on("click",function(o){o.preventDefault();a(this).toggleClass("open");a(".ras-main-menu .nav-menu").slideToggle()})}a(".menu-bar li.menu-item-has-children").on("click",function(o){o.stopPropagation();var p=a(o.target);if(!a(p).hasClass("menu-item-has-children")){return}p.find("> .sub-menu > li").fadeToggle();p.find("> .sub-menu").slideToggle();p.toggleClass("menu-expanded")});if(e.length){e.appear(function(){e.asPieProgress({namespace:"pieProgress",classes:{svg:"ras-progress-pie-svg",number:"ras-progress-pie-number",content:"ras-progress-pie-content",},min:0,max:100,speed:25,barsize:"2",trackcolor:"#ccc",easing:"ease",});e.asPieProgress("start")})}if(c.length){c.counterUp({delay:10,time:1000})}if(h.length){h.slick({dots:false,infinite:true,speed:300,slidesToShow:1,adaptiveHeight:true,arrows:true,autoplay:false,fade:true})}if(f.length){f.slick({dots:true,infinite:true,speed:300,slidesToShow:1,adaptiveHeight:true,arrows:false,autoplay:true,})}if(j.length){j.slick({speed:800,slidesToShow:1,adaptiveHeight:true,arrows:true,fade:true,slidesToScroll:1,autoplay:true,})}if(k.length){k.slick({speed:800,slidesToShow:3,adaptiveHeight:true,arrows:true,slidesToScroll:1,centerMode:true,autoplay:true,responsive:[{breakpoint:992,arrows:false,settings:{slidesToShow:2,}},{breakpoint:768,arrows:false,settings:{slidesToShow:1,}}]})}if(b.length){b.slick({speed:800,slidesToShow:3,adaptiveHeight:true,arrows:true,dots:true,slidesToScroll:3,autoplay:true,responsive:[{breakpoint:992,arrows:false,settings:{slidesToShow:2,slidesToScroll:2,}},{breakpoint:768,arrows:false,settings:{slidesToScroll:1,slidesToShow:1,}}]})}if(i.length){i.slick({speed:800,slidesToShow:4,adaptiveHeight:true,arrows:false,dots:true,slidesToScroll:4,centerMode:false,autoplay:true,responsive:[{breakpoint:992,arrows:false,settings:{slidesToShow:2,}},{breakpoint:768,arrows:false,settings:{slidesToShow:1,}}]})}new WOW().init()})(jQuery);