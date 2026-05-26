document.addEventListener("DOMContentLoaded", function() {

    let papillonButton = document.querySelector(".card .btn-primary");
    
    let myModal = new bootstrap.Modal(document.getElementById('papillonModal'));

    papillonButton.addEventListener("click", function(event) {
        event.preventDefault();
        myModal.show(); 
    });



});