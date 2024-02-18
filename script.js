// script.js

function volume_sphere() {
 
  var radiusInput = document.getElementById("radius").value;

  
  var radius = parseFloat(radiusInput);

 
  if (isNaN(radius) || radius < 0) {
    
    document.getElementById("volume").value = 'NaN';
  } else {
    
    var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    
    volume = volume.toFixed(4);

    
    document.getElementById("volume").value = volume;
  }
}


document.getElementById("MyForm").addEventListener("submit", function (event) {
  event.preventDefault(); 
  volume_sphere(); 
});
