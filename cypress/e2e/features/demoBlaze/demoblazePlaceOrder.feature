Feature: Place Order

Scenario: Agregar un producto al carrito
    Given que un usuario ingresa en la página "DemoBlaze"
    When selecciona el producto "Samsung galaxy s6"
    And selecciona el botón Add to cart
    Then el producto "Samsung galaxy s6" se encuentra agregado en el carrito
    

Scenario: Realizar una orden
    Given que un usuario ingresa en la página "DemoBlaze"
    When selecciona el producto "Samsung galaxy s6"
    And selecciona el botón Add to cart
    And el producto "Samsung galaxy s6" se encuentra agregado en el carrito
    And selecciona el botón Place Order
    And completa su Nombre: "Antonella Morano", país: "Italia", ciudad: "Robilante", Número de tarjeta: "123456668855", Mes de Vencimiento: "July" y Año de vencimiento:  "Year"
    And selecciona el botón Purchase
    Then Se muestra el mensaje "Thank you for your purchase!", indicando Id de la compra, Monto "360 USD", Tarjeta de crédito "123456668855", Nombre "Antonella Morano" y fecha de hoy
    And se visualiza el botón OK
