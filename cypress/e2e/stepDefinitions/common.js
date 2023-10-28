import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario ingresa en la página {string}`, (urlName)=> {
    if(urlName=="DemoBlaze"){
        cy.visit("https://www.demoblaze.com/");
    }
})

