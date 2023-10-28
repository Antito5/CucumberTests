Feature: Place Order

Scenario: Enviar un mensaje
    Given que un usuario ingresa en la página "DemoBlaze"
    When selecciona el botón Contact
    And Ingresa su email: "anto_m5@hotmail.com", su nombre de contacto: "Antonella Morano" y el mensaje: "Necesito asistencia con la compra 1234asb"
    And selecciona el botón Send Message
    And (no se como seleccionar el modal de la web)
