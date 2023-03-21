document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('.header');
  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };

  const filterBtns = document.querySelectorAll(".categories-nav__btn");
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

  const burger = document.querySelector('.burger');
  const burgerClose = document.querySelector('.burger-close');
  const headerNavMobile = document.querySelector('.nav-mobile');
  const bodyLock = document.querySelector('body');

  burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active');
    headerNavMobile.classList.toggle('--active');
    if (headerNavMobile.classList.contains('--active')) {
      bodyLock.classList.add('lock');
    }
    else {
      burger.classList.remove('burger--active');
      bodyLock.classList.remove('lock');
    }
  });
  burgerClose.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    headerNavMobile.classList.remove('--active');
    bodyLock.classList.remove('lock');
  });
  document.addEventListener('click', function (e) {
    if (e.target !== burger && e.target !== headerNavMobile && e.target !== burgerClose) {
      burger.classList.remove('burger--active');
      headerNavMobile.classList.remove('--active');
      bodyLock.classList.remove('lock');
    }
  });


  if (window.innerWidth <= 576) {
    const swiper2 = new Swiper('.resto__slider', {
      pagination: {
        el: ".resto__dots",
        bulletClass: "resto__dot",
        bulletActiveClass: "resto__dot--active",
        clickable: true,
      },
    })
  };
});

