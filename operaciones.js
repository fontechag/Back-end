const Persona = {
    nombre: "Juan",
};

function getNombre()
{
    return Persona.nombre;
}

function suma (a, b)
{
    return a + b;
}

console.log(suma(3,4));

exports.getNombre = getNombre;
exports.suma = suma;
