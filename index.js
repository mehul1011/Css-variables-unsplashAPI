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
