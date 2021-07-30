// Tooltip
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
// Tooltip


// menu 

const menuBox = document.querySelector('.nav-bar ul');


const colexit = document.querySelector('.collpase-menu i');



colexit.addEventListener('click', function() {
  if(this.classList.contains('fa-bars')) {
    this.classList = 'fas fa-times';
    menuBox.style.right = 0;
  }else {
    this.classList = 'fas fa-bars'
    menuBox.style.right = '-160px'
  }
})
