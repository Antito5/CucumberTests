Feature: Place Order

Scenario: Agregar un producto al carrito
    Given que un usuario ingresa en la página "DemoBlaze"
    When selecciona el producto "Samsung galaxy s6"
    And selecciona el botón "Add to cart"
    Then el producto "Samsung galaxy s6" se encuentra agregado en el carrito