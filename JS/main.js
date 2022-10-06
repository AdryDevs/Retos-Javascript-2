// 1. Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo. Pediremos al usuario que figura queremos calcular su área y según lo introducido pedirá los valores necesarios para calcular el área. Para ello has de crear un método por cada figura para calcular cada área, este devolverá un número real. Muestra el resultado por consola.
// Aquí te mostramos que necesita cada figura:
// • Circulo: (radio^2)*PI
// • Triangulo: (base * altura) / 2
// • Cuadrado: lado * lado

// let figura = prompt("Dime qué figura quieres para calcular el area");

// let area = 0;

// switch (figura) {
//     case "triangulo":
//         let base = parseInt(prompt("Introduce la base"));
//         let altura = parseInt(prompt("Introduce la altura"));
//         area = base * altura;
//         console.log("El area del triangulo es "+ area);
//         break;

//     case "circulo":
//         let radio = parseInt(prompt("Introduce el radio"));
//         area = (radio * radio) * Math.PI;
//         console.log("El area del círculo es "+ area);
//         break;

//     case "cuadrado":
//         let lado1 = parseInt(prompt("Introduce el tamaño del primer lado"));
//         let lado2 = parseInt(prompt("Introduce el tamaño del segundo lado"));
//         area = lado1 * lado2;
//         console.log("El area del cuadrado es "+ area);
//         break;

//     default:
//         console.log("No has introducido una figura correcta");
//         break;
// }


// 2. Crea una aplicación que nos genere una cantidad de números enteros aleatorios pasados por el usuario (prompt).
//  Crea un método donde pasamos como parámetros entre que números queremos que los genere, podemos pedirlas al usuario 
//  antes de generar los números. Este método devolverá un número entero aleatorio. Muestra estos números por consola.

// let cantidad = parseInt(prompt("Introduce la cantidad de números aleatorios"));

// const GenerateRandom = (min, max) => parseInt(math.random()* (max+1 - min)) + min

// for (let i = 0; i < cantidad; i++) {
//     num1 = parseInt(prompt("Introduce desde qué número quieres que se genere"));     // NO VAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!!
//     num2 = parseInt(prompt("Introduce hasta qué número quieres que se genere"));
//     console.log(parseInt((Math.random() * num2) + num1));
// }

// 3. Crea una aplicación que nos pida un número por prompt y con un método se lo pasamos por parámetro para que nos indique si es o 
// no un número primo, debe devolver true si es primo sino false. Un número primo es aquel solo puede dividirse entre 1 y sí mismo. 
// Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin embargo, 17 si es primo.

// let numero = parseInt(prompt("Introduce un número"));

// if (numero%2 !== 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

// 4. Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo realizara mediante un método al que le pasamos 
// el número como parámetro. Para calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por ejemplo, si introducimos 
// un 5, realizara esta operación 5*4*3*2*1=120.

// let factorial = parseInt(prompt("Introduce el factorial"));

// let total = 0;

// for (let i = 1; i < factorial; i++) {
//     factorial = factorial * i;
//     total = factorial * total;              //NO VAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
    
//     console.log(total); 
// }


// 5. Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo realizará un método al que le pasaremos el número como parámetro,
// devolverá un String con el numero convertido a binario. Para convertir un número decimal a binario, debemos dividir entre 2 el número y el resultado de esa 
// división se divide entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de cada división formara el número binario, de abajo a arriba.



// 6. Crea una aplicación que nos cuente el número de cifras de un número entero positivo (hay que controlarlo) pedido por prompt. Crea un método que realice esta
//  acción, pasando el número por parámetro devolverá el número de cifras.

// let numero = prompt("Introduce un número");

// console.log("El número de cifras del número introducido es "+ parseFloat(numero.length)); // eso de "hay que controlarlo" supongo que es que hay que ponerle un parseInt a la petición del número. Si lo hago me sale undefined al pedirle el length...


// 7. Crea una aplicación que nos convierta una cantidad de euros introducida por prompt a otra moneda, estas pueden ser a dólares, yenes o libras.
//  El método tendrá como parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no devolverá ningún valor, mostrará un mensaje indicando el cambio.
// El cambio de divisas es:
// • 0.86 libras es un 1 €
// • 1.28611 $ es un 1 €
// • 129.852 yenes es un 1 €


// let euros = parseInt(prompt("Cantidad de euros a convertir"));

// let moneda = prompt("¿A qué moneda quieres convertirlo?");

// let total = 0;

// switch (euros, moneda) {
//     case "libras":
//         total = euros * 0.86;
//         alert(total);
//         break;

//     case "dolares":
//         total = euros * 1.28611;                        //HE INTENTADO PONERLE UN CASE CON ISNAN para que cuando no ingrese un número en la cantidad de dinero salga un alert personalizado pero no funciona, sigue diciendo NaN el error.
//         alert(total);
//         break;
//     case "yenes":
//         total = euros * 129.852;
//         alert(total);
//         break;

//     default:
//         alert("No has introducido una moneda válida");
//         break;
// }


// 8. Crea un array de 10 posiciones de números con valores pedidos por prompt. Muestra por consola el índice y el valor al que corresponde. Haz dos métodos, uno para rellenar valores y otro para mostrar.

// let array = [];

// for (let i = 0; i < 10; i++) {
//     let num = parseInt(prompt("Introduce un número"));          // en dos métodos??? creo que se refiere a mapeo pero no me ha salido...
//     array.push(num);  
//     console.log(array);
// }




