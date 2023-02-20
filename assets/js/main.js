// start in glopal
let BtnTop = document.querySelector(".scroolTop");

window.onscroll = () => {
  scrollFunction();
};

let scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    BtnTop.style.bottom = "30px";
  } else {
    BtnTop.style.bottom = "-100%";
  }
};

BtnTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// start in navbar
let NavMain = document.querySelector("nav");
let BtnCloseOpen = document.querySelector(".OpenCloseNav");
let shadowNav = document.querySelector(".backShadow");

BtnCloseOpen.onclick = () => {
  NavMain.classList.toggle("showNav");
  shadowNav.classList.toggle("showBackShadow");
};

// end in glopal

// ------------------------------------- start in index page ----------------------------
// header form
let indexPage = document.querySelector(".home");

window.addEventListener("load", (event) => {
  event.preventDefault();
  let ImgHeader = document.querySelector("header");
  let elementHeader = document.getElementById("contentElementHeader");

  let slidesImages = [
    "assets/img/swiper-slide-1.jpg",
    "assets/img/swiper-slide-2.jpg",
    "assets/img/swiper-slide-3.jpg",
  ];
  let position = 0;
  let numberOfSlides = slidesImages.length;

  let createImgSlidesHeader = () => {
    for (let i = 0; i < slidesImages.length; i++) {
      elementHeader.innerHTML += `
        <div class="ToDivide" style="background-image: url(${slidesImages[i]});">
          <div class="TextHead">
            <h1>THE TRIP OF YOUR DREAM</h1>
            <div class="Zigzag"></div>
            <p>
              We offer a variety of destinations to travel to, ranging from
              exotic to some extreme ones. They include very popular countries
              and cities like Paris, Rio de Janeiro, Cairo and a lot of others.
            </p>
            <button class="LearnMore">learn more</button>
          </div>
        </div>
      `;
    }
  };
  createImgSlidesHeader();

  let slides = document.querySelectorAll(".ToDivide");
  function hideAllSlides() {
    // remove all slides not currently being viewed
    for (const slide of slides) {
      // slide.classList.remove("carouselItemVisible");
      slide.classList.add("carouselItemHidden");
    }
  }

  const handleMoveToNextSlide = function (e) {
    setInterval(() => {
      hideAllSlides();
      if (position === numberOfSlides - 1) {
        position = 0;
      } else {
        position++;
      }
      slides[position].classList.remove("carouselItemHidden");
      slides[position].classList.add("carouselItemVisible");
      console.log(position);
    }, 3000);
  };
  handleMoveToNextSlide();
});

// end header form

// latest;
let productContainers = document.querySelectorAll(".AllCarouse");
let nxtBtn = document.querySelector(".nxt-btn");
let preBtn = document.querySelector(".pre-btn");
let nxtpre = document.querySelectorAll(".OwlDot");

let SlideLates = () => {
  productContainers.forEach((item) => {
    let containerWidth = item.getBoundingClientRect().width;

    nxtBtn.addEventListener("click", () => {
      item.scrollLeft += containerWidth;
    });

    preBtn.addEventListener("click", () => {
      item.scrollLeft -= containerWidth;
    });
    ScrollSlideLatesAuto(item, containerWidth);
    ClickActiveColor();
  });
};

let ClickActiveColor = () => {
  nxtpre.forEach((Active) => {
    Active.addEventListener("click", () => {
      nxtpre.forEach((addactive) => {
        addactive.style.backgroundColor = "#dfe1ea";
      });
      Active.style.backgroundColor = "#007bff";
    });
  });
};

let ScrollSlideLatesAuto = (test, containerWidth) => {
  setInterval(() => {
    if (test.scrollLeft < containerWidth) {
      test.scrollLeft += containerWidth;
      // console.log(test.scrollLeft);
      // console.log(test.scrollLeft);
    } else {
      // test.scrollLeft -= containerWidth;
    }
  }, 5000);
};

SlideLates();

// slide testimonilas
let ContentSlide = document.querySelectorAll(".ContentSlideQuota");
let QuotaLeft = document.querySelector(".leftquota");
let QuotaRight = document.querySelector(".rightquota");

let SlidetesTimonilas = () => {
  ContentSlide.forEach((SlideQuota) => {
    let containerWidth = SlideQuota.getBoundingClientRect().width;

    QuotaLeft.addEventListener("click", () => {
      SlideQuota.scrollLeft -= containerWidth;
    });

    QuotaRight.addEventListener("click", () => {
      SlideQuota.scrollLeft += containerWidth;
    });
  });
};
SlidetesTimonilas();

// // ------------------------------------- end in index page ----------------------------

// // // ------------------------------------- start in about page ----------------------------
let aboutPage = document.querySelector(".about");

window.addEventListener("load", (event) => {
  // start in DESTINATIONS
  let imgITem = document.querySelector(".imgShow");
  let show = document.querySelector(".listImg");
  let allBoxImg = document.querySelectorAll(".boximg figure img");

  let showImgAddImgInList = () => {
    for (let i = 0; i < allBoxImg.length; i++) {
      imgITem.innerHTML += `<figure class="figimg ${i + 1}">
          <img src="${allBoxImg[i].getAttribute("src")}" alt="">
        </figure>`;

      // add all img in list img
      show.innerHTML += `<figure data-id="1">
    <img src="${allBoxImg[i].getAttribute("src")}" alt="">
    </figure>`;
    }
  };
  showImgAddImgInList();

  let containerItemImg = document.querySelectorAll(".imgShow");
  let nextBtnSlide = document.querySelector(".arrowLeft");
  let prevtBtnSlide = document.querySelector(".arrowRight");

  let btnNextPrev = () => {
    containerItemImg.forEach((slideDes) => {
      let containerWidth = slideDes.getBoundingClientRect().width;

      nextBtnSlide.addEventListener("click", () => {
        slideDes.scrollLeft -= containerWidth;
      });

      prevtBtnSlide.addEventListener("click", () => {
        slideDes.scrollLeft += containerWidth;
      });
    });
  };
  btnNextPrev();

  let slidesFigimg = document.querySelectorAll(".figimg");
  let allListImg = document.querySelectorAll(".listImg figure");

  let startSlides = 1;
  allLIstImgChosse(startSlides);

  function allLIstImgChosse(numSlides) {
    allListImg.forEach((list) => {
      list.addEventListener("click", () => {
        let dataId = list.dataset.id;
        console.log(document.querySelectorAll(dataId));
        // let leftImg = element.getBoundingClientRect().left.toFixed();
      });
    });

    if (numSlides > slidesFigimg.length) startSlides = 1;
    if (numSlides < 1) startSlides = slidesFigimg.length;
    // slidesFigimg[startSlides - 1].style.marginLeft = "250px";
  }
});
//  ------------------------------------- end in about page ----------------------------

// // ------------------------------------- start in sign createAcoutn page ----------------------------
// // start in page sign in and sign up
let MainBtnLog = document.querySelector(".btnLog");

window.addEventListener("load", (event) => {
  event.preventDefault();
  console.log("d");
  let sign = document.querySelector(".signIng");
  sign.addEventListener("click", () => {
    // overlay move right
    document.querySelector(".overlay").classList.add("overlayRight");
    // log in text hide
    document.querySelector(".logIngOver").classList.add("logIngOverTop");
    // content input sing in and sign up
    document
      .querySelector(".contentSignUpInForm")
      .classList.add("overlayTopContentSignUpForm");
    //acount hide
    document
      .querySelector(".createAcouneOver")
      .classList.add("createAcouneOverLeft");
    // show sign in form
    document.querySelector(".signInForm").classList.add("signInFormCenter");
  });

  let signUp = document.querySelector(".signUp");
  signUp.addEventListener("click", () => {
    // overlay move right
    document.querySelector(".overlay").classList.remove("overlayRight");
    // log in text hide
    document.querySelector(".logIngOver").classList.remove("logIngOverTop");
    // content input sing in and sign up
    document
      .querySelector(".contentSignUpInForm")
      .classList.remove("overlayTopContentSignUpForm");
    //acount hide
    document
      .querySelector(".createAcouneOver")
      .classList.remove("createAcouneOverLeft");
    // show sign in form
    document.querySelector(".signInForm").classList.remove("signInFormCenter");
  });
});
// // ------------------------------------- end in sign createAcoutn page ----------------------------
