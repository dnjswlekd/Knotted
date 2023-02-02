(function () {
  'use strict';

  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.swiper-pagination',
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  
// dessert
  const category = document.querySelectorAll('#o_section3 .bigger .cursor-pointer');
  const dessertImgDivList = document.querySelectorAll('.msg .photo1');
  console.log(category);
  console.log(dessertImgDivList);

  category.forEach((item, i) => {
    item.addEventListener('click', e => {

      category.forEach(subItem => {
        subItem.classList.toggle('nm', e.target !== subItem);
      });

      dessertImgDivList.forEach((subItem, subI) => {
        subItem.classList.toggle('display-none', i !== subI);
      })
    });
  });


  // for(let i=0; i<category.length; i++) {
  //   const item = category[i];
  //   item.addEventListener('click', e => {
  //     alert('안녕');
  //   })
  // }

  // function cbDessert(item) {
  //   item.addEventListener('click', function () {
  //     alert('안녕')
  //   })
  // }; function -> 호이스팅x


  // category.forEach(item => {
  //   item.addEventListener('click', e => {
  //     alert('hi')
  //   })
  // });






  /*

  토글은 true면 추가, false면 빼기

  e.target(내가 선택한 것)
  subItem(cake 부터 Tea까지)

  위 두가지를 비교문을 사용해서
  e.target(tea)와 subItem(forEach문의 1번째- cake부터 시작)비교

  cake(nm없음)와 내가 선택한 e.target(nm있음)이 false니까 토글은 nm이라는 클래스를 빼줌
  결과는 cake에는 nm이 없으므로 그대로 

  */







  // const name1 = document.querySelector('.name1');
  // const name2 = document.querySelector('.name2');
  // const name3 = document.querySelector('.name3');
  // const name4 = document.querySelector('.name4');
  // const name5 = document.querySelector('.name5');

  // const p1 = document.querySelector('.p1')
  // const p2 = document.querySelector('.p2')
  // const p3 = document.querySelector('.p3')
  // const p4 = document.querySelector('.p4')
  // const p5 = document.querySelector('.p5')

  // name1.addEventListener('click', ({target}) =>{
  //     p1.classList = 'photo1';
  //     p2.classList = 'display-none';
  //     p3.classList = 'display-none';
  //     p4.classList = 'display-none';
  //     p5.classList = 'display-none';
  //     name1.classList = 'font-color cursor-pointer size-up';
  //     name2.classList = 'nm cursor-pointer';
  //     name3.classList = 'nm cursor-pointer';
  //     name4.classList = 'nm cursor-pointer';
  //     name5.classList = 'nm cursor-pointer';
  // });

  // name2.addEventListener('click', ({target}) =>{
  //     p1.classList = 'display-none';
  //     p2.classList = 'photo1';
  //     p3.classList = 'display-none';
  //     p4.classList = 'display-none';
  //     p5.classList = 'display-none';
  //     name1.classList = 'nm cursor-pointer';
  //     name2.classList = 'font-color cursor-pointer size-up';
  //     name3.classList = 'nm cursor-pointer';
  //     name4.classList = 'nm cursor-pointer';
  //     name5.classList = 'nm cursor-pointer';
  // });
  // name3.addEventListener('click', ({target}) =>{
  //     p1.classList = 'display-none';
  //     p2.classList = 'display-none';
  //     p3.classList = 'photo1';
  //     p4.classList = 'display-none';
  //     p5.classList = 'display-none';
  //     name1.classList = 'nm cursor-pointer';
  //     name2.classList = 'nm cursor-pointer';
  //     name3.classList = 'font-color cursor-pointer size-up';
  //     name4.classList = 'nm cursor-pointer';
  //     name5.classList = 'nm cursor-pointer';
  // });
  // name4.addEventListener('click', ({target}) =>{
  //     p1.classList = 'display-none';
  //     p2.classList = 'display-none';
  //     p3.classList = 'display-none';
  //     p4.classList = 'photo1';
  //     p5.classList = 'display-none';
  //     name1.classList = 'nm cursor-pointer';
  //     name2.classList = 'nm cursor-pointer';
  //     name3.classList = 'nm cursor-pointer';
  //     name4.classList = 'font-color cursor-pointer size-up';
  //     name5.classList = 'nm cursor-pointer';
  // });
  // name5.addEventListener('click', ({target}) =>{
  //     p1.classList = 'display-none';
  //     p2.classList = 'display-none';
  //     p3.classList = 'display-none';
  //     p4.classList = 'display-none';
  //     p5.classList = 'photo1';
  //     name1.classList = 'nm cursor-pointer';
  //     name2.classList = 'nm cursor-pointer';
  //     name3.classList = 'nm cursor-pointer';
  //     name4.classList = 'nm cursor-pointer';
  //     name5.classList = 'font-color cursor-pointer size-up';
  // });

  window.onload = function () {

    function onClick() {
      document.querySelector('.modal_wrap').style.display = 'block';
      document.querySelector('.black_bg').style.display = 'block';
    }
    function offClick() {
      document.querySelector('.modal_wrap').style.display = 'none';
      document.querySelector('.black_bg').style.display = 'none';
    }

    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);

  };

  const handleScroll = document.querySelector('.handleScroll')

  handleScroll.addEventListener = (e, scroll) => {
    switch (scroll) {
      case 'start': // 마우스 버튼 누르는 경우
        setOriginX(e.clientX);
        setIsScroll(true);
        break;
      case 'end': // 마우스를 버튼 누르기 중단
        setAfterX(position);
        setIsScroll(false);
        break;
      case 'leave': // 마우스가 영역을 벗어난 경우
        setIsScroll(false);
        break;
      default:
        break;
    }
  };

  const handleSlide = e => {
    const newPosition = e.clientX - originX + afterX;
    const hiddenLength = e.currentTarget.offsetWidth - 166 * BOOKS.length;
    if (isScroll === false) {
      return;
    }

    newPosition < 10 && newPosition > hiddenLength && setPosition(newPosition);
  };
})();
