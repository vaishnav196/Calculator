let themelight = " styles/light.css";
let themedark = "styles/dark.css";
let res = document.querySelector(".result").value;
// res=''
let sunIcon="icons/sunIcon.svg";
let moonIcon="icons/Moonicons";
let keys = document.querySelectorAll(".btn");
let theme=document.getElementById("theme");
let headline=document.getElementById("headline");


Array.from(keys).forEach((el) =>{
  el.addEventListener('click',(i) =>{
    num = i.target.value;
    // i.preventDefault();
    if(num=='C'){
      res= res.toString().slice(0,-1);
    
      document.getElementById("display").value=res;
    }
 
    else if(num=='='){
      res=eval(res);
      document.getElementById("display").value=res;
    }
    
    else{
      num = i.target.value;
      res = res + num;
      document.getElementById("display").value = res;
    }
        
  });
 
 });


 function changeTheme() {

  const theme = document.getElementById("theme");
 
  if (theme.getAttribute("href") === themelight) {
    theme.setAttribute("href", themedark);
  
  } else {
    theme.setAttribute("href", themelight);
  
  }
}





    
  







// alternate methods

// document.addEventListener('click',(keypress)=>{
//     // console.log("key is press");
//     n=keypress.target.value;
//     if(n=="1"){
// console.log("one is pressed");

// res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="2"){
//         console.log("2 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="3"){
//         console.log("3 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="4"){
//         console.log("4 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="5"){
//         console.log("5 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="6"){
//         console.log("6 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="7"){
//         console.log("7 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="8"){
//         console.log("8 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="9"){
//         console.log("9 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="0"){
//         console.log("0 is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="."){
//         console.log(". is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
     
//     else if(n=="*"){
//         console.log("* is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="/"){
//         console.log("/ is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="-"){
//         console.log("-  is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="+"){
//         console.log("+ is pressed");
//         res=res+n;
// document.getElementById("display").value=res;
//     }
//     else if(n=="C"){
//       res = display.value.toString().slice(0, -1);
//           document.getElementById("display").value = res;
//     }

//     else{
//         document.getElementById("display").value=eval(res);
        
//     }
     
//        })
 



