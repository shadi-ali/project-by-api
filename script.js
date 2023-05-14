async function fetchRes()
{
     await fetch('https://dummyjson.com/products')
     .then((res)=>res.json())     
    . then((res)=>{test(res);})
}
const test =(res)=>{
     const view = document.querySelector('.viewer');
     const dots = document.querySelector('.dots')
     //-------------تابع انشاء الديفات الخماسية -------------------------------
     res.products.forEach(element => {
          if(element.id % 5 == 0)
          {
               view.innerHTML+=`<div class="five"></div>`;
          }

     });
     if(res.products.length % 5 != 0)
     { view.innerHTML+=`<div class="five"></div>`;}//في حال كان عدد العناصر اكتر من30 و اقل من 35 لانشاء ديف يحوي العناصر المتبقية
     //-------------------
     res.products.forEach(element => {
          if(element.id % 10 == 0)
          {
               dots.innerHTML+=`<div class="view-screen"></div>`;
          }
     });
     if(res.products.length % 10 != 0)
     {dots.innerHTML+=`<div class="view-screen"></div>`; }//
     //------------------
     let five=document.querySelectorAll('.five');
     let x=-4;
     let y=0;
     five.forEach(element => {
          x+=5;
          y+=5;
          console.log(element);
          for (let index = x; index <= y ; index++) {
               element.innerHTML += `<div class="card">
                                       <img src="${res.products[index-1].images[0]}" alt="" class="manyphoto">
                                       <div class="info">
                                             <p>Product Name : ${res.products[index-1].title}</p>
                                             <p>Category : ${res.products[index-1].category}</p>
                                             <p>price : ${res.products[index-1].price}</p>
                                             <p>stock: ${res.products[index-1].stock}</p>
                                        </div>
                                       </div>`               
          }
     });
     let screen = document.querySelectorAll('.view-screen') 
     for (let index = 0; index < screen.length; index++) {
          screen[index].addEventListener('click',()=>{
               screen.forEach(element => {
                    element.style.backgroundColor='blueviolet';
                    element.innerText= '';
               });
               screen[index].style.backgroundColor='rgb(43, 226, 52)';
               screen[index].innerText=`${index+1}`;
               five.forEach(element => {
                    element.style.transform=`translateX(-${view.offsetWidth*index}px)`;
               });
          });
          
     } 
     const manyphoto=document.querySelectorAll('.manyphoto');
     console.log(manyphoto); 
     for (let index = 0; index < manyphoto.length; index++) {
          let counter=0;
          manyphoto[index].addEventListener('click',()=>{
               if(counter==4){counter=-1;}
               counter++;
               manyphoto[index].innerHTML=`<img src="${res.products[index].images[counter]}" alt="" class="manyphoto">`
          });
     }
  }
fetchRes();
