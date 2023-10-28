import { Then } from "@badeball/cypress-cucumber-preprocessor";
const demoBlaze= require("../../Pages/demoBlazeHome")

Then(`visualiza en el header los botones {string}`, (list)=>{
    list = list.split(", ");
    demoBlaze.getMenuAllButtons().each((btn, $inx)=>{
        if ($inx < 5 || $inx >6) {
            cy.wrap(btn).should("have.text", list[$inx]);
        }
        
    })




})