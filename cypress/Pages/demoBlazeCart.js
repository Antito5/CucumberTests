class demoBlaze{

    getAllProductsAdded(){
        return cy.get('#tbodyid .success');
    }

}

module.exports= new demoBlaze();