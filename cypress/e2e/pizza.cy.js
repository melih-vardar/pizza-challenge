describe('Order Page', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080)
    })
    const randomText = 'do not ring the doorbell, I am coding'

    describe("home to success", () => {
        it('redirects user from home to success page', () => {
            cy.visit("http://localhost:5173")
            cy.get('[data-cy="aciktim-button"]').click()
            cy.url().should('include', '/order-pizza');
            // to success
            cy.get('[data-cy="Jalapeno"]').check()
            cy.get('[data-cy="Biber"]').check()
            cy.get('[data-cy="Ananas"]').check()
            cy.get('[data-cy="Sucuk"]').check()
            cy.get('[data-cy="orderNote"]').type(randomText)
            cy.get('[data-cy="selectedDough"]').select("Süpper İnce");
            cy.get('[data-cy="submit-button"]').should("be.enabled");
            cy.get('[data-cy="submit-button"]').click();
            cy.url().should('include', '/success');
        })
    })


    describe('form validation', () => {

        beforeEach(() => {
            cy.visit("http://localhost:5173/order-pizza/")
        })

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
                cy.get('[data-cy="selectedDough"]').select("Süpper İnce");

                cy.get('[data-cy="orderNote"]').type('as')
                cy.get('[data-cy="submit-button"]').should("be.disabled");

                cy.get('[data-cy="orderNote"]').type('asd')
                cy.get('[data-cy="submit-button"]').should("be.enabled");
            })
        })

        describe("multiple pizza topping selection", () => {
            it('enables submit button after selecting 4 items', () => {


                cy.get('[data-cy="orderNote"]').type(randomText);
                cy.get('[data-cy="selectedDough"]').select("Süpper İnce");

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
                cy.get('[data-cy="selectedDough"]').select("Süpper İnce");
                cy.get('[data-cy="submit-button"]').should("be.enabled");
                cy.get('[data-cy="submit-button"]').click();
                cy.url().should('include', '/success');
            })
        })
    })
})