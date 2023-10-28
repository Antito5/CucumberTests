class demoBlaze{

    getMenuAllButtons(){
        return cy.get('a.nav-link');
    }
}

module.exports= new demoBlaze();