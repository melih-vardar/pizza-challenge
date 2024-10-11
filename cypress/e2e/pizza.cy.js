describe('Order Page', () => {

    beforeEach(() => {
        cy.visit("http://localhost:5173/order-pizza")
        cy.viewport(1920, 1080)
    })

    // ~~ inputa bir metin giren test

    describe('form validation', () => {
        const randomText = 'do not ring the doorbell, I am coding'
        describe("input text", () => {
            it('allows user to input the text', () => {
                cy.get('[data-cy="orderNote"]').should('have.value', '')
                cy.get('[data-cy="orderNote"]').type(randomText)
                cy.get('[data-cy="orderNote"]').should('have.value', randomText)
            })
            it("enables submit button after input with min 3 characters", () => {
                cy.get('[data-cy="Jalapeno"]').check()
                cy.get('[data-cy="Biber"]').check()
                cy.get('[data-cy="Ananas"]').check()
                cy.get('[data-cy="Sucuk"]').check()
                cy.get('[data-cy="selectedDough"]').select("ince");

                cy.get('[data-cy="orderNote"]').type('as')
                cy.get('[data-cy="submit-button"]').should("be.disabled");

                cy.get('[data-cy="orderNote"]').type('asd')
                cy.get('[data-cy="submit-button"]').should("be.enabled");
            })
        })

        describe("multiple pizza topping selection", () => {
            it('enables submit button after selecting 4 items', () => {


                cy.get('[data-cy="orderNote"]').type(randomText);
                cy.get('[data-cy="selectedDough"]').select("ince");

                cy.get('[data-cy="Jalapeno"]').should('not.be.checked');
                cy.get('[data-cy="Biber"]').should('not.be.checked');
                cy.get('[data-cy="Ananas"]').should('not.be.checked');
                cy.get('[data-cy="Sucuk"]').should('not.be.checked');

                cy.get('[data-cy="Jalapeno"]').check()
                cy.get('[data-cy="Biber"]').check()
                cy.get('[data-cy="Ananas"]').check()

                cy.get('[data-cy="Jalapeno"]').should('be.checked');
                cy.get('[data-cy="Biber"]').should('be.checked');
                cy.get('[data-cy="Ananas"]').should('be.checked');

                cy.get('[data-cy="submit-button"]').should("be.disabled");

                cy.get('[data-cy="Sucuk"]').check()
                cy.get('[data-cy="Sucuk"]').should('be.checked');

                cy.get('[data-cy="submit-button"]').should("be.enabled");
            })
        })

        describe("form submission", () => {
            it("redirects user to success page", () => {
                cy.get('[data-cy="Jalapeno"]').check()
                cy.get('[data-cy="Biber"]').check()
                cy.get('[data-cy="Ananas"]').check()
                cy.get('[data-cy="Sucuk"]').check()
                cy.get('[data-cy="orderNote"]').type(randomText)
                cy.get('[data-cy="selectedDough"]').select("ince");
                cy.get('[data-cy="submit-button"]').should("be.enabled");
                cy.get('[data-cy="submit-button"]').click({ multiple: true });
                cy.intercept('POST', 'https://reqres.in/api/pizza').as('{"pizzaToppings":["Pepperoni","Kanada Jambonu","Soğan","Mısır"],"selectedOption":"kucuk","quantity":1,"doughThickness":"klasik","id":"765","createdAt":"2024-10-10T17:24:21.045Z"}')
                cy.url().should('include', '/success');
            })
        })
    })

})