// "use strict";
window.addEventListener("load", function() {
    "use strict";
    document.querySelector("#font-slider").addEventListener("change", function() {
        document.querySelector("html").style.fontSize = this.value/10+"em";
        document.querySelector("#font-size").innerText = this.value/10;
    });
});
