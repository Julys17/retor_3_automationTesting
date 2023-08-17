
describe("Inicio de seccion", ()=>{
    beforeEach(()=>{
        cy.visit("https://hotels-virid.vercel.app/")
    })


    it("Verify that all cards appear from the beginning ", ()=>{
        cy.get(".cardHotel").should("have.length",18)
    })

    it.only("check filter by price and each cards correspond to the indicated price", ()=>{
        cy.get(".allPriceSelect").select("$")
        cy.get(".card__price").each((card)=>{
            cy.get(card).should("have.text","$")
        })

        cy.get(".allPriceSelect").select("$$")
        cy.get(".card__price").each((card)=>{
            cy.get(card).should("have.text","$$")
        })

        cy.get(".allPriceSelect").select("$$$")
        cy.get(".card__price").each((card)=>{
            cy.get(card).should("have.text","$$$")
        })

        cy.get(".allPriceSelect").select("$$$$")
        cy.get(".card__price").each((card)=>{
            cy.get(card).should("have.text","$$$$")
        })
        
       
    })

    it("Verify the delete button bring me back all the hotels", ()=>{
        cy.get(".allPriceSelect").select("$")
        cy.get(".card__price").each((card)=>{
            cy.get(card).should("have.text","$")
        })
        cy.get(".clearButton").click()
        cy.get(".cardHotel").should("have.length",18)
    })


})