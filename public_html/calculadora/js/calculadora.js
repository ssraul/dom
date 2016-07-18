var calculadora = (function () {
    var bt, botones, pantalla;
    var texto;


    function privateCalcul() {
        botones = document.getElementsByTagName("li");
        pantalla = document.getElementById("pantalla");
        pantalla.innerHTML = "0";
        var i;
        for (i = 0; i < botones.length; i++) {
            botones[i].addEventListener("click", tecla);
        }

    };

    function tecla(e) {
        var teclaMarcada = e.currentTarget.innerHTML;
        pantalla.innerHTML = teclaMarcada;


        switch (teclaMarcada) {
            case "+":
            case "-":
            case "/":
            case "*":
                operacio = teclaMarcada;
                memoria = parseFloat(pantalla.innerHTML);
                
                break;
            case "CE":
                reset();
                break;
            case "=":
                reset();
                break;    

            default:

                break;
        }

    }
    

    function reset() {
        if (pantalla.innerHTML !== 0)
            pantalla.innerHTML = 0;
    }
 
    return{
        initCalculator: privateCalcul
    };

})();

window.addEventListener("load",calculadora.initCalculator);
