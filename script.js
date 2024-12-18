window.onload = () => {
    // Crear tarjetas
    crearTarjetas(filosofos)

    // Crear handlers para los botones de control
    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click',crearNuevaTarjeta);

    //Añadir listeners al boton de ordenar tarjetas
    let botonesOrdenar= document.querySelectorAll('.sort-btn');
    botonesOrdenar[0].addEventListener('click',ordenarNombreAZ);
    botonesOrdenar[1].addEventListener('click',ordenarNombreZA);

    //Añadir listener al botón de guardar tarjetas
    let botonesGuardar= document.querySelector('.save-btn');
    botonesGuardar.addEventListener('click', guardarTarjetas);

    //Añadir listener al botón de cargar tarjetas
    let botonesCargar= document.querySelector('.load-btn');
    botonesCargar.addEventListener('click', cargarTarjetas);

    //Añadir listener al botón de duplicar tarjetas
    let botonesDuplicar= document.querySelector('.duplicate-btn');
    botonesDuplicar.addEventListener('click', duplicarTarjetas);

    //Añadir listener al botón de elimnar todas las tarjetas
    let botonesLimpiar= document.querySelector('.clean-btn');
    botonesLimpiar.addEventListener('click', limpiarPagina);

    //Añadir listener al botón de cambiar color texto
    let botonesCambiarColor= document.querySelector('#changeColor');
    botonesCambiarColor.addEventListener('input', changeTextColor);
    
}

function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');

        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);

        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        tarjeta.append(titulo);

        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');


        // Añadimos info del país a filaInfo
        let infoPais = document.createElement('div');
        infoPais.classList.add('info-pais');
        //creamos <img> para la bandera del país
        let bandera = document.createElement('img');
        bandera.src = filosofo.pais.bandera;
        bandera.alt = `Bandera de ${filosofo.pais.nombre}`;
        //añadimos nombre país
        let nombrePais = document.createElement('span');
        nombrePais.classList.add('pais');
        nombrePais.innerHTML = filosofo.pais.nombre;
        
        infoPais.append(bandera);
        infoPais.append(nombrePais);
        filaInfo.append(infoPais);
        

        // Añadimos info de la corriente a filaInfo
        let infoCorriente = document.createElement('div');
        infoCorriente.classList.add('info-corriente');

        let corrienteText = document.createElement('span');
        corrienteText.innerHTML='Corriente: ';
        
        let corriente = document.createElement('span');
        corriente.classList.add('corriente');
        corriente.innerHTML=filosofo.corriente;

        infoCorriente.append(corrienteText);
        infoCorriente.append(corriente);
        filaInfo.append(infoCorriente);

        // Añadimos info del arma a filaInfo
        let infoArma = document.createElement('div');
        infoArma.classList.add('info-arma');

        let armaText = document.createElement('span');
        armaText.innerHTML='Arma: ';
        
        let arma = document.createElement('span');
        arma.classList.add('arma');
        arma.innerHTML=filosofo.arma;

        infoArma.append(armaText);
        infoArma.append(arma);
        filaInfo.append(infoArma);


        // Añadimos fila de información (info-row) a card (tarjeta)
        tarjeta.append(filaInfo);


        // Añadimos caja de habilidades
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        
        // Añadimos una a una las habilidades
        for (let infoHabilidad of filosofo.habilidades) {
            // Añadimos una caja de habilidad
            let habilidad = document.createElement('div');
            habilidad.classList.add('skill');
            
            // Añadimos contenido caja de habilidad
            // 1.Icono de habilidad
            let iconSkill = document.createElement('img');
            iconSkill.src = "https://cdn-icons-png.flaticon.com/512/8235/8235236.png";
            iconSkill.alt = `Icono de ${infoHabilidad.habilidad}`;
            habilidad.append(iconSkill);
            
            // 2.Etiqueta de habilidad
            let skillName = document.createElement('span');
            skillName.classList.add('skill-name');
            skillName.innerHTML=infoHabilidad.habilidad;
            habilidad.append(skillName);
            
            // 2.Barra de habilidad
            let skillBar = document.createElement('div');
            skillBar.classList.add('skill-bar');

            let skillLevel = document.createElement('div');
            skillLevel.classList.add('level');
            skillLevel.style=`width: ${infoHabilidad.nivel*25}%;`;

            skillBar.append(skillLevel);
            habilidad.append(skillBar);

            // Anñadir nueva habilidad a habilidades.
            habilidades.append(habilidad);
        }
        
        tarjeta.append(habilidades);

        // Añadimos botón eliminar tarjeta
        let botonEliminar = document.createElement('div');
        botonEliminar.innerHTML='&#x2716';
        botonEliminar.classList.add('botonEliminar');
        botonEliminar.addEventListener('click', eliminarTarjeta);
        tarjeta.append(botonEliminar);

        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    })
}

function eliminarTarjeta() {
   this.parentNode.remove();
}

function ordenarNombreAZ() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    // Completar codi
    tarjetas.forEach(item =>{
        item.remove();
    });
  

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    // Completar codi
    let contenedor = document.querySelector('.cards-container');
    tarjetasOrdenadas.forEach(item =>{
        contenedor.append(item);
    })

    

}

function ordenarNombreZA() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenInverso = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre2.localeCompare(nombre1);
    });


    // Eliminar totes les targetes de l'array 'tarjeta'
    // Completar codi
    tarjetas.forEach(item =>{
        item.remove();
    });
  

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    // Completar codi
    let contenedor = document.querySelector('.cards-container');
    tarjetasOrdenInverso.forEach(item =>{
        contenedor.append(item);
    })
}

function crearNuevaTarjeta(event) {
    event.preventDefault();
    let nuevoFilosofo = {};
    nuevoFilosofo.nombre = document.querySelector('.create-card-form .nombre').value;
    nuevoFilosofo.imagen = document.querySelector('.create-card-form .foto').value;
    nuevoFilosofo.pais = {};
    nuevoFilosofo.pais.nombre = document.querySelector('.create-card-form .pais').value;
    
    // Completar la función
    nuevoFilosofo.pais.bandera = document.querySelector('.create-card-form .bandera').value;
    nuevoFilosofo.corriente = document.querySelector('.create-card-form .corriente').value;
    nuevoFilosofo.arma= document.querySelector('.create-card-form .arma').value;
    nuevoFilosofo.habilidades = [];
    let cardFormSkills = document.querySelectorAll('.create-card-form .skills');

    cardFormSkills.forEach((skill, index) => {
        let habilidad = {};
        habilidad.habilidad=listahabilidades[index];
        habilidad.nivel=skill.value;
        nuevoFilosofo.habilidades.push(habilidad);      
    });
    
    let nuevosFilosofos=[];
    nuevosFilosofos.push(nuevoFilosofo);
    crearTarjetas(nuevosFilosofos);
}

function parsearTarjetas(tarjetas){
    let filosofosParseados = [];
    for (let tarjeta of tarjetas){
        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;    
        filosofo.imagen = tarjeta.querySelector('.photo').src;
        filosofo.pais = {};
        // Completar funció
        filosofo.pais.nombre=tarjeta.querySelector('.pais').innerHTML;
        let infoPais=tarjeta.querySelectorAll('.info-pais')[0];
        filosofo.pais.bandera=infoPais.querySelector('img').src;
        filosofo.corriente=tarjeta.querySelectorAll('.corriente')[0].innerHTML;
        filosofo.arma=tarjeta.querySelector('.arma').innerHTML;

        filosofo.habilidades=[];    

        let habilidadesParaGuardar = tarjeta.querySelectorAll('.skill');
        for (let habilidadParaGuardar of habilidadesParaGuardar){
            let habilidad = {};
            // Completar funció
            habilidad.habilidad=habilidadParaGuardar.querySelector('.skill-name').innerHTML;
            
            //extraemos el width de la barra habilidad)
            let skillBar=habilidadParaGuardar.querySelector('.skill-bar');
            let level=skillBar.querySelector('.level');
            let nivel =level.style.cssText;
            /*nos lo devuelve en tipo texto width: X%; tenemos que obtener solo el número
            y dividirlo entre 25 para que sea un número del 1-4 igual que en la entrada*/
            nivel=nivel.split(' ');
            nivel=nivel[1];
            nivel=nivel.split('%');
            nivel=nivel[0]/25;
            
            habilidad.nivel=nivel;
            
            filosofo.habilidades.push(habilidad);
        }

        filosofosParseados.push(filosofo);
    }
    return filosofosParseados;
}


function guardarTarjetas(){
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas',JSON.stringify(parsearTarjetas(tarjetas)));
}


function cargarTarjetas() {
    filosofosRecuperados=JSON.parse(localStorage.getItem('tarjetas'));
    crearTarjetas(filosofosRecuperados);
}

//Funcionalidad extra, duplicar las tarjetas
function duplicarTarjetas(){
    guardarTarjetas();
    tarjetas=JSON.parse(localStorage.getItem('tarjetas'));
    crearTarjetas(tarjetas);
}

//Funcionalidad extra, eliminar todas las tarjetas
function limpiarPagina(){
    let eliminarTarjetas = Array.from(document.querySelectorAll('.card'));
    eliminarTarjetas.forEach(item =>{
        item.remove();
    });
    
}

//Funcionalidad extra, cambiar color texto tarjetas
function changeTextColor(){
    let textColor = this.value;
    let tarjetas = document.querySelectorAll('.card'); 

    tarjetas.forEach((tarjeta) => {
        tarjeta.style.color = textColor;
    });
}

const listahabilidades = ['Sabiduría','Oratoria','Lógica','Innovación'];

const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]