class demoBlaze{

    getAllProductsAdded(){
        return cy.get('#tbodyid .success');
    }

    getPlaceOrderButton(){
        return cy.get('.btn.btn-success');
    }

    getNameInput(){
        return cy.get('input#name');
    }
    getCountryInput(){
        return cy.get('input#country');
    }
    getCityInput(){
        return cy.get('input#city');
    }
    getCardInput(){
        return cy.get('input#card');
    }
    getMonthInput(){
        return cy.get('input#month');
    }
    getYearInput(){
        return cy.get('input#year');
    }
    getPurchaseButton(){
        return cy.get('body [tabindex="-1"]:nth-of-type(3) .btn-primary');
    }
    getThankYouMessage(){
        return cy.get('body [tabindex] h2');
    }
    getPurchaseDetail(){
        return cy.get('p.lead.text-muted');
    }
    getOkButton(){
        return cy.get('.btn.btn-lg.btn-primary.confirm');
    }

}

module.exports= new demoBlaze();