var dom02 = (function () {
    var nodeDiv1, nodeDiv2, nodeDiv3;

    function initModul() {

        nodeDiv1 = document.getElementById("d1");
        nodeDiv2 = document.getElementById("d2");
        nodeDiv3 = document.getElementById("d3");

//    var nodeDiv1 =document.querySelector("#d1"); //otra manera de hacerlo.
        nodeDiv1.addEventListener("click", controlEsdeveniments);
        nodeDiv2.addEventListener("mouseover", controlEsdeveniments);
        nodeDiv3.addEventListener("click", controlEsdeveniments);
    }


    function controlEsdeveniments(e) {
        alert("hola como estas!!!");
    }

    return {
        initModul: initModul
    };

})();

window.addEventListener("load", dom02.initModul);