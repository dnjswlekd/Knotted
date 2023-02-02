(function () {
  'use strict'


  let data = null;
  let page = 1;
  const rowCnt = 12;

  let jsonlist = '';



  const $menucontainer = document.querySelector('.menu_container')
  const $paging = document.querySelector('.paging');

  window.addEventListener('load', e => {
    console.log(sessionStorage.getItem('list'))
    if (sessionStorage.getItem('list') === null) {
      jsonlist = JSON.parse(JSON.stringify(list))
      makeDisplay(jsonlist);
    } else {
      jsonlist = JSON.parse(JSON.stringify(list))
      makeDisplay(jsonlist);
    }
  })



  function makeDisplay(jsonlist) {
    console.log(jsonlist)
    data = jsonlist;
    const itemLen = data.length;
    console.log(itemLen);
    const maxPage = Math.ceil(itemLen / rowCnt);
    makePaging(maxPage);
    makeList(jsonlist);
  }
  function makeList(jsonlist) {
    $menucontainer.innerHTML = '';
    const sIdx = (page - 1) * rowCnt;
    const eResult = page * rowCnt;
    const eIdx = eResult > data.length ? data.length : eResult;

    for (let i = sIdx; i < eIdx; i++) {
      const item = data[i];
      makeItem(item);
    }
    changeSelected();
  }

  function changeSelected() {
    const pageSpanList = document.querySelectorAll('.page');
    pageSpanList.forEach(item => {
      const innerNum = parseInt(item.textContent);
      item.classList.toggle('selected', page === innerNum);
    });
  }

  //페이징 숫자 찍기
  function makePaging(maxPage) {
    for (let i = 1; i <= maxPage; i++) {
      const span = document.createElement('span');
      $paging.appendChild(span);

      span.classList.add('page');
      span.classList.add('pointer');
      span.textContent = i.toString();


      span.addEventListener('click', e => {

        page = i;
        makeList();
        window.scrollTo(0, 0);
      })
    }
  }

  

  const $header = document.querySelector('.menu')

  $header.addEventListener('click', e => {
    sessionStorage.removeItem('list')
    sessionStorage.removeItem('selectData')
    sessionStorage.removeItem('num')
  })

  const $logo = document.querySelector('.logo')

  $logo.addEventListener('click', e => {
    window.location.href = "detailPage_a.html"
    sessionStorage.removeItem('list')
    sessionStorage.removeItem('selectData')
    sessionStorage.removeItem('num')
  })

  new Swiper('.swiper', {

    pagination: { el: '.swiper-pagination', },


    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },


    scrollbar: { nel: '.swiper-scrollbar', },
  });
})()