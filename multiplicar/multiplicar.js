//requireds
const fs = require('fs');
var colors = require('colors');
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('No es un numero de base');
            return;
        };

        let contenido = '';

        for (let i = 1; i <= limite; i++) {

            contenido += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/Tabla-${base}-al-${limite}.txt`, contenido, (err) => {
            if (err) reject(err);
            else resolve(`Tabla-${base}-al-${limite}.txt`);

        });
    })
}

let listarTabla = (base, limite = 10) => {
    console.log('=================================='.green);
    console.log(`========Tala del ${base}========`.green);
    console.log('=================================='.green);

    for (let ind = 1; ind <= limite; ind++) {

        console.log(`${base} * ${ind} = ${base*ind}`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}