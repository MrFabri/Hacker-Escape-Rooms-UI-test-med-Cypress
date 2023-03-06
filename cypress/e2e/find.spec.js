const sizes = ['macbook-16', 'iphone-xr'];

describe('Find an element in the website', () => {
    sizes.forEach(size => {
        context(`Resolution: ${size}`, () => {
            beforeEach(() => cy.viewport(size));

            it('Gets the first "online challenges" button', () => {
                cy.visit('/').get('.button.primary.online-link').eq(0)
            });
        });
    });
});