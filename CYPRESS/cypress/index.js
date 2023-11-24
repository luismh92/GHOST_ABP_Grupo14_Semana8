const compareImages = require("resemblejs/compareImages")
const config = require("./configReporte.json");
const fs = require('fs');
const path = require('path');


let datetime = new Date().toISOString().replace(/:/g, ".");

const logoPath = "milogo.png";

const teamMembers = [
  { name: "Bryan Camilo Castro", email: "bc.castro@uniandes.edu.co" },
  { name: "Luis Alberto Mendoza Hernández", email: "l.mendozah@uniandes.edu.co" },
  { name: "Hernán David Martínez Domínguez", email: "hd.martinezd1@uniandes.edu.co" }
];

let resultInfo = {};

async function compareScreenshots(pngFiles10, pngFiles40, ss10Dir, ss40Dir) {
  for (let i = 0; i < pngFiles10.length; i++) {
    const file10 = pngFiles10[i];
    const file40 = pngFiles40[i];
    const imgPath10 = path.join(ss10Dir, file10);
    const imgPath40 = path.join(ss40Dir, file40);

    if (fs.existsSync(imgPath10) && fs.existsSync(imgPath40)) {
      const data = await compareImages(
        fs.readFileSync(imgPath10),
        fs.readFileSync(imgPath40),
        config.options
      );

      resultInfo[file10] = {
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime
      };

      const resultFilePath = `./results/${datetime}/compare-${file10}`;
      const resultDir = path.dirname(resultFilePath);
      if (!fs.existsSync(resultDir)) {
        fs.mkdirSync(resultDir, { recursive: true });
      }

      fs.writeFileSync(resultFilePath, data.getBuffer());
    }
  }
  console.log(resultInfo)
  const resultsDir = `./results/${datetime}`;
  fs.writeFileSync(`${resultsDir}/report.html`, createReport(datetime, resultInfo, teamMembers, logoPath));
  fs.copyFileSync('./index.css', `${resultsDir}/index.css`);
  fs.copyFileSync('./milogo.png', `${resultsDir}/milogo.png`);

  console.log('------------------------------------------------------------------------------------');
  console.log("Execution finished. Check the report under the results folder");
  return resultInfo;
}

function getPngFilesSync(directory, subFolders) {
  let pngFiles = [];
  for (const subFolder of subFolders) {
    const fullPath = path.join(directory, subFolder);
    try {
      const files = fs.readdirSync(fullPath);
      const filteredFiles = files
        .filter(file => path.extname(file).toLowerCase() === '.png')
        .map(file => path.join(subFolder, file));

      pngFiles = pngFiles.concat(filteredFiles);
    } catch (err) {
      console.log(`Error al leer el directorio ${subFolder}:`, err);
    }
  }
  return pngFiles;
}
const screenshotsDir40 = './ss40';
const subFolders40 = ['1-iniciar-sesion.feature', 'crear-miembro.feature'];
const pngFiles40 = getPngFilesSync(screenshotsDir40, subFolders40);
//console.log(pngFiles40);

console.log('------------------------------------------------------------------------------------');

const screenshotsDir10 = './ss10';
const subFolders10 = ['1-iniciar-sesion.feature', 'crear-miembro.feature'];
const pngFiles10 = getPngFilesSync(screenshotsDir10, subFolders10);
//console.log(pngFiles10);

(async () => {
  const results = await compareScreenshots(pngFiles10, pngFiles40, 'ss10', 'ss40');
  console.log(results);
})();

function browser(info, imageName) {
  return `
    <div class="container mt-4">
        <div class="card">
          <div class="card-body">
            <!-- Primera fila con dos tarjetas -->
            <div class="row">
              <div class="col-md-6 mb-4">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <h5 class="card-title">Before</h5>
                    <img class="card-img-bottom mx-auto d-block" src="../../ss40/${imageName}" alt="Before image"
                      style="width: auto; max-width: 100%; height: auto;">
                    <!-- Botón para abrir modal 'Before' -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#beforeModal">view</button>
                  </div>
                </div>
              </div>
              <!-- Modal 'Before' -->
              <div class="modal fade" id="beforeModal" tabindex="-1" aria-labelledby="beforeModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <img src="../../ss40/${imageName}" alt="Before image" style="width: 100%;">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Tarjeta 'After' -->
              <div class="col-md-6 mb-4">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <h5 class="card-title">After</h5>
                    <img class="card-img-bottom mx-auto d-block" src="../../ss10/${imageName}" alt="After image"
                      style="width: auto; max-width: 100%; height: auto;">
                    <!-- Botón para abrir modal 'After' -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#afterModal">view</button>
                  </div>
                </div>
              </div>
              <!-- Modal 'After' -->
              <div class="modal fade" id="afterModal" tabindex="-1" aria-labelledby="afterModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <img src="../../ss10/${imageName}" alt="After image" style="width: 100%;">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Segunda fila con dos tarjetas -->
            <div class="row">
              <!-- Tarjeta 'Diff' -->
              <div class="col-md-6 mb-4">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <h5 class="card-title">Diff</h5>
                    <img src="./compare-${imageName}"class="card-img-bottom mx-auto d-block"  alt="Diff image"
                      style="width: auto; max-width: 100%; height: auto;">
                    <!-- Botón para abrir modal 'Diff' -->
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                      data-bs-target="#diffModal">view</button>
                  </div>
                </div>
              </div>
              <!-- Modal 'Diff' -->
              <div class="modal fade" id="diffModal" tabindex="-1" aria-labelledby="diffModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl">
                  <div class="modal-content">
                    <div class="modal-body">
                      <img src="./compare-${imageName}" alt="Diff image" style="width: 100%;">
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mb-4">
                <div class="card h-100 text-center">
                  <div class="card-body">
                    <h5 class="card-title">Data</h5>
                    <div class="row">
                      <!-- Mini Card para 'Is Same Dimensions' -->
                      <div class="col-12 mb-2">
                        <div class="card">
                          <div class="card-body">
                            <h6 class="card-subtitle mb-2">Dimensiones Coinciden</h6>
                            <p class="card-text">${info.isSameDimensions ? '<span style="color: green;">Sí</span>' : '<spanstyle="color: red;">No</spanstyle=>'}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-2">
                        <div class="card">
                          <div class="card-body">
                            <h6 class="card-subtitle mb-2">Diferencia de Dimensiones</h6>
                            <!-- Presentación amigable de la diferencia de dimensiones -->
                            <p class="card-text">Ancho: ${info.dimensionDifference.width}, Alto:
                              ${info.dimensionDifference.height}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-12 mb-2">
                        <div class="card">
                          <div class="card-body">
                            <h6 class="card-subtitle mb-2">Porcentaje de Discrepancia</h6>
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: ${info.misMatchPercentage}%"
                                aria-valuenow="${info.misMatchPercentage}" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Mini Card para 'Analysis Time' -->
                      <div class="col-12 mb-2">
                        <div class="card">
                          <div class="card-body">
                            <h6 class="card-subtitle mb-2">Tiempo de Análisis</h6>
                            <!-- Tiempo como texto con 'ms' en verde -->
                            <p class="card-text">${info.analysisTime}<span style="color: green;"> ms</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
    `;
}

function createReport(datetime, resInfo, teamMembers, logoPath) {
  // ...
  // En lugar de usar config.browsers, usamos las claves de resInfo para mapear a través de los resultados
  return `
        <html html >
        <head>
            <title>Reporte de Regresión Visual - Ghost</title>
            <link href="index.css" type="text/css" rel="stylesheet">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
                </head>
                <body>
                    <header>
                        <img src="${logoPath}" alt="Logo" class="logo">
                            <h1>Reporte de Regresión Visual</h1>
                            <p>Ejecutado: ${datetime}</p>
                    </header>
                    <main>
                        ${Object.keys(resInfo).map(browserName => {
    return browser(resInfo[browserName], browserName);
  }).join('')}
                    </main>
                    <footer>
                        <div class="team-info">
                            ${teamMembers.map(member => `<p>${member.name} (${member.email})</p>`).join('')}
                        </div>
                    </footer>
                    <!-- Bootstrap Bundle JS (incluye Popper.js) -->
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
                </body>
            </html>`;
}
