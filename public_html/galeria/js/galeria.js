
var galeria = (function () {

    function initGaleria() {
        var h1 = document.createElement("h1");
        h1.innerHTML = "Galeria de imagenes";
        document.body.appendChild(h1);
        var div1 = document.createElement("div");
        div1.setAttribute("id", "contenedor");
        document.body.appendChild(div1);
        var figure = document.createElement("figure");
        div1.appendChild(figure);
        var figcaption = document.createElement("figcaption");
        figcaption.appendChild(figure);
        var ul = document.createElement("ul");
        ul.innerHTML = "<li id=\"i\">></li><li id=\"d\"><</li>";
        div1.appendChild(ul);

    }



    return{
        inicio: initGaleria
    };

})();

window.addEventListener("load",galeria.inicio);