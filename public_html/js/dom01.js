
var dom01 = (function () {
    var arrayNodeP = document.getElementsByTagName("p");
    console.log(arrayNodeP);
    var nodeP = arrayNodeP[0];
    nodeP.innerHTML = "Hola <b>mon</b>";
    var nodeB = nodeP.querySelector("b");
    nodeB.innerHTML = "Hola hector";
    var nodeP1 = document.getElementById("p1");
    nodeP1.innerHTML = "mira ahora";
    var nodeP2 = document.querySelector("p:last-of-type");
    //nodeP2.outerHTML = "<b>Doncs no miris</b>";
    
    //DOM 2
    nodeP1.addEventListener("click", function (e) {
        alert(e.type);
    });
    
    //DOM 0 //nomes una vegada
    nodeP2.onclick=miAlert;
    function miAlert(e){
        alert("Has fet click sobre"+e.target.nodeName());
    } 
    
    
    
    //para pasarlo con parametros
    nodeP.onclick = function (e){ 
            miAlert2("hola!!!",e);
        };
    function miAlert2(missatge,e){
        alert(missatge+""+e.target.nodeName);
    }
    
    
})();


