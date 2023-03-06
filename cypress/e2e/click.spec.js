const sizes = ['macbook-16', 'iphone-xr'];

describe('Click an element in the website', () => {
    sizes.forEach(size => {
        context(`Resolution: ${size}`, () => {
            beforeEach(() => cy.viewport(size));

            it('Clicks "On-site challenges" button', () => {
                cy.visit('/').get('.button.secondary.onsite-link').eq(0).click();
            });
        });
    });
});