tabsMenu()
function tabsMenu(){
  let menuItems = document.querySelectorAll('.tabs-menu__item'),
    contentItems = document.querySelectorAll('.tabs-content__item');
  for(let i = 0; i < menuItems.length; i++){
    let menuItem = menuItems[i],
      contentItem = contentItems[i];
    menuItem.onclick = function(){
      for(let j = 0; j < menuItems.length; j++){
        menuItems[j].classList.remove('tabs-menu_focus');
        contentItems[j].classList.remove('active');
      }
      menuItem.classList.add('tabs-menu_focus')
      contentItem.classList.add('active');
    }  
  }  
}