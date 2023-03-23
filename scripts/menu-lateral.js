var isOpen = false;

function openTeste(){
    var menuLeft = document.querySelector('.m-left');
    var menuX = document.querySelector('.fa-xmark');
    var sandwich = document.querySelector('.fa-bars');

    if(isOpen == false){
    menuLeft.style.width = "50%";
    menuLeft.style.padding = "2em";
    menuX.style.display = 'flex';
    sandwich.style.display = 'none';
    isOpen = true;
    }else{
        menuLeft.style.width = "0";
        menuLeft.style.padding = "0";
        isOpen = false;
        menuX.style.display = 'none';
    sandwich.style.display = 'flex';
    }
}