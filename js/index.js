
// check if one of the inputs is empty : 
let send = document.getElementById('send')
let elements = document.querySelectorAll('input , textarea')
let password = document.getElementById("password")
send.addEventListener('click',function(e){
  let count =0;
  console.log(e.target.parentElement.querySelectorAll('.form-group')[count].lastChild.nextElementSibling)
  for (let i of elements){
      let span = document.createElement('span') 
       if(i.value =="" && i.nextElementSibling == null) {
         count++          
         console.log(e.target.parentElement.querySelectorAll('.form-group span')[count])
       span.innerHTML= "Please fill the "+i.id+" field"
       span.classList.add('error')
       i.classList.add('has-error')                
       insertAfter(span,i)         
      } else if(i.nextElementSibling.classList.contains('has-error')) {
        if(count > 0 ){alert ("one or all of  the inputs is empty")}
            else {alert("all input are good")}
           
      }
    
  }
  

 
})

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

for (let i of elements ){
  
  i.addEventListener('blur',function(e){
    
   if(i.value.length>0){
   i.classList.remove('has-error')
  e.target.nextElementSibling.remove()
   }
  })
  
}


function checkEmail(){
   
}



password.addEventListener('blur',checkPassword)

function checkPassword(){
  
  let regex = new RegExp ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  
  if(regex.test(password.value))
    {
       let span = document.createElement('span') 
         span.innerText ="Mot de passe valide";
      
    } else {    let span = document.createElement('span') 
                 span.innerText ="invalid password"
                 span.classList.add('error')
               password.classList.add('has-error') 
               insertAfter(span,password)
           
           }
 
  
  }