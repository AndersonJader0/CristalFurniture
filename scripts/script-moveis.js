var value = 0;
var carrinho = new Array();
var favoritos = new Array();
var listaProdutos = '';
var produtoAtualNome = new Array();
var valueQuantity = 0;

function change(direction){
    var documento = document.querySelector('.container-interno');
    var car = document.querySelector('.car');
    var heart = document.querySelector('.heart');
    var description = document.querySelector('.description');
    var points = document.querySelector('.points');

    if(direction == 'direita' && value < 399){
        value += 100;
        var translate = 'translateX(-' + value + 'vw)';
        documento.style.transform = translate;

        //Nome do móvel no carrossel
        if(value == 0){
            description.innerHTML = 'Sofa R$359,99';
        }else if(value == 100){
            description.innerHTML = 'Bed R$259,99';
            points.innerHTML = '4.8';
        }else if(value == 200){
            description.innerHTML = 'Shelv R$159,99';
            points.innerHTML = '4.5';
            document.querySelector('.star5').style.display = 'none';
            document.querySelector('.star6').style.display = 'block';
        }else if(value == 300){
            description.innerHTML = 'Sofa R$559,99';
            points.innerHTML = '4.7';
            document.querySelector('.star5').style.display = 'block';
            document.querySelector('.star6').style.display = 'none';
        }else if(value == 400){
            description.innerHTML = 'Shelv R$459,99';
            points.innerHTML = '4.6';
            document.querySelector('.star5').style.display = 'none';
            document.querySelector('.star6').style.display = 'block';
        }

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

            //Nome do móvel no carrosel
            if(value == 0){
                description.innerHTML = 'Sofa R$359,99';
                points.innerHTML = '4.7';
            }else if(value == 100){
                description.innerHTML = 'Bed R$259,99';
                points.innerHTML = '4.8';
                document.querySelector('.star5').style.display = 'block';
                document.querySelector('.star6').style.display = 'none';
            }else if(value == 200){
                description.innerHTML = 'Shelv R$159,99';
                points.innerHTML = '4.5';
                document.querySelector('.star5').style.display = 'none';
                document.querySelector('.star6').style.display = 'block';
            }else if(value == 300){
                description.innerHTML = 'Sofa R$559,99';
                points.innerHTML = '4.7';
                document.querySelector('.star5').style.display = 'inline-block';
                document.querySelector('.star6').style.display = 'none';
            }else if(value == 400){
                description.innerHTML = 'Shelv R$459,99';
                points.innerHTML = '4.6';
            }

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

function car(){
    var car = document.querySelector('.car');
    var quantity = document.querySelector('.quantity');

    /* PARTE DO CARRINHO */
    //imgs
    var img1 = document.querySelector('.img1');
    var img2 = document.querySelector('.img2');
    var img3 = document.querySelector('.img3');
    var img4 = document.querySelector('.img4');
    var img5 = document.querySelector('.img5');

    //textos
    var p1 = document.querySelector('.p1');
    var p2 = document.querySelector('.p2');
    var p3 = document.querySelector('.p3');
    var p4 = document.querySelector('.p4');
    var p5 = document.querySelector('.p5');



    if(isInCar == false){
    car.style.color = '#691eff';
    isInCar = true;
        if(value == 0){
            carrinho.push('Lorem ipsum1');
            valueQuantity += 1;
            quantity.innerHTML = valueQuantity;
            img1.src = '/imgs/sofa.jpg';
            img1.style.width = "5em";
            img1.style.height = "5em";
            p1.innerHTML = 'Lorem ipsum1';
            // alert(carrinho);
        }else if(value == 100){
            carrinho.push('Lorem ipsum2');
            valueQuantity += 1;
            quantity.innerHTML = valueQuantity;
            img2.src = '/imgs/bed.jpg';
            img2.style.width = "5em";
            img2.style.height = "5em";
            p2.innerHTML = 'Lorem ipsum2';
            // alert(carrinho);
        }else if(value == 200){
            carrinho.push('Lorem ipsum3');
            valueQuantity += 1;
            quantity.innerHTML = valueQuantity;
            img3.src = '/imgs/table.jpg';
            img3.style.width = "5em";
            img3.style.height = "5em";
            p3.innerHTML = 'Lorem ipsum3';
            // alert(carrinho);
        }else if(value == 300) {
            carrinho.push('Lorem ipsum4');
            valueQuantity += 1;
            quantity.innerHTML = valueQuantity;
            img4.src = '/imgs/furniture.jpg';
            img4.style.width = "5em";
            img4.style.height = "5em";
            p4.innerHTML = 'Lorem ipsum4';
            // alert(carrinho);
        }else if(value == 400){
            carrinho.push('Lorem ipsum5');
            valueQuantity += 1;
            quantity.innerHTML = valueQuantity;
            img5.src = '/imgs/conjunto.jpg';
            img5.style.width = "5em";
            img5.style.height = "5em";
            p5.innerHTML = 'Lorem ipsum5';
            // alert(carrinho);
        }
    }else{
        car.style.color = 'gray';
        isInCar = false;
        if(value == 0){
            carrinho.splice(carrinho.indexOf("Lorem ipsum1"), 1);
            valueQuantity -= 1;
            quantity.innerHTML = valueQuantity;
            img1.src = '';
            img1.style.height = "0em";
            p1.innerHTML = '';
            // alert(carrinho);
        }else if(value == 100){
            carrinho.splice(carrinho.indexOf("Lorem ipsum2"), 1);
            valueQuantity -= 1;
            quantity.innerHTML = valueQuantity;
            img2.src = '';
            img2.style.height = "0em";
            p2.innerHTML = '';
            // alert(carrinho);
        }else if(value == 200){
            carrinho.splice(carrinho.indexOf("Lorem ipsum3"), 1);
            valueQuantity -= 1;
            quantity.innerHTML = valueQuantity;
            img3.src = '';
            img3.style.height = "0em";
            p3.innerHTML = '';
            // alert(carrinho);
        }else if(value == 300) {
            carrinho.splice(carrinho.indexOf("Lorem ipsum4"), 1);
            valueQuantity -= 1;
            quantity.innerHTML = valueQuantity;
            img4.src = '';
            img4.style.height = "0em";
            p4.innerHTML = '';
            // alert(carrinho);
        }else if(value == 400){
            carrinho.splice(carrinho.indexOf("Lorem ipsum5"), 1);
            valueQuantity -= 1;
            quantity.innerHTML = valueQuantity;
            img5.src = '';
            img5.style.height = "0em";
            p5.innerHTML = '';
            // alert(carrinho);
        }
    }
}

function heart(){
    var heart = document.querySelector('.heart');
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



//VER CARRINHO
var carOpen = false;

function verCarrinho(){
    var lista = document.querySelector('.carrinho');
    if(carOpen == false && isOpen == false){
        lista.style.width = "50%";
        carOpen = true;
    }else if(carOpen == true){
        lista.style.width = '0';
        carOpen = false;
    }
}

var isOpen = false;

function openTeste(){
    var menuLeft = document.querySelector('.m-left');
    var menuX = document.querySelector('.fa-xmark');
    var sandwich = document.querySelector('.fa-bars');

    if(isOpen == false && carOpen == false){
    menuLeft.style.height = "86vh";
    menuX.style.display = 'flex';
    sandwich.style.display = 'none';
    isOpen = true;
    }else{
        menuLeft.style.height = "0";
        isOpen = false;
        menuX.style.display = 'none';
        sandwich.style.display = 'flex';
    }
}