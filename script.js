let bannerOn = true;

function off(context) {

    
    if (bannerOn === true){
        // alert("Test is running");
        document.getElementById("banner").style.display = "none";
        bannerOn = false;
    }

}