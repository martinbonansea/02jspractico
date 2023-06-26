/*  10/29
se utiliza la función “document.querySelector” para seleccionar los elementos HTML creados anteriormente. 
Esta función nos permite seleccionar los elementos HTML según:
nombre de la etiqueta
nombre de la clase
ID del elemento
Existen otras funciones para leer HTML desde JavaScript como son:
getElementById
getElementsByClassName
getElementsByName
getElementsByTagName
Ejemplos:

getElementById();
//Obtiene el elemento con el ID "miParrafo"
const miParrafo = document.getElementById("miParrafo");
getElementsByClassName();
//Obtiene todos los elementos con la clase "miClase"
const elementosConClase = document.getElementsByClassName('miClase´);
getElementsByName();
//Obtiene todos los elementos con el nombre "miNombre"
const elementosConNombre = document.getElementByName("miNombre");
getElementByTagName();
// Obtiene todos los elementos con la etiqueta "p"
const elementosPTag = document.getElementByTagName("p");
querySelector();
// Obtiene el primer elemento que tenga la clase "miClase"
const miElemento = document.querySelector(".miClase");
querySelectorAll();
// Obtiene todos los elementos que tengan la clase "miClase"
const elementosConClase = document.querySelectorAll(".miClase");
*/




// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
h1.getAttribute('pantalla'); //leo el valor del atributo pantalla de la etiqueta H1
//una buena forma para cambiar los valores de mis atributos html
h1.setAttribute('pantalla', 'rojooooo'); //cambio el valor del atributo pantalla de la etiqueta H1

//estas funciones sob especificas para las clases
h1.classList.add('nuevoRojo')
h1.classList.remove('verde')
//h1.classList.toogle('verde')
//h1.classList.contains('verde') 

input.value = '456' //a los imputs de accede de manera directa

//como crear un elemento desde cero
const img = document.createElement('img'); //1 crear el elemento
img.setAttribute('src', 'https://static.platzi.com/media/platzi-isotipo@2x.png') //2 asignar el valor al atributo 2
pid.append(img); //3 inserto dentro del contenedor
