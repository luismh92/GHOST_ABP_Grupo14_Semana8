@semana1
Feature: Funcionalidad de pagina iteracion semana 1

    Scenario: El usuario crea una pagina con facebook (title, description, attach image)
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el item facebook
        And el usuario llena el input de title facebook
        And el usuario llena el input de description facebook
        And el usuario attach image for facebook
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver la pagina como publicada
        

    Scenario: El usuario crea una pagina con metadata (title)
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario hace click sobre el boton page settings
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el item metadata
        And el usuario llena el input de title metadata
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver la pagina como publicada

    Scenario: El usuario crea una pagina con metadata (title, description)
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el item metadata
        And el usuario llena el input de title metadata
        And el usuario llena el input de description metadata
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver la pagina como publicada


    Scenario: El usuario crea una pagina con facebook (title)
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario hace click sobre el boton page settings
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el item facebook
        And el usuario llena el input de title facebook
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver la pagina como publicada

    Scenario: El usuario crea una pagina con facebook (title, description)
        Given Un usuario se encuentra en la pagina principal del admin de Ghost
        When el usuario hace click sobre el item pages
        And el usuario hace click sobre el boton New Page
        And el usuario escribe en los campos Titulo y Contenido
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el item facebook
        And el usuario llena el input de title facebook
        And el usuario llena el input de description facebook
        And el usuario hace click sobre el boton page settings
        And el usuario hace click sobre el boton Publicar
        And el usuario hace click sobre el boton Continuar
        And el usuario hace click sobre el boton Publicar Ahora
        Then el usuario deberia ver la pagina como publicada


