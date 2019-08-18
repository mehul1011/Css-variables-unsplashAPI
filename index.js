const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  // console.log(this.dataset);
  const suffix = this.dataset.sizing || '';
  // dataset displays all the data-* attribute (custom) and in that we are selecting the sizing attribute (px) and other than that it will be empty
  console.log(suffix);
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
} 

// now we need to listen for changes in the input (range)

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }