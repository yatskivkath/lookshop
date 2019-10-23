document.addEventListener("DOMContentLoaded", function(event) {
    init();
  });

function init(){
    menuBtn = menuBtn[0];
    menuList = menuList[0];
    
    setWidth();
    window.addEventListener("resize", ev => setWidth())
}

let menuBtn = document.getElementsByClassName('menu-btn');
let menuList = document.getElementsByClassName('menu');

 function setWidth(){
    if(screen.width <= 1100){
        addClass(menuBtn, 'active');
        removeClass(menuList, 'active');

        menuBtn.addEventListener('click', () => menuBtnClick(menuBtn));
    }
    else{
        if(menuBtn.classList.contains('active')) removeClass(menuBtn, 'active');
        if(menuList.classList.contains('active')) removeClass(menuList, 'active');
    }
  }

  function menuBtnClick(){
    if(menuBtn.classList.contains('active')){
        removeClass(menuBtn,'active');
        addClass(menuList, 'active');
    } else{
        removeClass(menuList, 'active');
        addClass(menuBtn, 'active')
    }
  }

  function addClass(el, cl){
    el.classList.add(cl);
  }

  function removeClass(el, cl){
    el.classList.remove(cl);
  }