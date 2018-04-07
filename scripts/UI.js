/* hier sind DOM Verbindungen erlaubt */

window.addEventListener("load", function() {
    document.querySelector("#font-slider").addEventListener("change", function() {
        console.log("did"+this.value);
        document.querySelector("html").style.fontSize = this.value/10+"em";
    });
});