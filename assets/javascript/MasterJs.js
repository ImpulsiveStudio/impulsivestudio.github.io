

function CatOpen(){
    var Cat = document.getElementById("CategoryBox");
    if (Cat.style.left == ""){
        Cat.style.left = "400px";
    }
    else {
        Cat.style.left = "";
    }
}

function CatClose(){
    var Cat = document.getElementById("CategoryBox");
    Cat.style.left = "";
}
