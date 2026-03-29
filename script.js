function volume_sphere() {
    //Write your code here
	let num1 = document.getElementById("radius").val;
	let vol = (4/3)3.14*num1*num1*num1;
	document.getElementById("volume").textContent = vol;
	
	
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
