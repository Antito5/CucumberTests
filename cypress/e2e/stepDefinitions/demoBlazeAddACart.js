import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const demoBlaze= require("../../Pages/demoBlazeHome")
const demoBlazeProduct=require("../../Pages/demoBlazeProduct")
const demoBlazeCart=require("../../Pages/demoBlazeCart")

Then(`se visualiza el botón OK`,()=>{
    demoBlazeCart.GetOkButton().should("be.visible");
})


Then(`Se muestra el mensaje {string}, indicando Id de la compra, Monto {string}, Tarjeta de crédito {string}, Nombre {string} y fecha de hoy`,
(msj,monto,card,name)=>{
    fecha=Date.now();
    demoBlazeCart.GetThankYouMessage().should("have.text",msj);
    demoBlazeCart.GetPurchaseDetail().should("contain.text",monto);
    demoBlazeCart.GetPurchaseDetail().should("contain.text",card);
    demoBlazeCart.GetPurchaseDetail().should("contain.text",name);
    demoBlazeCart.GetPurchaseDetail().should("contain.text",fecha);

})

When(`selecciona el botón Purchase`,()=>{
    demoBlazeCart.GetPurchaseButton().click();
})

When(`completa su Nombre: {string}, país: {string}, ciudad: {string}, Número de tarjeta: {string}, Mes de Vencimiento: {string} y Año de vencimiento:  {string}`, (name,country,city,card,month,year)=>{

demoBlazeCart.GetNameInput().type(name);
demoBlazeCart.GetCountryInput().type(country);
demoBlazeCart.GetCityInput().type(city);
demoBlazeCart.GetCardInput().type(card);
demoBlazeCart.GetMonthInput().type(month);
demoBlazeCart.GetYearInput().type(year);

})

When(`selecciona el botón Place Order`, ()=>{
    demoBlazeCart.getPlaceOrderButton().click();
})

When(`selecciona el producto {string}`, (mobile)=>{
    demoBlaze.getMobileAllButtons().each((btn, $inx)=>{
        if ($inx==0){
            cy.wrap(btn).should("have.text",mobile).click();
        }
    })
})

When(`selecciona el botón Add to cart`,()=>{
    demoBlazeProduct.getAddToCartButton().click();
    cy.wait(4000);
})


Then(`el producto {string} se encuentra agregado en el carrito`,(mobile)=>{
    demoBlaze.getMenuAllButtons().eq(3).click();
    demoBlazeCart.getAllProductsAdded().last().should("contain.text",mobile)
})