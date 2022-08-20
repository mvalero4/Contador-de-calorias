let consumidos = [];

const boton = document.querySelector('.boton_busqueda');
const texto = document.querySelector('.texto_busqueda');
const lista = document.querySelector('.div-contenedor');
const alimento = document.querySelector('.alimento');
const resultadoResumen = document.querySelector('.resultado');
const resultadoNoObtenido = document.querySelector('.resultado_no_obtenido');
const botonReiniciar = document.querySelector('.boton_reiniciar');
const total = document.querySelector('.boton_total');
const contenedorSuma = document.querySelector('.contenedor_suma');

total.addEventListener('click', calcularTotal);

botonReiniciar.addEventListener('click', reiniciarContador);

boton.addEventListener('click', buscar);

function buscar() {
    const textoABuscar = texto.value.toUpperCase();
    let resultado = alimentos.find( alimento => alimento.nombre.toUpperCase() == textoABuscar );
    console.log(resultado);
    
    // const {nombre, calorias, carbohidrato, proteina, grasa} = alimentos;

    if (resultado) {
        const alimentoContenedor = `
            <section class="alimento">
            <h3 class="alimento_nombre">${resultado.nombre}</h3>
            <div class="alimento_contenedor_global">
            <div class="alimento-div"><label>Calorias<input class="alimento_calorias" value=${resultado.calorias}></input></label></div>
            <div class="alimento-div"><label>Carbohidratos<input class="alimento_carbohidrato" value=${resultado.carbohidrato}></input></label></div>
            <div class="alimento-div"><label>Proteínas<input class="alimento_proteina" value=${resultado.proteina}></input></label></div>
            <div class="alimento-div"><label>Grasas<input class="alimento_grasa" value=${resultado.grasa}></input></label></div>
            </div>
            </section>`

            lista.innerHTML += alimentoContenedor;

            resultadoResumen.innerHTML = `<b>${resultado.nombre}</b> tiene <b>${resultado.calorias}</b> calorias, <b>${resultado.carbohidrato}gr</b> de carbohidratos, <b>${resultado.proteina}gr</b> de proteína y <b>${resultado.grasa}gr</b> de grasa.`
    
        consumidos.push(resultado);
    } else{
        resultadoNoObtenido.innerHTML = 'Lo siento, ese alimento no está en la base de datos'
        setTimeout(() => {
            resultadoNoObtenido.innerHTML = '';
        }, 2000);
    }

    texto.value = "";
}

function calcularTotal(){
    const totalCalorias = consumidos.map(item => item.calorias).reduce((prev, curr) => prev + curr, 0);
    const totalCarbohidratos = consumidos.map(item => item.carbohidrato).reduce((prev, curr) => prev + curr, 0);
    const totalProteinas = consumidos.map(item => item.proteina).reduce((prev, curr) => prev + curr, 0);
    const totalGrasas = consumidos.map(item => item.grasa).reduce((prev, curr) => prev + curr, 0);

    // const {nombre, calorias, carbohidrato, proteina, grasa} = consumidos;

    const contenedorTotal = `
        <section class="total">
        <div class="total-div"><label>Calorías<input class="total_calorias" value=${totalCalorias}></input></label></div>
        <div class="total-div"><label>Carbohidratos<input class="total_carbohidrato" value=${totalCarbohidratos}></input></label></div>
        <div class="total-div"><label>Proteínas<input class="total_proteina" value=${totalProteinas}></input></label></div>
        <div class="total-div"><label>Grasas<input class="total_grasa" value=${totalGrasas}></input></label></div>
        </section>`

        contenedorSuma.innerHTML = contenedorTotal;
}

function reiniciarContador(){
    location.reload();
}
