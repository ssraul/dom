var dom03 = (function () {
    var bt1, bt2;
    
    
    
    function initApp(){
    
        bt1 = document.getElementById("css1");
        bt2 = document.getElementById("css2");
        bt1.addEventListener("click",function(e){
        canviCssSheet("cambioDeEstilos1");
       
    });
        bt2.addEventListener("click",function(e){
        canviCssSheet("cambioDeEstilos2");
       
    });
    
    function canviCssSheet(sheet){
        //1.heavy mode
        var newNode = document.createElement("link");
        newNode.setAttribute("rel","stylesheet");
        newNode.setAttribute("type","text/css");
        newNode.setAttribute("href","css/"+sheet+".css");
        var head = document.getElementsByTagName("head")[0];
        head.appendchild(newNode);
        
        //2.ineficiente
        document.head.innerHTML +="";
        //3.
        document.head.insertAdjacentHTML('beforeend',"");
        
    }
}
    
    
    return{
      initApp:initApp  
    };
    
})();

window.addEventListener("load",dom03.initApp);
