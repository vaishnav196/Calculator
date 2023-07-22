let light = " styles/light.css";
let dark = "style/dark.css";
let res = document.querySelector(".result").value;
// res=''
let keys = document.querySelectorAll(".btn");
let theme=document.getElementById("moon").value;




     Array.from(keys).forEach((el) =>{
      el.addEventListener('click',(i) =>{
        num = i.target.value;
        if(num=='C'){
          res= res.slice(0,-1)
        
          document.getElementById("display").value=res
        }
     
        else if(num=='='){
          res=eval(res)
          document.getElementById("display").value=res;
        }
        
        else{
          num = i.target.value;
          res = res + num;
          document.getElementById("display").value = res;
        }
            
      });
     
     });



