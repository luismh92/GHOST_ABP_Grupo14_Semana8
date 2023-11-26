@tags
Feature: manejo de tags en la aplicacion Ghost

  Scenario: Crear un nuevo tags (titulo)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con description (titulo, descripcion)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand metadata (titulo)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item metadata
    And el usuario llena el titulo de metadata
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand metadata (titulo, descripcion)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item metadata
    And el usuario llena el titulo de metadata
    And el usuario llena el descripcion de metadata
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand metadata (titulo, url)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item metadata
    And el usuario llena el titulo de metadata
    And el usuario llena el conical url de metadata
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand metadata (titulo, descripcion, url)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item metadata
    And el usuario llena el titulo de metadata
    And el usuario llena el descripcion de metadata
    And el usuario llena el conical url de metadata
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand metadata (descripcion)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item metadata
    And el usuario llena el descripcion de metadata
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand metadata (descripcion, url)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item metadata
    And el usuario llena el descripcion de metadata
    And el usuario llena el conical url de metadata
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand metadata (url)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item metadata
    And el usuario llena el conical url de metadata
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand x card (titulo)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item xcard
    And el usuario llena el titulo de xcard
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand x card (titulo, descripcion)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item xcard
    And el usuario llena el titulo de xcard
    And el usuario llena la descripcion de xcard
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand facebook (titulo)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item facebook
    And el usuario llena el titulo de facebook
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand facebook (descripcion)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item facebook
    And el usuario llena el descripcion de facebook
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con expand facebook (titulo, descripcion)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario expande el item facebook
    And el usuario llena el titulo de facebook
    And el usuario llena el descripcion de facebook
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con un nombre invalido
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name vacio
    And el usuario da click sobre el boton Save
    Then el usuario ve un error de name invalido


  Scenario: Crear un nuevo tags con expand metadata (url invalid)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario expande el item metadata
    And el usuario llena el conical url de metadata invalid
    And el usuario da click sobre el boton Save
    Then el usuario ve un error de conical url invalido


  Scenario: Crear un nuevo tags con expand facebook (titulo mas de 65 caracteres)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario expande el item facebook
    And el usuario llena el titulo de facebook mas de 100 caracteres
    And el usuario da click sobre el boton Save
    Then el usuario ve un warning de caracteres recomendado

  Scenario: Crear un nuevo tags con expand facebook (descripcion mas de 65 caracteres)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo description
    And el usuario expande el item facebook
    And el usuario llena el descripcion de facebook mas de 65 caracteres
    And el usuario da click sobre el boton Save
    Then el usuario ve un warning de caracteres recomendado

  Scenario: Crear un nuevo tags con expand metadata (title invalid mas de 70 caracteres)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario expande el item metadata
    And el usuario llena el titulo de metadata mas de 70 caracteres
    And el usuario da click sobre el boton Save
    Then el usuario ve un warning de caracteres recomendado

  Scenario: Crear un nuevo tags con expand metadata (descripcion invalid mas de 156 caracteres)
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario expande el item metadata
    And el usuario llena el descripcion de metadata mas de 156 caracteres
    And el usuario da click sobre el boton Save
    Then el usuario ve un warning de caracteres recomendado