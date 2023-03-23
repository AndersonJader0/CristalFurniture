var value = 0;
var carrinho = new Array();
var favoritos = new Array();

function change(direction){
    var documento = document.querySelector('.container-interno');
    var car = document.querySelector('.fa-cart-shopping');
    var heart = document.querySelector('.fa-heart');

    if(direction == 'direita' && value < 399){
        value += 100;
        var translate = 'translateX(-' + value + 'vw)';
        documento.style.transform = translate;
        
            //CAR
            if(value == 0 && carrinho.includes("Lorem ipsum1") == true){
                car.style.color = '#691eff';
            }else if(value == 100 && carrinho.includes("Lorem ipsum2") == true){
                car.style.color = '#691eff';
            }else if(value == 200 && carrinho.includes("Lorem ipsum3") == true){
                car.style.color = '#691eff';
            }else if(value == 300 && carrinho.includes("Lorem ipsum4") == true){
                car.style.color = '#691eff';
            }else if(value == 400 && carrinho.includes("Lorem ipsum5") == true){
                car.style.color = '#691eff';
            }else{
                car.style.color = 'gray';
                isInCar = false;
            }

            if(value == 0 && favoritos.includes("Lorem ipsum1") == true){
                heart.style.color = '#691eff';
            }else if(value == 100 && favoritos.includes("Lorem ipsum2") == true){
                heart.style.color = '#691eff';
            }else if(value == 200 && favoritos.includes("Lorem ipsum3") == true){
                heart.style.color = '#691eff';
            }else if(value == 300 && favoritos.includes("Lorem ipsum4") == true){
                heart.style.color = '#691eff';
            }else if(value == 400 && favoritos.includes("Lorem ipsum5") == true){
                heart.style.color = '#691eff';
            }else{
                heart.style.color = 'gray';
                heartSelected = false;
            }
        }else if(direction == 'esquerda' && value > 0){
            value -= 100;
            var translate = 'translateX(-' + value + 'vw)';
            documento.style.transform = translate;

            //CAR
            if(value == 0 && carrinho.includes("Lorem ipsum1") == true){
                car.style.color = '#691eff';
                isInCar = true;
            }else if(value == 100 && carrinho.includes("Lorem ipsum2") == true){
                car.style.color = '#691eff';
                isInCar = true;
            }else if(value == 200 && carrinho.includes("Lorem ipsum3") == true){
                car.style.color = '#691eff';
                isInCar = true;
            }else if(value == 300 && carrinho.includes("Lorem ipsum4") == true){
                car.style.color = '#691eff';
                isInCar = true;
            }else if(value == 400 && carrinho.includes("Lorem ipsum5") == true){
                car.style.color = '#691eff';
                isInCar = true;
            }else{
                car.style.color = 'gray';
            }

            if(value == 0 && favoritos.includes("Lorem ipsum1") == true){
                heart.style.color = '#691eff';
                heartSelected = true;
            }else if(value == 100 && favoritos.includes("Lorem ipsum2") == true){
                heart.style.color = '#691eff';
                heartSelected = true;
            }else if(value == 200 && favoritos.includes("Lorem ipsum3") == true){
                heart.style.color = '#691eff';
                heartSelected = true;
            }else if(value == 300 && favoritos.includes("Lorem ipsum4") == true){
                heart.style.color = '#691eff';
                heartSelected = true;
            }else if(value == 400 && favoritos.includes("Lorem ipsum5") == true){
                heart.style.color = '#691eff';
                heartSelected = true;
            }else{
                heart.style.color = 'gray';
            }
        }
    }
var heartSelected = false;
var isInCar = false;



function heart(){
    var heart = document.querySelector('.fa-heart');
    if(heartSelected == false){
    heart.style.color = '#691eff';
    heartSelected = true;
    }else{
        heart.style.color = 'gray';
        heartSelected = false;
    }
}

function car(){
    var car = document.querySelector('.fa-cart-shopping');
    if(isInCar == false){
    car.style.color = '#691eff';
    isInCar = true;
        if(value == 0){
            carrinho.push('Lorem ipsum1');
            // alert(carrinho);
        }else if(value == 100){
            carrinho.push('Lorem ipsum2');
            // alert(carrinho);
        }else if(value == 200){
            carrinho.push('Lorem ipsum3');
            // alert(carrinho);
        }else if(value == 300) {
            carrinho.push('Lorem ipsum4');
            // alert(carrinho);
        }else if(value == 400){
            carrinho.push('Lorem ipsum5');
            // alert(carrinho);
        }
    }else{
        car.style.color = 'gray';
        isInCar = false;
        if(value == 0){
            carrinho.splice(carrinho.indexOf("Lorem ipsum1"), 1);
            // alert(carrinho);
        }else if(value == 100){
            carrinho.splice(carrinho.indexOf("Lorem ipsum2"), 1);
            // alert(carrinho);
        }else if(value == 200){
            carrinho.splice(carrinho.indexOf("Lorem ipsum3"), 1);
            // alert(carrinho);
        }else if(value == 300) {
            carrinho.splice(carrinho.indexOf("Lorem ipsum4"), 1);
            // alert(carrinho);
        }else if(value == 400){
            carrinho.splice(carrinho.indexOf("Lorem ipsum5"), 1);
            // alert(carrinho);
        }
    }
}

function heart(){

    var heart = document.querySelector('.fa-heart');
    if(heartSelected == false){
    heart.style.color = '#691eff';
    heartSelected = true;
        if(value == 0){
            favoritos.push('Lorem ipsum1');
            // alert(favoritos);
        }else if(value == 100){
            favoritos.push('Lorem ipsum2');
            // alert(favoritos);
        }else if(value == 200){
            favoritos.push('Lorem ipsum3');
            // alert(favoritos);
        }else if(value == 300) {
            favoritos.push('Lorem ipsum4');
            // alert(favoritos);
        }else if(value == 400){
            favoritos.push('Lorem ipsum5');
            // alert(favoritos);
        }
    }else{
        heart.style.color = 'gray';
        heartSelected = false;
        if(value == 0){
            favoritos.splice(favoritos.indexOf("Lorem ipsum1"), 1);
            // alert(favoritos);
        }else if(value == 100){
            favoritos.splice(favoritos.indexOf("Lorem ipsum2"), 1);
            // alert(favoritos);
        }else if(value == 200){
            favoritos.splice(favoritos.indexOf("Lorem ipsum3"), 1);
            // alert(favoritos);
        }else if(value == 300) {
            favoritos.splice(favoritos.indexOf("Lorem ipsum4"), 1);
            // alert(favoritos);
        }else if(value == 400){
            favoritos.splice(favoritos.indexOf("Lorem ipsum5"), 1);
            // alert(favoritos);
        }
    }
}