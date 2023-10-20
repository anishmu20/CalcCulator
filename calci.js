let str=''
let buttons=document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{
   button.addEventListener('click',(e)=>{
    if(e.target.value=="="){
      str=eval(str)
      document.querySelector('#displayInput').value=str

    }
    else if(e.target.value=="AC"){
      str=" "
      document.querySelector('#displayInput').value=str

    }
    else if(e.target.value=="DE"){
      str=str.slice(0,-1);
      document.querySelector('#displayInput').value=str

    }
    else{
    str+=e.target.value;
    document.querySelector('#displayInput').value=str;
    }
   })
})
