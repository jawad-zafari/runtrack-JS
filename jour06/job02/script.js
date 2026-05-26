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

    let btnReboot = document.getElementById("btn-reboot"); 

    let jumbotronText = document.querySelector(".p-5 .lead");

    if (btnReboot) { 
        btnReboot.addEventListener("click", function() {
            
            
            let randomIndex = Math.floor(Math.random() * citations.length);
            
            let selectedQuote = citations[randomIndex];
            
            jumbotronText.textContent = selectedQuote;
        });
    }


    // --- (Pagination) ---
    
    const pageContents = [
        "page 1 : ceci est un exemple de texte pour la première page.",
        "page 2 : ceci est un exemple de texte pour la deuxième page.",
        "page 3 : ceci est un exemple de texte pour la troisième page."
    ];

    let pageLinks = document.querySelectorAll(".page-link");

    pageLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 

            let text = this.textContent; 
            
            if (text === "1") {
                jumbotronText.textContent = pageContents[0];
            } else if (text === "2") {
                jumbotronText.textContent = pageContents[1];
            } else if (text === "3") {
                jumbotronText.textContent = pageContents[2];
            }

           
            let parentLi = this.parentElement; 
            
            let currentActive = document.querySelector(".pagination .active");
            if (currentActive) {
                currentActive.classList.remove("active");
            }

            parentLi.classList.add("active");
        });
    });


});