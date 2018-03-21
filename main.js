const UMBRAL = 1; //Umbral que debe pasar la suma de la membresía para ser considerada

function cambiarVista(id_vista_actual, id_vista_nueva){
    // OCULTAMOS VISTA ACTUAL
    vista_actual = document.getElementById(id_vista_actual);
    vista_actual.classList.toggle(id_vista_actual);
    vista_actual.classList.toggle(id_vista_actual+"-oculto");
    // MOSTRAMOS VISTA NUEVA
    vista_nueva = document.getElementById(id_vista_nueva);
    vista_nueva.classList.toggle(id_vista_nueva);
    vista_nueva.classList.toggle(id_vista_nueva+"-oculto");
}

function actualizarValorSlider(slider){
    document.getElementById("val"+slider.id).innerText = "Valor: "+ (Number(slider.value / 10));
    slider.style = "background-size: "+slider.value+"% 2px"
} 
function actualizarValorSlider2(slider){
    document.getElementById("val2"+slider.id).innerText = "Valor: "+ (Number(slider.value / 10));
    slider.style = "background-size: "+slider.value+"% 2px"
} 
function start(){
    contenedor_sintomas = document.getElementById('contenedor-sintomas');
    contenedor_sintomas2 = document.getElementById('contenedor-sintomas2');
    html = '';
    html2 = '';
    for (var sintoma of sintomas){
        html += '<div class="sintomas"><h2 class="nombre-sintoma">'+sintoma.nombre+'</h2><span class="notification" id="val'+sintoma.nombre+'">Valor: 0</span><br><div class="range"><input type="range" min="0" max="100" value="0" class="range__input range__input--active range_sintomas" onchange="actualizarValorSlider(this)" oninput="actualizarValorSlider(this)" id="'+sintoma.nombre+'"></div><p class="izquierda">'+ sintoma.escala[0] + '</p><p class="derecha">' + sintoma.escala[1] + '</p></div>';   
        html2 += '<div class="sintomas"><h2 class="nombre-sintoma">'+sintoma.nombre+'</h2><span class="notification" id="val2'+sintoma.nombre+'">Valor: 0</span><br><div class="range"><input type="range" min="0" max="100" value="0" class="range__input range__input--active range_sintomas2" onchange="actualizarValorSlider(this)" oninput="actualizarValorSlider2(this)" id="'+sintoma.nombre+'"></div><p class="izquierda">'+ sintoma.escala[0] + '</p><p class="derecha">' + sintoma.escala[1] + '</p></div>';   
    }
    contenedor_sintomas.innerHTML = html;
    contenedor_sintomas2.innerHTML = html2;
    contenedor_enfermedades = document.getElementById('contenedor-enfermedades');
    html = '';
    for (var enfermedad of enfermedades){
        html+= '<li class="list-item list-item--tappable">'+
        '<div class="list-item__left"><label class="checkbox">' +
            '<input type="checkbox" id="'+enfermedad.nombre+'" class="checkbox__input" name="enfermedades">' +
            '<div class="checkbox__checkmark"></div></label></div>' +
        '<label for="'+enfermedad.nombre+'" class="list-item__center">'+enfermedad.nombre+'</label></li>';
    }
    contenedor_enfermedades.innerHTML = html;
}

function mostrar_diagnostico_general(){
    cambiarVista("inicio","diagnostico-general");
}

function mostrar_diagnostico_especifico(){
    cambiarVista("inicio","diagnostico-especifico");
}

function general_a_principal(){
    cambiarVista("diagnostico-general","inicio");
}

function especifico_a_principal(){
    cambiarVista("diagnostico-especifico","inicio");
}

function mostrar_resultados(resultados, enfermedades=undefined){
    res = document.getElementById("resultados");
    res.classList.toggle("resultados-oculto");
    res.classList.toggle("resultados");

    div_resultados = document.getElementById("info-resultado");
    msj = "";
    if (enfermedades){
        msj+="<p><b>Enfermedades seleccionadas:</b><p>";
        enfermedades.forEach(function(enfermedad){
            msj+="<p>"+enfermedad.nombre+"</p>";
        });
        msj+="<br>";
    }
    if (resultados.length == 1){
        msj+="<p>Esta es la enfermedad que mejor cuadra con tus síntomas:</p><br>";
        msj+="<h3>"+resultados[0].enfermedad.nombre+"</h3>";
        msj+="<p>"+resultados[0].enfermedad.descripcion+"</p><br>";
        msj+="<p><b>Recomendaciones:</b></p><p>"+resultados[0].enfermedad.recomendacion+"</p>";
    }else if(resultados.length>1){
        msj+="<p>Las siguientes enfermedades cuadran con tus síntomas:</p><br>";
        resultados.forEach(function(resultado) {
            msj+="<h3>"+resultado.enfermedad.nombre+"</h3>";
            msj+="<p>"+resultado.enfermedad.descripcion+"</p><br>";
            msj+="<p><b>Recomendaciones:</b></p><p>"+resultado.enfermedad.recomendacion+"</p><br><br>";
        });
    }else{
        msj+="Ninguna enfermedad cuadra con sus síntomas.";
    }
    div_resultados.innerHTML = msj;
}

function ocultar_resultados(){
    res = document.getElementById("resultados");
    res.classList.toggle("resultados-oculto");
    res.classList.toggle("resultados");
}

function evaluar_general(){
	inputs = document.getElementsByClassName('range_sintomas');
	sintomas_paciente = Array();
    resultados = Array();

    console.log(inputs);
    //Se obtienen los valores de los síntomas del usuario
    [...inputs].forEach(function(input) {
        sintomas_paciente.push(
            { 
                "nombre" : input.id, 
                "valor" : Number(input.value / 100)
            }
        );
    });
    enfermedades.forEach(function(enfermedad) {
        suma_de_membresia = 0;
        sintomas_paciente.forEach(function(sintoma){
            suma_de_membresia += Math.min(enfermedad.sintomas[sintoma.nombre], sintoma.valor) || 0;
            console.log(sintoma.nombre+" Sintoma "+sintoma.valor + " enf "+enfermedad.sintomas[sintoma.nombre]+" Suma "+suma_de_membresia);
        });
        console.log(enfermedad.nombre,+" "+suma_de_membresia);
        if (suma_de_membresia>UMBRAL){
            if (resultados[0] && resultados[0].membresia < suma_de_membresia){
                resultados = [
                    {
                        membresia: suma_de_membresia,
                        enfermedad: enfermedad
                    }
                ];
            }else if((resultados[0] && resultados[0].membresia == suma_de_membresia) || !resultados[0]){
                resultados.push(
                    {
                        membresia: suma_de_membresia,
                        enfermedad: enfermedad
                    }
                );
            }
        }
        console.log(resultados)
    });
    mostrar_resultados(resultados);
}

function evaluar_especifico(){
    inputs = document.getElementsByClassName('range_sintomas2');
    enfermedades_inputs = document.getElementsByClassName('checkbox__input');
    enfermedades_seleccionadas = Array();
    [...enfermedades_inputs].forEach(function(input) {
        if (input.checked){
            for (var enfermedad of enfermedades){
                console.log(enfermedad.nombre+ " " + input.id);
                if (enfermedad.nombre==input.id){
                    enfermedades_seleccionadas.push(enfermedad);
                    break;
                }
            }
        }
    });
    console.log(enfermedades_seleccionadas);

    if(enfermedades_seleccionadas.length<2){
        toast("Seleccione dos o más enfermedades de la lista para realizar un diagnóstico");
        return
    }
	sintomas_paciente = Array();
    resultados = Array();

    //Se obtienen los valores de los síntomas del usuario
    [...inputs].forEach(function(input) {
        sintomas_paciente.push(
            { 
                "nombre" : input.id, 
                "valor" : Number(input.value / 100)
            }
        );
    });
    
    enfermedades_seleccionadas.forEach(function(enfermedad) {
        suma_de_membresia = 0;
        sintomas_paciente.forEach(function(sintoma){
            suma_de_membresia += Math.min(enfermedad.sintomas[sintoma.nombre], sintoma.valor) || 0;
            console.log(sintoma.nombre+" Sintoma "+sintoma.valor + " enf "+enfermedad.sintomas[sintoma.nombre]+" Suma "+suma_de_membresia);
        });
        if (suma_de_membresia>UMBRAL){
            if (resultados[0] && resultados[0].membresia < suma_de_membresia){
                resultados = [
                    {
                        membresia: suma_de_membresia,
                        enfermedad: enfermedad
                    }
                ];
            }else if((resultados[0] && resultados[0].membresia == suma_de_membresia) || !resultados[0]){
                resultados.push(
                    {
                        membresia: suma_de_membresia,
                        enfermedad: enfermedad
                    }
                );
            }
        }
        console.log(resultados)
    });
    mostrar_resultados(resultados, enfermedades_seleccionadas);
}

function toast(mensaje){
    toast_element = document.getElementById("toast");
    toast_element.classList.toggle("toast");
    // toast_element.classList.toggle("toast-oculto");
    toast_element.children[0].innerHTML= "<b>ADVERTENCIA: </b>"+mensaje;
    setTimeout(function(){
        toast_element.classList.toggle("toast");
        // toast_element.classList.toggle("toast-oculto");
    },3500);
}