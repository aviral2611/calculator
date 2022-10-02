var button=document.getElementsByClassName("box1");
var operand=0;
var operand2=0;
var operator=null;
for(var i=0;i<button.length;i++){    

button[i].addEventListener('click', function() {
        var value= this.getAttribute('data-value');
    if(value == "+"){
        operator='+';
        operand=parseFloat( document.getElementById("demo").textContent);
console.log(operand);
document.getElementById("demo").innerText=null;
    }      
    else if(value=='*'){
        operator='*';
        operand=parseFloat( document.getElementById("demo").textContent);
        console.log(operand);

      
         document.getElementById("demo").innerText=null;

        }
        else if(value=='/'){
            operator='/';
            operand=parseFloat( document.getElementById("demo").textContent);
            console.log(operand);
    
          
             document.getElementById("demo").innerText=null;
    
            } 
            else if(value=='-'){
                operator='-';
                operand=parseFloat( document.getElementById("demo").textContent);
                console.log(operand);
        
              
                 document.getElementById("demo").innerText=null;
        
            } 
            else if(value=='%'){
                    operator='%';
                    operand=parseFloat( document.getElementById("demo").textContent);
                    console.log(operand);
            
                  
                     document.getElementById("demo").innerText=null;
            
            }
            else if(value=='ac'){
                document.getElementById("demo").innerHTML=null;
                }
    else if(value == '='){   
        var a=0;
         operand2=parseFloat( document.getElementById("demo").textContent);
         console.log(operand2);
         if(operator=='+'){
        a=(operand + operand2);
        console.log(a);
        } 
        else if(operator=='*'){
            a=(operand * operand2);
            console.log(a);
            } 
            else if(operator=='/'){
                a=(operand / operand2);
                console.log(a);
            }  
            else if(operator=='-'){
                a=(operand - operand2);
                console.log(a);
            }  
            else if(operator=='%'){
                a=(operand % operand2);
                console.log(a);
            }        
        document.getElementById("demo").innerHTML=null;

        document.getElementById("demo").innerText+=a;

    }
        else {

        document.getElementById("demo").innerText+=value;
    }
});
}
// var operand1=0;
// var operand2=null;
// var operator=null;
    // alert("sjsj");        // display


//  for(var i=0;i<button.length;i++){

//     button[0].addEventListener('click',function(){
//         var value= document.getElementsByTagName("div").getAttribute('data-value');
//         document.getElementById("demo").innerHTML=value;
//         // var value="kh";
//         if(value=='+'){
//             operator='+';
//         }
//         // else if(value=='='){

//         // }
//         else{
//             alert("hhed");
        
//         console.log(value);
        
//     }
//     });
// }
// function writing(){
// var y=document.getElementById("seven").innerText;
// document.getElementById("space").innerHTML=y;
// }
// var p=document.getElementsByTagName("p").innerHTML=button;
// p.innerHTML.button;
// var button=document.getElementsByClassName("box1");
// // addEventListener('click',function(){
// //     display.innerHTML="jbe";
// // });
// write.innerText="vdghv";
// function calculate(){
//     var value=this;
//     display.innerText+=value;
//     console.log(button.value);
// }
// var i;
// console.log(button.length);
// console.log(button[0]);

<!--<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Comments</h2>

<p id="demo"></p>

<script>
let x = 5;      // Declare x, give it the value of 5
let y = x + 2;  // Declare y, give it the value of x + 2 

// Write y to demo:
document.getElementById("demo").innerHTML = y;
</script>


</body>
</html>
--!>
