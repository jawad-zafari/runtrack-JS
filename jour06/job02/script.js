document.addEventListener("DOMContentLoaded", function() {

    let papillonButton = document.querySelector(".card .btn-primary");
    
    let myModal = new bootstrap.Modal(document.getElementById('papillonModal'));

    papillonButton.addEventListener("click", function(event) {
        event.preventDefault();
        myModal.show(); 
    });


//------ Bouton Blade Runner ---    
    const citations = [
        "J'ai vu tant de choses que vous, humains, ne pourriez pas croire...",
        "Tous ces moments se perdront dans l'oubli comme des larmes dans la pluie.",
        "Réveillez-vous ! Il est temps de mourir.",
        "La lumière qui brille deux fois plus fort brûle deux fois moins longtemps.",
        "C'est dommage qu'elle doive mourir. Mais on en est tous là, non ?"
    ];

    
});