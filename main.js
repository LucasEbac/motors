$(document).ready(function() {
    $('#carousel-imagem').slick()({
    autoplay: true,
});

$('.menu-hamburguer').click(function(){
    $('nav').slideToggle();
})

$('#telefone').mask('(00)0000-00000')

$('form').validate({
    rules: {
        nome: {
        required: true,
        nome:true
       
    },
    email:{
        required: true,
        email: true

    },
    telefone:{
        required: true
       
    }

    },
    messages: {
        nome: 'Por favor, insira seu nome'
    },
    submitHandler: function(form) {
        console.log(form)
    },
    invalidHandler: function(evento, validador) {
        let camposIncorretos = validador.numberOfinvalide();
        if (camposIncorretos) {
            alert(`Existem ${camposIncorretos} campos incoretos`)
        }
    }

    })
})