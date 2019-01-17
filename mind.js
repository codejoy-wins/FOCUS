function switchColor(){
    console.log(`will switch color`);
    var elem = document.getElementById("background");
    if(elem){
        elem.id="background2";
        return;
    }
    var elem2 = document.getElementById("background2");
    if(elem2){
        elem2.id="background";
        return;
    }
    var elem3 = document.getElementById("background3");
    if(elem3){
        elem3.id="background4";
        return;
    }
    var elem4 = document.getElementById("background4");
    if(elem4){
        elem4.id="background3";
        return;
    }
}
function newColor(){
    console.log("newcolor")
    var elem = document.getElementById("background4");
    if(elem){
        elem.id="background2";
        return;
    }
    var elem2 = document.getElementById("background2");
    if(elem2){
        elem2.id="background";
        return;
    }
    var elem3 = document.getElementById("background3");
    if(elem3){
        elem3.id="background4";
        return;
    }
    var elem4 = document.getElementById("background");
    if(elem4){
        elem4.id="background3";
        return;
    }
}