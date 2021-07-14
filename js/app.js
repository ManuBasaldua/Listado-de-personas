class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido;
    }
}
const personas = [
    // new Persona('Manu', 'Basaldua'),
    // new Persona('Alan', 'Alzogaray')
];

function mostrarPersonas(){
    let text = '';
    for(let persona of personas){
        text += `<li>${persona.nombre} ${persona.apellido}</li>`
    }
    document.getElementById('personas').innerHTML = text;
}

function agregarPersonas(){
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre']
    const apellido = formulario['apellido'];
    if(nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }else{
        alert('Debes añadir información para agregar a la lista')
    }



}