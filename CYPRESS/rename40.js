const fs = require('fs');
oldFolder = "./cypress/screenshots";
newFolder = "./cypress/ss40";
try {
  fs.renameSync(oldFolder, newFolder);
  console.log('Carpeta renombrada exitosamente');
} catch (err) {
  console.error(err);
}
