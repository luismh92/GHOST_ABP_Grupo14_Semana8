# GHOST_ABP_Grupo14_Semana8
Repositorio para alojamiento de pruebas E2E

### Grupo 14
Semana 8

### Integrantes del equipo:

Bryan Camilo Castro ([bc.castro@uniandes.edu.co](mailto:bc.castro@uniandes.edu.co))

Luis Alberto Mendoza Hernández ([l.mendozah@uniandes.edu.co](mailto:l.mendozah@uniandes.edu.co))

Hernán David Martínez Domínguez ([hd.martinezd1@uniandes.edu.co](mailto:hd.martinezd1@uniandes.edu.co))
_________________
## Tutorial Entrega Semana 8 Ghost - Pruebas Automatizadas de Software
_________________

### Video de ejecución de las pruebas

A continuación, usted encontrará un enlace a un video con el paso a paso completo desde cero para la correcta ejecución de los tests, en Cypress, en caso tal de necesitar detalles adicionales sobre cómo ejecutar las pruebas:

[https://drive.google.com/drive/folders/1YNBZ-IWp2veu2v5JNKMCSwle4HEYKehY?usp=sharing](https://drive.google.com/drive/folders/1YNBZ-IWp2veu2v5JNKMCSwle4HEYKehY?usp=sharing)

![image](https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14_Semana7/assets/142316799/f5da9953-0737-4fba-ac82-54050b123440)

______________
## Descripción de la estrategia:

A continuación, encontrará un link a la descripción de la estrategia y análisis para este sprint de pruebas:

https://github.com/CamiloCastro-MISO/GHOST_ABP_Grupo14_Semana7/wiki/Descripci%C3%B3n-de-la-estrategia-para-las-pruebas-en-Cypress-%E2%80%90-Semana-7
______________
## Paso a paso para ejecutar las pruebas

A continuación, usted encontrará una guía con los pasos necesarios para poder ejecutar exitosamente las pruebas de la aplicacion Ghost: 

1. Clone el repositorio encontrado en https://github.com/luismh92/GHOST_ABP_Grupo14_Semana8. Para esto, puede usar el comando: 
    ```bash
    git clone https://github.com/luismh92/GHOST_ABP_Grupo14_Semana8.git
    ```
   

### Para ejecutar las pruebas con Cypress:

**Requisitos:**

**Nota:** Esta suite de pruebas está diseñada para correr sobre una versión local de Ghost, pero existe también una version de la aplicación instalada en AWS ElasticBeanstalk. Si desea probarla, necesitará modificar el archivo ./assets/backup.json para agregar el servidor a las pruebas y ejecutarlas sobre la versión en la nube. Sin embargo, **recomendamos ejecutar esta suite de pruebas de forma local** para evitar cualquier tipo de fallas por carga incorrecta de recursos asociada a latencia o fluctuaciones de ancho de banda.

Versión en la nube:

http://54.172.114.8:2368/ghost/#/signin -- **5.74**

_________
**Para correr las pruebas en la versión local, es necesario que tenga instalada la version 5.74 de Ghost. De igual modo, debe modificar el archivo ./assets/backup.json con sus credenciales, o bien, al momento de realizar la configuración posterior a la instalación local de Ghost, verificar que el usuario y contraseña coincidan con los ya existentes en este archivo.**
____________
**Es necesario tener instalado Python.**

Una vez cumpla con estos requisitos:

1. Instale ***nodeenv*** dentro del entorno virtual utilizando pip:

```powershell
pip install nodeenv
```

2. Active el ambiente virtual:

```powershell
.\venv_cypress\Scripts\activate
```

3. Ubíquese en la carpeta que contiene las pruebas de Cypress:

```powershell
cd .\CYPRESS\
```

4. Instale los paquetes:

```powershell
npm install
```

## Existen varios tipos de test para esta entrega, por tal motivo le enunciamos los pasos necesarios para ello.

## Nota: por favor ejecute las pruebas en el orden que se mencionan en el tutorial.

**Escenarios con datos apriori**

Ejecute el siguiente comando para correr los tests:

```powershell
npm run iteracion-semana1-a-priori
```

**Escenarios con datos dinamicos**

Ejecute el siguiente comando para correr los tests:

```powershell
npm run iteracion-semana1-dinamico
```

**Escenarios con datos aleatorios**

Ejecute el siguiente comando para correr los tests:

```powershell
npm run iteracion-semana1-aleatorio-faker
```

**Escenarios con monkeys**

Ejecute el siguiente comando para correr los tests:

```powershell
npm run iteracion-semana1-monkey
```

