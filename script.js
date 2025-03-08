const map=document.querySelector(".map-btn");
    map.addEventListener('click',function(){
        console.log('he')
           
    window.location.href='https://www.google.com/maps'
});


document.querySelector(".call").addEventListener("click",function(){
           
    window.location.href='tel:(147) 870-7040'
});


const nav=document.querySelector('.header');
window.addEventListener('scroll',function(){
   if(window.scrollY>15){
    nav.style.backgroundColor='lightseagreen'
   }
   else{
     nav.style.backgroundColor='transparent'
   }
})
    