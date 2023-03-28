document.addEventListener("DOMContentLoaded", () => {
  const body = document.querySelector('body');
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  const filterBtns = document.querySelectorAll(".categories-nav__btn, .filter-category__btn, .filter-offers__input");
  const grid = document.querySelector(".categories-list");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove active class from all buttons
      filterBtns.forEach((filterBtn) => {
        filterBtn.classList.remove("active");
      });
      // add active class to clicked button
      btn.classList.add("active");

      // get the filter value from the clicked button
      const filterValue = btn.getAttribute("data-filter");

      // filter the grid items based on the filter value
      for (const item of grid.children) {
        if (filterValue === "all") {
          // item.style.display = "block";
          item.classList.remove('hide');
          item.classList.add('show');
        } else if (item.classList.contains(filterValue)) {
          // item.style.display = "block";
          item.classList.remove('hide')
          item.classList.add('show')
        } else {
          // item.style.display = "none";
          item.classList.remove('show')
          item.classList.add('hide')
        }
      }
    });
  });

  const swiper = new Swiper(".reviews__slider", {
    pagination: {
      el: ".reviews__dots",
      bulletClass: "reviews__dot",
      bulletActiveClass: "reviews__dot--active",
      clickable: true,
    },
    navigation: {
      nextEl: ".reviews__btn--next",
      prevEl: ".reviews__btn--prev"
    },
  });

  if (window.innerWidth <= 992) {
    const burger = document.querySelector('.burger');
    closeBtn = document.querySelector('.close-btn');
    const mobileNav = document.querySelector('.nav-mobile');
    const filterNavBtn = document.querySelector('.filter__btn-open');
    const filterMobile = document.querySelector('.filter__mobile');
    burger.addEventListener("click", () => {
      body.classList.add('lock');
      mobileNav.classList.add('open')
    })

    filterNavBtn.addEventListener("click", () => {
      body.classList.add('lock');
      filterMobile.classList.add('open')
    })

    closeBtn.addEventListener("click", () => {
      body.classList.remove('lock');
      mobileNav.classList.remove('open');
      filterMobile.classList.remove('open')
    })

    document.addEventListener('click', function (e) {
      if (e.target !== closeBtn && e.target !== burger && e.target !== mobileNav && e.target !== filterNavBtn && e.target !== filterMobile) {
        body.classList.remove('lock');
        mobileNav.classList.remove('open');
        filterMobile.classList.remove('open');
      }
    })
  }

  if (window.innerWidth <= 576) {
    const restoSlider = new Swiper('.resto__slider', {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      centeredSlidesBounds: true,
      pagination: {
        el: ".resto__dots",
        bulletClass: "resto__dot",
        bulletActiveClass: "resto__dot--active",
        clickable: true,
      },
    });
  };

  const rangeSlider = document.querySelector('.range__slider');
  const inputMin = document.querySelector('.range__input--min');
  const inputMax = document.querySelector('.range__input--max');

  noUiSlider.create(rangeSlider, {
    start: [100, 1000],
    connect: true,
    padding: [0, 0],
    animate: true,
    // cssPrefix: 'noUi-',
    step: 10,
    range: {
      'min': 50,
      'max': 1200
    }
  })
  rangeSlider.noUiSlider.on('update', function(values, handle) {
    // let value = values[handle];
    let value = parseFloat(values[handle]).toFixed(0);
    if(handle) {
      inputMax.value = value;
    } else {
      inputMin.value = value;
    }
  });

  inputMin.addEventListener('change', function() {
    rangeSlider.noUiSlider.set([this.value, null]);
  })

  inputMax.addEventListener('change', function() {
    rangeSlider.noUiSlider.set([null, this.value]);
  })
});