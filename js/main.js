(function () {
    /* ---------------------- Variables y Objetos Generales --------------------- */

    var app = document.getElementById('app');
    var inputCaracteres = document.getElementById('numero-caracter');

    var configuracion = {
        caracteres: parseInt(inputCaracteres.value),
        symbol: true,
        number: true,
        mayus: true,
        minus: true
    };

    var caracteres = {
        number: '0 1 2 3 4 5 6 7 8 9',
        symbol: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
        mayus: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
        minus: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
    };

    /* --------------------------------- Eventos -------------------------------- */
    //Evento para que la app haga un submit
    app.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    //Estamos llavamando el boton mas
    //Queremos agregar un event y que escuche cuando reviva un click y que ejecute
    app.elements.namedItem('btn-mas').addEventListener('click', function () {
        configuracion.caracteres++;
        inputCaracteres.value = configuracion.caracteres;
    });

    app.elements.namedItem('btn-menos').addEventListener('click', function () {
        //IF, si el numero llega a uno no puedes llegar a numeros negativos
        if (configuracion.caracteres > 1) {
            configuracion.caracteres--;
            inputCaracteres.value = configuracion.caracteres;
        }
    });

    app.elements.namedItem('btn-simbolos').addEventListener('click', function () {
        btnToggle(this);
        configuracion.symbol = !configuracion.symbol;
        //console.log(configuracion.symbol);
    });

    app.elements.namedItem('btn-numero').addEventListener('click', function () {
        btnToggle(this);
        configuracion.number = !configuracion.number;
        //console.log(configuracion.symbol);
    });

    app.elements.namedItem('btn-mayuscula').addEventListener('click', function () {
        btnToggle(this);
        configuracion.mayus = !configuracion.mayus;
        //console.log(configuracion.symbol);
    });

    app.elements.namedItem('btn-generar').addEventListener('click', function () {
        generarPassword();
    });

    app.elements.namedItem('input-password').addEventListener('click', function () {
        copiarPaswoord();
    });

    /* -------------------------------- Funciones ------------------------------- */
    //This sirve par aun boton ya clickeado

    function btnToggle(elemento) {
        elemento.classList.toggle('false');
        elemento.childNodes[1].classList.toggle('fa-check');
        elemento.childNodes[1].classList.toggle('fa-times');
    }

    function generarPassword() {
        var caracterFinales = '';
        var password = '';

        for (propiedad in configuracion) {
            if (configuracion[propiedad] == true) {
                caracterFinales += caracteres[propiedad] + ' ';
            }
        }
        console.log(caracterFinales);

        //trim hace que quite los espacios, al inicio y final de la cadena del texto
        caracterFinales = caracterFinales.trim();
        caracterFinales = caracterFinales.split(' ');
        //console.log(caracterFinales);

        for (var i = 0; i < configuracion.caracteres; i++) {
            password += caracterFinales[Math.floor(Math.random() * caracterFinales.length)];
        }
        app.elements.namedItem('input-password').value = password;
    }

    function copiarPaswoord(){
        app.elements.namedItem('input-password').select();
        document.execCommand('copy');
        document.getElementById('alerta-copi').classList.add('acti');
        setTimeout(function(){
            document.getElementById('alerta-copi').classList.remove('active');
        }, 2000);

    }


    generarPassword();

})();