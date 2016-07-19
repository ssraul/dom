var eleccions = (function (){
    var nodeLoader, ajaxConnection, nodeForm, nodePartit, nodeResultat;
    
    
    function privateInitApp(){
        // crear div loader
        document.body.insertAdjacentHTML("beforeend","<div id=\"loader\"></div>");
        // inicialitzo nodes
        nodeLoader = document.getElementById("loader");
        nodeForm = document.forms[0]; // document.getElementsByTagName("form")[0]
        nodePartit = document.getElementsByName("partit")[0];
        nodeResultat = document.getElementById("resultat");
        // esdeveniment html
        nodeForm.addEventListener("submit",sendAjaxRequest);
        
        // AJAX
        ajaxConnection = new XMLHttpRequest();
        if(!ajaxConnection) {
            alert("No es pot obrir el connector");
            return false;
        }        
        // esdeveniments ajax
        ajaxConnection.addEventListener("error",showError); // problemes en enviar/rebre petició
        ajaxConnection.addEventListener("load",receiveAjaxResponse);
        ajaxConnection.addEventListener("loadstart",function (){ showLoader(true); });
        ajaxConnection.addEventListener("loadend",function (){ showLoader(false); });        
    }
    
    function showLoader(show){
        nodeLoader.style.display = show? "block" : "none";
    }
    
    function showError(e){
        console.log(e);
        alert("Error de comunicació");
        showLoader(false);
    }
    
    function sendAjaxRequest(e){
        e.preventDefault(); // aturo que s'envïi el formulari
        var myForm = new FormData(nodeForm); // carrego el form en un objecte formdata
        ajaxConnection.open("POST","eleccions.php"); // obrir connexió
        ajaxConnection.responseType = ""; // paràmetres connexió
        ajaxConnection.send(myForm); // enviar
    }
    
    function receiveAjaxResponse(e){
        var data = e.target;
        if(ajaxConnection.status !== 200){
            alert("Error en la resposta");
            return false;
        }
        nodeResultat.innerHTML = JSON.parse(data.response);        
    }
    
    return {
      initApp: privateInitApp  
    };    
})();

window.addEventListener("load",eleccions.initApp);



















////var eleccions = (function () {
//    var nodeLoader; /*variable para hacer el loader*/
//    var ajaxConnection; /*variable para hacer el ajax*/
//    var nodeForm; /*para el formulario*/
//    var nodePartit; /*para los campos del formulario*/
//    var nodeResultat; /*para los campos del formulario*/
//
//
//    function privateInitApp() {
//        //crear la capa del loader
//        document.body.insertAdjacentHTML("beforeend", "<div id=\"loader\"></div>");
//
//        //inicializar nodos.
//        nodeLoader = document.getElementById("loader");
//        nodeForm = document.forms[0]; //document.getElementsByTagName("form")[0];los que tienen elements en plural siempre se pone al final el array [0]
//        nodePartit = document.getElementsByName("partit")[0];
//        nodeResultat = document.getElementById("resultat");
//        //eventos html
//        nodeForm.addEventListener("submit", sendAjaxRequest);
//
//        //AJAX crear el objeto y comprobar si se puede hacer 
//        ajaxConnection = new XMLHttpRequest();
//        if (!ajaxConnection) {
//            alert("no es pot obrir el connector");
//            return false;
//        }
//
//
//        //esdeveniments ajax
//
//        ajaxConnection.addEventListener("error", showError);// problemes en rebre petició
//        ajaxConnection.addEventListener("load", receiveAjaxResponse);
//        ajaxConnection.addEventListener("loadstart", function () {
//            showLoader(true);
//        });
//        ajaxConnection.addEventListener("loadend", function () {
//            showLoader(true);
//        });
//
//    }
//
//    function showLoader(show) {
//        nodeLoader.style.display = show ? "block" : "none";
//    }
//
//    function showError(e) {
//        console.log(e);
//        alert("error de comunicación");
//        showLoader(false);
//    }
//
//    function sendAjaxRequest(e) {
//        /*cuando se apriete el boton del formulario no haga nada, no envie el formulario*/
//        e.preventDefault();
//        var myForm = new FormData(nodeForm);/*carga el formulario en una variable en un objeto formdata*/
//        ajaxConnection.open("POST", "eleccions.php");//abrir la conexion
//        ajaxConnection.responseType = "";//parametres de la conexion
//        ajaxConnection.send(myForm);//enviar 
//
//    }
//
//    function receiveAjaxResponse(e) {
//        var data = e.target;
//        if (ajaxConnection.status !== 200) {
//            alert("error en la respuesta");
//            return false;
//
//        }
//
//        nodeResultat.innerHTML = JSON.parse(data.response);
//
//    }
//
//
//
//
//
//
//    return{
//        initApp: privateInitApp
//    };
//
//
//})();
//
//window.addEventListener("load", eleccions.initApp);