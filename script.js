//start home section




//end home section 


//start product section

AOS.init();

  
function showCartMessage() {
  alert("Sorry, no products are available right now. Please check back soon!");
}

function showCartMessage() {
  const popup = document.getElementById('cart-message');
  popup.classList.add('show');

  // Hide the popup after 3 seconds
  setTimeout(() => {
    popup.classList.remove('show');
  }, 3000);
}

 //end product section 

 
 

