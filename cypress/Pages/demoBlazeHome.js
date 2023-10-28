class demoBlaze{

    getMenuAllButtons(){
        return cy.get('a.nav-link');
    }
    getMobileAllButtons(){
        return cy.get('a.hrefch');
    }
    
}

module.exports= new demoBlaze();