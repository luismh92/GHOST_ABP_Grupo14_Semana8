@tags
Feature: manejo de tags en la aplicacion Ghost
  Scenario: Crear un nuevo tags
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso


  Scenario: Crear un nuevo tags con description
    Given Un usuario se encuentra en la pagina de inicio de sesion de Ghost Tags
    When el usuario se dirige a la seccion tags del sitio
    And el usuario hace clic en el boton de New Tag
    And el usuario deberia ver el formulario de un nuevo tag
    And el usuario deberia llenar el campo name
    And el usuario deberia llenar el campo description
    And el usuario da click sobre el boton Save
    Then el usuario debe ser redirigido al editar tag si fue exitoso

  Scenario: Crear un nuevo tags con expand metadata
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

  Scenario: Crear un nuevo tags con expand metadata
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

  Scenario: Crear un nuevo tags con expand metadata
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


  Scenario: Crear un nuevo tags con expand metadata
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

  Scenario: Crear un nuevo tags con expand metadata
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

  Scenario: Crear un nuevo tags con expand facebook
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