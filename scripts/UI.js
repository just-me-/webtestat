const setDirty = function(event) {

    event.target.classList.add("dirty");
};


const initApp = function() {
    const inputElements = document.querySelectorAll("form input");
    
    inputElements.forEach( 
        (el) => {
            el.addEventListener("blur", setDirty);
    }
    )

};



window.onload = initApp;