
describe("Inicio de seccion", ()=>{
    beforeEach(()=>{
        cy.visit("https://google.com")
    })


    it("Verify that all cards appear from the beginning "), ()=>{
        cy.get(`.printHotels`).should(`have.lenght`,18)
    }

    it("check filter by price and each cards correspond to the indicated price"), ()=>{
        cy.get(`.filterHotelsPrice`).select(`$`)
        cy.get(`div [data-price="1"]`).should(`have.lenght`,3)
        cy.get(`.filterHotelsPrice`).select(`$$`)
        cy.get(`div [data-price="2"]`).should(`have.lenght`,4)
        cy.get(`.filterHotelsPrice`).select(`$$$`)
        cy.get(`div [data-price="3"]`).should(`have.lenght`,2)
        cy.get(`.filterHotelsPrice`).select(`$$$$`)
        cy.get(`div [data-price="4"]`).should(`have.lenght`,9)
    }

    it("Verify the delete button bring me back all the hotels"), ()=>{
        cy.get(`.clearButton`).click()
        cy.get(`.printHotels`).should(`have.lenght`,18)
    }


})