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

//--- Liste de droite ---    

    let listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function(item) {
        item.addEventListener("click", function(event) {
            event.preventDefault(); 

            let activeItem = document.querySelector(".list-group .active");
            if (activeItem) {
                activeItem.classList.remove("active");
            }

            this.classList.add("active");
        });
    });


    // (Progress Bar)

    let progressBar = document.querySelector(".progress-bar");
    
    let progressValue = 75;

    let btnPlus = document.getElementById("btn-plus");
    let btnMinus = document.getElementById("btn-minus");

    btnPlus.addEventListener("click", function() {
        if (progressValue < 100) {
            progressValue += 5; 
            progressBar.style.width = progressValue + "%";
        }
    });

    btnMinus.addEventListener("click", function() {
        if (progressValue > 0) {
            progressValue -= 5; 
            progressBar.style.width = progressValue + "%";
        }
    });

    // (D, G, C)
    
    let keySequence = ""; 

    document.addEventListener("keydown", function(event) {
        
        keySequence += event.key.toLowerCase();

        if (keySequence.length > 3) {
            keySequence = keySequence.slice(-3);
        }
        if (keySequence === "dgc") {
            
            
            
            let dgcModal = new bootstrap.Modal(document.getElementById('dgcModal'));
            
            let modalText = document.getElementById("modal-content-text");
            modalText.textContent = "Vous avez découvert le code secret ! (DGC pressed)";
            
            dgcModal.show();
            
            keySequence = "";
        }
    });



    let form = document.querySelector("form");
    
    let spinner = document.getElementById("jumbo-spinner");
    
    const colors = ["text-primary", "text-secondary", "text-success", "text-danger", "text-warning", "text-info", "text-dark"];

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let emailInput = document.getElementById("exampleInputEmail1");
        let passInput = document.getElementById("exampleInputPassword1");

        if (emailInput.value !== "" && passInput.value !== "") {
            
            let randomColor = colors[Math.floor(Math.random() * colors.length)];
            
            spinner.className = "spinner-border ms-3 " + randomColor;
            
        } else {
            alert("Veuillez remplir votre e-mail et votre mot de passe.");
        }
    });
});