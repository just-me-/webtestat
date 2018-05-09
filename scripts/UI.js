/* hier sind DOM Verbindungen erlaubt */
"use strict";
window.addEventListener("load", function() {
    const inputElements = document.querySelectorAll("form input");

    // add class when touched
    inputElements.forEach( 
        (el) => {
            el.addEventListener("blur", function() {
                event.target.classList.add("touched");
            });
        }
    );
    // if user tries to submit
    document.querySelector("aside .btn-primary").addEventListener("click", function() {
        inputElements.forEach(
            (el) => el.classList.add("touched")
        );
    });

});
