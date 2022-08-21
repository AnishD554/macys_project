function changepic(){
  document.getElementById("carty").src="cart.jpeg"
  
}
function changepic2(){
  document.getElementById("carty").src="cart2.webp"
}
function changepic3(){
  document.getElementById("carty").src="cart4.jpeg"
  
}
function changepic4(){
  document.getElementById("carty").src="cart5.png"
  
}
function changepic5(){
  document.getElementById("carty").src="cart6.png"
  
} 

function alert1(){
  alert("You can only have 5 items in you cart ")
}

function checkup1(){
  var a= document.getElementById("pass").value
  var b= document.getElementById("confpass").value

  if(a!=b){
    alert("your passwords do not match")
  }
  else{
    alert("Your account has been setup")
  }
}