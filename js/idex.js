/PROBLEMA 1/
function rectangulo (ancho, altura){
return ancho * altura
}
let area = rectangulo(10,5)
console.log(area);

/PROBLEMA 2/
function triangulo (base, altura){
return base * altura / 2
}    
let area2 = triangulo(10,5)
console.log(area2);

/PROBLEMA 3/
let LargoDelArray = ['Mystic','vaidown']
console.log(LargoDelArray.length);

/PROBLEMA 4/
function CantidadDeLetras (MysticCat){
return MysticCat.length
}
let MysticCat = "Mystic"
console.log(CantidadDeLetras(MysticCat));

/PROBLEMA 5/
function DolarHoy (pesos, cambio){
    return pesos / cambio  
}
let dolares = DolarHoy (10000, 1000)
console.log(dolares);

/PROBLEMA 6/
function precioFinal (Precio, IVA){
return Precio * IVA
}
let precios = precioFinal (10000, 1.21)
console.log(precios);

/PROBLEMA 7/
function mitad (numero, medio){
    return numero / medio
}
let miti = mitad (150, 2)
console.log(miti);

/PROBLEMAS DE OBJ LITERAL/

/PROBLEMAS 1/
let comidasFavoritas = ['Milanesa de carne', 'Pizza', 'Empanadas fritas']
let MisDatos = {
    nombre: 'Tomás',    
    apellido: 'Cataldi',
    dni: '46991461',
    comidasFavoritas,
    edad: 18,
   saludar: function(nombre, apellido, edad, comidasFavoritas) {
        return 'Hola mi nombre es ' + nombre + apellido + 'y tengo ' + edad + 'anos. Mi primer comida favorita es ' + comidasFavoritas 
    }
};
/PROBLEMAS 2/
console.log(MisDatos.saludar);  

/PROBLEMAS 3/
let auto = {
    marca: 'Audi',
    modelo: 'Style',
    anio: 2010,
    color: 'negro',
    Posicion: 0,
}
function avanzar (posicion, n){
    return posicion + n 
    }
    let avanzo = avanzar (0, 1)

 function retroceder (posicion, n){
    return posicion - n 
    }
    let retrocede = retroceder (0, 1)
console.log(avanzo);
console.log(retrocede);

/PROBLEMA 4/
let NuevoAuto = {
    marca: 'Jeep',
    modelo: 'Renegade',
    anio: 2014,
    color: 'gris',
    Posicion: 0,
}
function moverse (posicion, n){
    return posicion +=n;
};

let mover = moverse (0, 10)
let moveratras = moverse (5, -23)

console.log(moveratras);
console.log(mover);