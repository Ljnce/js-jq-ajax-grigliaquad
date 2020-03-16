//Creo quadrati con numeri al loro interno
var quadrati = {
    quadrato:[
        {
            numero:1
        },
        {
            numero:2
        },
        {
            numero:3
        },
        {
            numero:4
        },
        {
            numero:5
        },
        {
            numero:6
        },
        {
            numero:1
        },
        {
            numero:2
        },
        {
            numero:3
        },
        {
            numero:4
        },
        {
            numero:5
        },
        {
            numero:6
        },
        {
            numero:1
        },
        {
            numero:2
        },
        {
            numero:3
        },
        {
            numero:4
        },
        {
            numero:5
        },
        {
            numero:6
        },
        {
            numero:1
        },
        {
            numero:2
        },
        {
            numero:3
        },
        {
            numero:4
        },
        {
            numero:5
        },
        {
            numero:6
        },
        {
            numero:1
        },
        {
            numero:2
        },
        {
            numero:3
        },
        {
            numero:4
        },
        {
            numero:5
        },
        {
            numero:6
        },
        {
            numero:1
        },
        {
            numero:2
        },
        {
            numero:3
        },
        {
            numero:4
        },
        {
            numero:5
        },
        {
            numero:6
        }
    ]
};

//Template
var source = $("#template-quadrati").html();
var template = Handlebars.compile(source);

//Copio e incollo
var lista = template(quadrati);
$('.sfondo .lista').append(lista);


//Creo numeri generaRandom
function generaRandom(min, max){
    return Math.floor(Math.random()* max - min + 1) * min;
};


//Richiesta ajax al click sul quadrato mi compare un numero
$('.lista').on('click', '.quadrato', function(){
    var questoQuadrato = $(this);

    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/int',
        method: 'GET',
        success: function(numero){
            var numeroRandom = numero.response; // ho il numeroPC
            console.log(numero.response);
            questoQuadrato.text(numeroRandom);
            corrispondente(questoQuadrato, numeroRandom)
        },
        error: function(){
            alert('errore')
        }
    });
});

function corrispondente(questoQuadrato, num){
    if (num <= 5) {

            questoQuadrato.addClass('green');

    } else if (num > 5) {

            questoQuadrato.addClass('yellow');

    }
    }


if (true) {

}else {

}
