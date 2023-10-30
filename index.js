const boxes = Array.from(document.querySelectorAll('.box'));

boxes.forEach((box) => {
    box.addEventListener('click', boxHandler);
});

function boxHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest('.box')
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle('active');
    if (currentBox.classList.contains('active')) {
        currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    } else {
        currentContent.style.maxHeight = 0
    }
}

// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

const swiperAll = document.querySelector('.swiper')

const swiperDescr1 = document.querySelector('.swiper-descr1')

swiperAll.addEventListener('mouseover', () => {
  swiperDescr1.classList.add('active')
})

swiperAll.addEventListener('mouseout', () => {
  swiperDescr1.classList.remove('active')
})

const swiperDescr2 = document.querySelector('.swiper-descr2')


swiperAll.addEventListener('mouseover', () => {
  swiperDescr2.classList.add('active')
})

swiperAll.addEventListener('mouseout', () => {
  swiperDescr2.classList.remove('active')
})

const swiperDescr3 = document.querySelector('.swiper-descr3')

swiperAll.addEventListener('mouseover', () => {
  swiperDescr3.classList.add('active')
})

swiperAll.addEventListener('mouseout', () => {
  swiperDescr3.classList.remove('active')
})
