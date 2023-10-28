import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
const demoBlaze= require("../../Pages/demoBlazeHome")
const demoBlazeProduct=require("../../Pages/demoBlazeProduct")
const demoBlazeCart=require("../../Pages/demoBlazeCart")


When(`selecciona el producto {string}`, (mobile)=>{
    demoBlaze.getMobileAllButtons().each((btn, $inx)=>{
        if ($inx==0){
            cy.wrap(btn).should("have.text",mobile).click();
        }
    })
})

When(`selecciona el botón {string}`,(addToCart)=>{
    demoBlazeProduct.getAddToCartButton().should("have.text",addToCart).click();
    cy.wait(4000);
})


Then(`el producto {string} se encuentra agregado en el carrito`,(mobile)=>{
    demoBlaze.getMenuAllButtons().eq(3).click();
    demoBlazeCart.getAllProductsAdded().last().should("contain.text",mobile)
})


Then(`visualiza en el header los botones {string}`, (list)=>{
    list = list.split(", ");
    demoBlaze.getMenuAllButtons().each((btn, $inx)=>{
        if ($inx < 5 || $inx >6) {
            cy.wrap(btn).should("have.text", list[$inx]);
        }
        
    })

})