// Ejercicio 1
let edad = 22;
let diasDelAno = 365;
const horasPorDia = 24;
let horasTotales = (edad*diasDelAno)*horasPorDia
console.log(
    "esta persona ha vivido "+(edad*diasDelAno)*horasPorDia+" horas"
);

// Ejercicio 2 
let horasPorDia2 = 24;
let minutosPorHora = 60;
let segundosPorMinuto = 60;
console.log(
    "hay en un dia "+ (horasPorDia*minutosPorHora)*segundosPorMinuto + " segundos"
);

// Ejercicio 3
 let producto = 5;
 let incremento = ++producto;
 let productoConIncrementoMultiplicado = incremento*3;
 console.log(producto);
 console.log(
    productoConIncrementoMultiplicado

 );

 // Ejercicio 4
 let dia1 = 1;
 const horas3 = 24;
 const minutosPorHora1 = 60;
 const segundos = 60;

 ++dia1

 let horas4 = dia1*horas3;
 let minutos = horas4*minutosPorHora1;
 let segundos1 = minutos*segundos;
 
 

 console.log( " dias: " + dia1 + ' horas: ' + horas4 + " minutos: " + minutos + " segundos: " + segundos1

 );

 // ejercicio 5
 const capital = 125000;
 let tiempo = 12;
 let tasa = 12;
 tiempo++
let interes = (capital*tasa)*tiempo/100;
console.log(
    "capital: " + capital + " tiempo: " + tiempo + '  tasa: '+ tasa + ' interes: '+ interes

);

//Ejercicio 6
let ancho = 10;
let alto = 30;
++ancho;
alto--;
let area = ancho*alto;
let perimetro = (alto*2)+(ancho*2);
console.log(" area: " + area + " perimetro: " + perimetro );

//Ejercicio 7
let edad1 = 34;
++edad1
edad1++
let esMayor = edad1>=18;
console.log("edad actual: " + edad1+"." + " mayor de edad: " + esMayor);

// Ejercicio 8 
let horas5 = 8;
const minutos1 = 60;
const segundos2 = 60;
let nuevahoraMasUno = (++horas5*minutos1)*segundos2;
console.log(
    "horas: " + horas5+"." + "segundos: " + nuevahoraMasUno
);
horas5++
let nuevahoraMasDos = (horas5*minutos1)*segundos2;
console.log(
    "horas: " + horas5+". "+ "segundos: " + nuevahoraMasDos
); 

//Ejercicio 9
let calificacion1 = 8;
let calificacion2 = 9;
let calificacion3 = 7;
--calificacion1
calificacion2++
 let promedio = (calificacion1+calificacion2+calificacion3)/3;
console.log(
    'Promedio: '+ promedio
);

//Ejercicio 10
let productos_vendido_en_tienda_1 = 345;
let productos_vendido_en_tienda_2 = 123;
let productos_vendido_en_tienda_3 = 90;
++productos_vendido_en_tienda_1
productos_vendido_en_tienda_2--
let totalVentas = (productos_vendido_en_tienda_1+productos_vendido_en_tienda_2+productos_vendido_en_tienda_3)
console.log(
    'total productos vendidos entre las tres tiendas: ' + totalVentas
);

//ejercicio 11
let paginas_leidas_libro_1 = 4;
let paginas_leidas_libro_2 = 30;
let paginas_leidas_libro_3 = 45;
paginas_leidas_libro_2--
++paginas_leidas_libro_1 
 let total_leido = paginas_leidas_libro_1 + paginas_leidas_libro_2 + paginas_leidas_libro_3
console.log(
    "total paginas leidas: " + total_leido
);

//ejercicio 12 
let tiempotrabajado = 1
let salarioBruto = 8230;
let descuento = 15;
tiempotrabajado++
let acumulado = (tiempotrabajado*salarioBruto);
let salarioNeto = acumulado-((acumulado*15)/100);
console.log(
    "el salario neto es: "+ salarioNeto
);

//ejercicio 13 
const precioOriginal = 445;
let descuento1 = 10;
let impuesto = 10;
impuesto++
descuento1--
let precioFinal = precioOriginal+((precioOriginal*impuesto)/100)-((precioOriginal*descuento1)/100);
console.log("el precio final es: "+ precioFinal + ' con descuento e impuestos incluidos');

//Ejercicio 14
let cantidadProducto1 = 34;
let cantidadProducto2 = 23;
let cantidadProducto3 = 67;
++cantidadProducto1
cantidadProducto1++
cantidadProducto2--
let totalStockProductos = cantidadProducto1+cantidadProducto2+cantidadProducto3;
console.log(
    "la cantidad total de productos es: " + totalStockProductos
);

//ejercicio 16
let distanciaRecorridaDiaUno = 5;
let distanciaRecorridaDia2 = 8;
let distanciaRecorridaDia3 = 6;
++distanciaRecorridaDiaUno;
distanciaRecorridaDiaUno++;
distanciaRecorridaDia2--;
let distanciaTotalRecorrida = distanciaRecorridaDiaUno+distanciaRecorridaDia2+distanciaRecorridaDia3;
console.log("la distancia total recorrida es; " + distanciaTotalRecorrida);

//ejercicio 17
let saldo = 87002;
let deposito = 4000;
let retiro = 12000;
saldo += deposito;
saldo -= retiro;
console.log("el saldo es: " + saldo);

// ejercicio 18
let puntajeNivel1 = 100;
let puntajeNivel2 = 90;
let puntajeNivel3 = 75;
const puntajeExtraNivelEspecial = 10;
++puntajeNivel1
puntajeNivel2--
puntajeNivel2 += puntajeExtraNivelEspecial
let puntajeTotal = puntajeNivel1+puntajeNivel2+puntajeNivel3
console.log(" el puntaje total es: " + puntajeTotal);

 // ejercicio 19
let pagoPorHora = 50;
let horastrabajadasPorDia = 8;
let diasTrabajadosPorSemana = 6;
let horastrabajadasSemana = horastrabajadasPorDia*diasTrabajadosPorSemana;
horastrabajadasSemana++;
let horastrabajadossemana2 = horastrabajadasSemana;
--horastrabajadossemana2;
let horastrabajadossemana3 = horastrabajadasSemana;
let totaldehorastrabajadas = horastrabajadasSemana+horastrabajadossemana2+horastrabajadossemana3;
let totalpago = totaldehorastrabajadas*pagoPorHora;
console.log(
    "el total de horas trabajadas son: " + totaldehorastrabajadas + " y el pago total es: " + totalpago
);

// otra solucion del ejercicio 19
let pagoporhora = 50;
let horaspordia = 8;
let diasporsemana = 6;
let horasporsemana = horaspordia*diasporsemana;
let horastrabajadassemana1 = horasporsemana;
horastrabajadassemana1++
let horastrabajadassemana2 = horasporsemana;
horastrabajadassemana2--
let horastrabajadasSemana3 = horasporsemana;
let horastotalestrabajadas = horastrabajadassemana1+horastrabajadassemana2+horastrabajadasSemana3
let pagototal = horastotalestrabajadas*pagoPorHora;
console.log(
    "el pago total es: " + pagototal + ' y el tiempo total trabajado fue de: ' + horastotalestrabajadas + " horas"
);

// ejercicio 20
let  distanciaDiaria = 4;
 let diasEntrenamiento = 7;
let distanciaSemana = distanciaDiaria*diasEntrenamiento;
distanciaSemana++;
let distanciasemana2 = distanciaSemana;
distanciaSemana--;
let distanciaSemana3 = distanciaSemana;
let distanciaTotalRecorrida1 = distanciaSemana+distanciasemana2+distanciaSemana3; 
console.log(
    'La distancia total recorrida fue de: ' + distanciaTotalRecorrida1 + " km"
);

//Ejercicio 21
let alturaDeLaPlanta = 25;
let crecimientoDiario = 2;
let decrecimientoDirario = 1;
let alturaDia1 = alturaDeLaPlanta;
++alturaDia1;
++alturaDia1;
--alturaDia1;
let alturaDia2 = alturaDia1;
++alturaDia2;
++alturaDia2;
--alturaDia2;
let alturaDia3 = alturaDia2;
++alturaDia3;
++alturaDia3;
--alturaDia3;
let alturaFinal = alturaDia3;
console.log('La altura final es: ' + alturaFinal);



















 
 
 

