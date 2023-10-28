class demoBlaze{

    getAddToCartButton(){
        return cy.get('a.btn');
    }


}

module.exports= new demoBlaze();