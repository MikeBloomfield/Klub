document.addEventListener('DOMContentLoaded', function () {
  // loader
  setTimeout(function () {
    document.querySelector('body').classList.remove('loaded');
  }, 0);

  const logo = document.querySelector('.header__logo');
  const logoAbs = document.querySelector('.header__logo-abs');
  const logoFooter = document.querySelector('.footer__logo');
  const footerAbs = document.querySelector('.footer__logo-abs');

  let tl = gsap.timeline({ paused: true });
  let tl2 = gsap.timeline({ paused: true });

  tl.to(logoAbs, {
    y: 6,
    x: -6,
    delay: 0,
    duration: 0.2,
    ease: 'ease.out',
  });
  tl.to(logoAbs, {
    width: 54,
    delay: 0,
    duration: 0.2,
    ease: 'ease.out',
  });
  tl2.to(footerAbs, {
    y: 6,
    x: -6,
    delay: 0,
    duration: 0.2,
    ease: 'ease.out',
  });
  tl2.to(footerAbs, {
    width: 54,
    delay: 0,
    duration: 0.2,
    ease: 'ease.out',
  });

  logoFooter.addEventListener('mouseover', () => {
    tl2.play();
  });
  logoFooter.addEventListener('mouseleave', () => {
    tl2.reverse();
  });
  logo.addEventListener('mouseover', () => {
    tl.play();
  });
  logo.addEventListener('mouseleave', () => {
    tl.reverse();
  });

  let howItems = gsap.timeline({
    delay: 0.5,
    scrollTrigger: {
      trigger: '.how__title',
      start: 'top 50%',
    },
  });

  howItems.from('.how__item', {
    opacity: 0,
    yPercent: 100,
    duration: 0.5,
    stagger: 0.05,
  });
  howItems.to('.how__item-pic path', {
    strokeDashoffset: 1000,
    duration: 1,
    stagger: 0.15,
  });

  const mainPageVideo = document.querySelector('.video__block');
  if (mainPageVideo) {
    const playerPlay = document.querySelector('#playVideo');
    playerPlay.addEventListener('click', () => {
      const player = document.querySelector('#mainVideo');
      let data = { method: 'play' };
      player.contentWindow.postMessage(JSON.stringify(data), '*');
      mainPageVideo.classList.add('activeVideo');
      $('.video__abs, .video__startBlock-btn, .video__subtitle').hide();
    });
  }

  let circles = document.querySelectorAll('.join__abs-inner');

  window.addEventListener('mousemove', (event) => {
    let halfW = window.innerWidth / 2;
    let halfH = window.innerHeight / 2;
    for (let item of circles) {
      if (event.clientX > halfW) {
        item.style.left = (halfW - event.clientX) / 30 + 'px';
      }
      if (event.clientX < halfW) {
        item.style.left = -(event.clientX - halfW) / 30 + 'px';
      }
      if (event.clientY > halfH) {
        item.style.top = (halfH - event.clientY) / 30 + 'px';
      }
      if (event.clientY < halfH) {
        item.style.top = -(event.clientY - halfH) / 30 + 'px';
      }
    }
  });

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    speed: 500,
    mousewheel: {
      releaseOnEdges: true,
      thresholdDelta: 10,
      forceToAxis: true,
    },
    loop: false,
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
    },
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
    on: {
      slideChange: function () {
        setTimeout(function () {
          swiper.params.mousewheel.releaseOnEdges = false;
        }, 500);
      },
      toEdge: function () {
        setTimeout(function () {
          swiper.params.mousewheel.releaseOnEdges = true;
        }, 750);
      },
    },
  });

  gsap.to('.hero__abs-1-desc p', {
    text: '… I really want to apply but I don’t know if I’m ready …',
    delay: 1.3,
    duration: 2,
    scrollTrigger: {
      trigger: '.hero__abs-1',
      toggleActions: 'play pause resume none',
    },
  }),
    gsap.to('.hero__abs-2-desc p', {
      text: '… that’s amazing. Don’t worry, I remember being just as nervous. But I think you’re going to do great. Here’s how I got my acceptence letter.',
      delay: 3.7,
      duration: 5,
      scrollTrigger: {
        trigger: '.hero__abs-2',
        toggleActions: 'play pause resume none',
      },
    }),
    gsap.to('.hero__abs-1-desc', {
      delay: 1.2,
      opacity: 1,
      duration: 0.3,
      scrollTrigger: {
        trigger: '.hero__abs-1',
        toggleActions: 'play pause resume none',
      },
    });
  gsap.to('.hero__abs-2-desc', {
    delay: 3.5,
    opacity: 1,
    duration: 0.3,
    scrollTrigger: {
      trigger: '.hero__abs-2',
      toggleActions: 'play pause resume none',
    },
  });

  gsap.to('.hero__abs-1', {
    yPercent: -20,
    delay: 1,
    scrollTrigger: {
      trigger: '.hero__abs-1',
      start: 'top 15%',
      toggleActions: 'play pause resume none',
      scrub: true,
    },
  });
  gsap.to('.hero__abs-2', {
    yPercent: 15,
    delay: 1,
    scrollTrigger: {
      trigger: '.hero__abs-2',
      start: 'top 15%',
      toggleActions: 'play pause resume none',
      scrub: true,
    },
  });
  gsap.from('.hero__abs-1', {
    opacity: 0,
    x: -200,
    duration: 0.8,
    delay: 0.7,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.hero__abs-1',
      toggleActions: 'play pause resume none',
    },
  });
  gsap.from('.hero__abs-2', {
    opacity: 0,
    x: 200,
    duration: 0.8,
    delay: 0.7,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.hero__abs-2',
      toggleActions: 'play pause resume none',
    },
  });

  gsap.from('.join__abs-inner', {
    yPercent: -100,
    scale: 1.5,
    opacity: 0,
    stagger: 0.2,
    scrollTrigger: {
      trigger: '.join__abs',
      toggleActions: 'play pause resume none',
      scrub: true,
    },
  });

  gsap.from('.video__abs', {
    yPercent: 20,
    ease: 'power3',
    scrollTrigger: {
      trigger: '.video__startBlock-btn',
      toggleActions: 'play pause resume none',
      start: 'top 80%',
      end: 'bottom 10%',
      scrub: true,
    },
  });
  gsap.to('.join__bg', {
    rotate: 10,
    scale: 1.8,
    skew: 90,
    repeat: -1,
    duration: 20,
    x: -300,
    yoyo: true,
  });
  gsap.to('.hero__left-bg, .video__bg', {
    rotate: 10,
    scale: 1.8,
    skew: 90,
    repeat: -1,
    duration: 20,
    yoyo: true,
  });

  let root = document.documentElement;
  root.addEventListener('mousemove', (e) => {
    gsap.to('.book__pic', {
      overwrite: true,
      transformOrigin: 'center center',
      ease: 'power3',
      duration: 1,
      rotationY: -e.clientX / 30,
      rotationX: e.clientY / 50,
    });
    gsap.to('.book__abs-1, .book__abs-2, .book__abs-3', {
      overwrite: true,
      transformOrigin: 'center center',
      ease: 'power3',
      duration: 0.5,
      rotationY: -e.clientX / 45,
      rotationX: -e.clientY / 30,
      x: -e.clientX / 20,
      y: -e.clientY / 50,
    });
  });

  // Observer.create({
  // 	target: 'book__pic',
  // 	type: 'wheel,touch,scroll,pointer',
  // 	onUp: ()=> { rotate(5)},
  // 	onLeft: ()=> { small(5)},
  // 	onRight: ()=> { small(-5)},
  // 	onDown: ()=> { rotate(-5)},
  // })
  // Observer.create({
  // 	target: window,
  // 	type: 'wheel,touch,scroll,pointer',
  // 	onUp: ()=> { small(-15)},
  // 	// onLeft: ()=> { rotate(30)},
  // 	// onRight: ()=> { rotate(20)},
  // 	onDown: ()=> { small(15)},
  // })

  new WOW().init();
  // lazy load
  // setTimeout(function () {
  // 	$(".js-bg").each(function () {
  // 		$(this).css('background-image', 'url(' + $(this).data("bg") + ')');
  // 	});
  // 	$(".js-img").each(function () {
  // 		$(this).attr('src', $(this).data("src"));
  // 	});
  // }, 200);

  /* components */

  /*
	if($('.styled').length) {
		$('.styled').styler();
	};
	if($('.fancybox').length) {
		$('.fancybox').fancybox({
			margin  : 10,
			padding  : 10
		});
	};
	if($('.slick-slider').length) {
		$('.slick-slider').slick({
			dots: true,
			infinite: false,
			speed: 300,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
				  breakpoint: 1024,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				  }
				},
				{
				  breakpoint: 600,
				  settings: "unslick"
				}				
			]
		});
	};
	if($('.scroll').length) {
		$(".scroll").mCustomScrollbar({
			axis:"x",
			theme:"dark-thin",
			autoExpandScrollbar:true,
			advanced:{autoExpandHorizontalScroll:true}
		});
	};
	*/

  /* components */

  //prevent drag img and a
  const imagesAndLinks = document.querySelectorAll('img, a');
  if (imagesAndLinks) {
    imagesAndLinks.forEach(function (item, i, arr) {
      item.addEventListener('dragstart', function (e) {
        e.preventDefault();
      });
    });
  }

  const handlerResize = function () {
    let viewport_wid = viewport().width;
    let viewport_height = viewport().height;

    // if (viewport_wid <= 991) {

    // }
  };

  window.addEventListener('load', handlerResize);
  window.addEventListener('resize', handlerResize);
});

/* viewport width */
function viewport() {
  let e = window,
    a = 'inner';
  if (!('innerWidth' in window)) {
    a = 'client';
    e = document.documentElement || document.body;
  }
  return { width: e[a + 'Width'], height: e[a + 'Height'] };
}
/* viewport width */
