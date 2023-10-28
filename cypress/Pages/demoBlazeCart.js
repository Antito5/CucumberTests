class demoBlaze{

    getAllProductsAdded(){
        return cy.get('#tbodyid .success');
    }

    getPlaceOrderButton(){
        return cy.get('.btn.btn-success');
    }

    GetCountryInput(){
        return cy.get('input#name');
    }
    GetCityInput(){
        return cy.get('input#city');
    }
    GetCardInput(){
        return cy.get('input#card');
    }
    GetMonthInput(){
        return cy.get('input#month');
    }
    GetYearInput(){
        return cy.get('input#year');
    }
    GetPurchaseButton(){
        return cy.get('body [tabindex="-1"]:nth-of-type(3) .btn-primary');
    }
    GetThankYouMessage(){
        return cy.get('body [tabindex] h2');
    }
    GetPurchaseDetail(){
        return cy.get('p.lead.text-muted');
    }
    GetOkButton(){
        return cy.get('.btn.btn-lg.btn-primary.confirm');
    }

}

module.exports= new demoBlaze();