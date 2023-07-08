var dragImage = document.getElementById("drag-image");

// Establecer posición inicial
dragImage.style.left = "450px";
dragImage.style.top = "80px";

dragImage.addEventListener("mousedown", function(e) {
  e.preventDefault();
  var initialX = e.clientX;
  var initialY = e.clientY;

  // Aumentar el tamaño de la imagen
  dragImage.style.width = (dragImage.offsetWidth + 20) + "px";
  dragImage.style.height = (dragImage.offsetHeight + 20) + "px";

  document.addEventListener("mousemove", moveImage);
  document.addEventListener("mouseup", stopMoving);

  function moveImage(e) {
    var offsetX = e.clientX - initialX;
    var offsetY = e.clientY - initialY;
    var positionX = dragImage.offsetLeft + offsetX;
    var positionY = dragImage.offsetTop + offsetY;

    dragImage.style.left = positionX + "px";
    dragImage.style.top = positionY + "px";

    initialX = e.clientX;
    initialY = e.clientY;
  }

  function stopMoving() {
    document.removeEventListener("mousemove", moveImage);
    document.removeEventListener("mouseup", stopMoving);

    // Restaurar el tamaño original de la imagen
    dragImage.style.width = "350px";
    dragImage.style.height = "350px";
  }
});


// DIALOG 


const checkbox = document.getElementById('hamb_check');
const img = document.querySelector('.hamb_label-img');

checkbox.addEventListener('change', function() {
  if (this.checked) {
    img.classList.add('close');
  } else {
    img.classList.remove('close');
  }
});
