 const argv = require('./config.js/yargs').argv;
 var colors = require('colors');
 const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

 let comando = argv._[0];

 switch (comando) {
     case 'listar':
         listarTabla(argv.base, argv.limite);

         break;
     case 'crear':
         crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo ${archivo} a sido creado`.rainbow))
             .catch(e => console.log(e))
         break;
     default:
         console.log('comando no reconosido');
         break;

 }
 //const multiplicar = require('./multiplicar/multiplicar');

 //let base = 1;




 //  let parametro = argv[2];
 //  let base = parametro.split('=')[1];