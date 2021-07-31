const getPhoto = async () => {

    /** Crear una función asíncrona que contenga la URL en una variable. */
    const url = 'https://jsonplaceholder.typicode.com/photos';
    try {
        const response = await fetch(url); // Luego mediante el bloque de try/catch conectarse a la URL indicada anteriormente con el método fetch
        const photo = await response.json(); // utilizando a la vez await
        // console.log(photo);
        return photo;  // para que retorne directamente el valor de la promesa 
    } catch (err) {
        console.log(err);
    }
}

// console.log(getPhoto());    // Promesa en estado pendiente..
// getPhoto().then(resp => console.log(resp));



/** Utilizando métodos para iterar arreglos, como por ejemplo el forEach, solamente
mostrar los primeros 20 títulos de álbumes de acuerdo al número de id indicados por
la URL. */


getPhoto().then(resp => {
    let contador = 1, puntero = 1;
    resp.forEach(element => {
        if (element.albumId == puntero && contador <= 20) {    // imprime por consola --  los primeros 20 albunes por cada id album
            console.log(`Album : ${element.title} Numero : ${contador} de acuerdo al Id : ${element.albumId}`)
            contador++;
        } else {
            if (element.albumId != puntero) {
                contador = 1;
                puntero = element.albumId;
            }
        }
    });
});




/** Se debe crear otra función que retorne una promesa, la cual debe tardar tres (3)
segundos en resolver la promesa para retornar el mensaje: “Información Enviada”.
Esta promesa debe ser recibida por una función asíncrona, que mediante el uso del
await reciba directamente el valor y lo muestra por la consola del navegador web.
 * 

*/
const retornarMensaje = (mensaje) => {
    return new Promise((resolve) => {
    setTimeout(() => { resolve(`${mensaje}`) }, 3000) // El mensaje a retornar debe ser un string que indique: “Información Enviada”
    })
    }


/** 

 * Crear una función asíncrona que permita recibir el mensaje de la promesa creada en
el requerimiento cinco (5), de forma directa con await, para ser mostrado en la
consola del navegador, agregando el llamado a las dos funciones principales.
 * 
 */

const mensajePromesa = async (mensaje) => {
    const response = await retornarMensaje(mensaje);
    return response;
}

mensajePromesa("Informacion Enviada").then(resp => console.log(resp));   // “Información Enviada” se envia como string.

