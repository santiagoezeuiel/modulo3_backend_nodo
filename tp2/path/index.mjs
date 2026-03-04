import path from 'path';

// Definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';

// obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

// obtener el nombre del archivo sin la extensión
const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo sin extensión:', baseName);

// obtener la extención del archivo
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

//crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Ruta unida:', newPath);

