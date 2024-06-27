let menuIcons =document.querySelector('menu-icons');
let navbar = document.querySelector('navbar');
let section =document.querySelector('section')
let navlinks =document.querySelector('header nav a')


window.onscroll= () => {
    section.forEach(sec => {
      let top =window.scrollY;
      let offset =sec.offsetTop-150;
      let height =sec.offsetheight;
      let id= sec.getAttribute('id');
  
       if(top >= offset && top <offset + height){
            navlinks.forEach(links => {
               links.class.remove('active');
               document.querySelector('header nav a ')
               ([href*='id + ']).classlist.add ('active'); 


            })
       }



    })
}
menuIcons.onclick =() => {
    menuIcons.classList.toggle('bx-x');
    navbar.classList.toggle('active ');
}