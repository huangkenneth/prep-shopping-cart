window.onload = function (){

var shoppingCart = [
  { name: "Lusicious Jello Mix", description: ["Very Elegant", "Trending item", "Come in Purple"], "price": 80.65, "image": "images/jelloshots.jpg"},
  { name: "Tarnished Standing Desk", description: ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], "price": 1654.99, "image": "images/antique-desk.jpg"},
  { name: "Hand-made Hand Grenades", description: ["Such gift!", "Much boom!", "Very safe for kids"], "price": 10.44, "image": "images/hand-grenade.jpg"},
  { name: "Pan-fried Cookie Dough", description: ["Chocolate", "Family-size", "Hot Mess"], "price": 16.99, "image": "images/pan-fried-cookie.jpg"},
  { name: "Fancy Dress Hanger", description: ["Keep organized", "On Sale"], "price": 67.32, "image": "images/hanger.jpg" },
  { name: "Snarky Britsh Mustache 3-Pack", description: ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], "price": 1.99, "image": "images/british-mustache.jpg"},
];


console.log(shoppingCart);
console.log(shoppingCart.name);
console.log(shoppingCart.description);
console.log(shoppingCart.price);

function cart(myItems){
	for (i=0; i<myItems.length; i++){
	console.log(myItems[i]);
	console.log(myItems[i].description);
	
	var variable = document.createElement('div');
	variable.id = 'holder';
	items.appendChild(variable);

	

	var theBrands = document.createElement('p');
	theBrands.className = "text";
	theBrands.innerHTML = myItems[i].name;
	variable.appendChild(theBrands);

	

	var thePrice = document.createElement('p');
	thePrice.className = "dollars";
	thePrice.innerHTML = myItems[i].price;
	theBrands.appendChild(thePrice);

	var theInfo = document.createElement('p');
	theInfo.className = "content";
	theInfo.innerHTML = myItems[i].description;
	theBrands.appendChild(theInfo);

	var foto = document.createElement('img');
	foto.className = 'images';
	foto.src = myItems[i].image;
	foto.style.display="none";
	theBrands.appendChild(foto);

	

	}
}
cart(shoppingCart);


// function getSum(total, num) {
//     return total + num;
// }

// function myFunction(item) {
//     document.getElementById("price").innerHTML = numbers.reduce(getSum);
// }

var total = 0;

function subtotal(myPrice){
	for (i=0; i<myPrice.length; i++){
		// console.log(myPrice[i].price);
		total += myPrice[i].price;

	}
}

subtotal(shoppingCart);



var number = document.createElement('p');
number.id = "subtotal";
number.innerHTML = total;
price.appendChild(number);

console.log(total);



var hide = document.getElementsByClassName('text');
console.log(hide);

for(i=0; i<hide.length; i++){
	hide[i].addEventListener('click', toggleDisplay);
}

function toggleDisplay(){
	var picture = this.querySelectorAll('.images')[0];
	// for(i=0;i<;i++){
	// console.log(picture);

    if (picture.style.display === 'none'){
      picture.style.display = 'block';
    }else{
      picture.style.display='none';
	}

	// }
}





};