var value = 0;
var carrinho = new Array();
var favoritos = new Array();
var listaProdutos = '';
var produtoAtualNome = new Array();

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
var alreadyOpen = false;
function verCarrinho(){
    var lista = document.querySelector('.carrinho');
    if(carOpen == false && alreadyOpen == false){
    alert(carrinho.length);
    lista.style.padding = '.5em 0 .5em .5em';
    for(var i = 0; i < carrinho.length; i++){
        listaProdutos += '<p onclick="deletarCarrinho('+ i + ')">' + carrinho[i] + '<i class="fa-solid fa-x"></i>'+'</p>';
        lista.innerHTML = listaProdutos;
    }
    alreadyOpen = true;
    carOpen = true;
    }else if(carOpen == true){
        lista.innerHTML = '';
        carOpen = false;
        lista.style.padding = '0';
    }else if(carOpen == false && alreadyOpen == true){
        lista.style.padding = '0 0 0 .8em';
        lista.innerHTML = listaProdutos;
        carOpen = true;
    }
}

function deletarCarrinho(number){
    if(number == 0){
        alert('Em desenvolvimento deletar item 1');
    }else if(number == 1){
        alert('Em desenvolvimento deletar item 2');
    }else if(number == 2){
        alert('Em desenvolvimento deletar item 3');
    }else if(number == 3){
        alert('Em desenvolvimento deletar item 4');
    }else if(number == 4){
        alert('Em desenvolvimento deletar item 5');
    }
}