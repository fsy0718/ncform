/// <reference types="Cypress" />

const md5 = require('blueimp-md5');

context('Layout widgets', () => {

  before(() => {
    cy.visit('http://localhost:3000/examples/components/vue-ncform/_layout-widgets.html')
  })

  it('layout:v & collapsed: false', () => {
    let id = md5('layout:v & collapsed: false');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('userLegend');

      cy.get('@userLegend').next().should('be.visible');
      cy.get('@userLegend').next().then($dom => {
        expect($dom.find('label').offset().top).to.be.lessThan($dom.find('input').offset().top);
        expect($dom.find('label').offset().left).to.be.equal($dom.find('input').offset().left);
      })
      cy.get('@userLegend').click();
      cy.get('@userLegend').next().should('not.be.visible');
    })
  })

  it('layout:h & collapsed: true', () => {
    let id = md5('layout:h & collapsed: true');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('userLegend');

      cy.get('@userLegend').next().should('not.be.visible');
      cy.get('@userLegend').click();
      cy.get('@userLegend').next().should('be.visible');
      cy.get('@userLegend').next().then($dom => {
        expect($dom.find('label').offset().top).to.be.equal($dom.find('input').offset().top);
        expect($dom.find('label').offset().left).to.be.lessThan($dom.find('input').offset().left);
      })
    })
  })

  it('disableCollapse: true', () => {
    let id = md5('disableCollapse: true');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('userLegend');

      cy.get('@userLegend').next().should('be.visible');
      cy.get('@userLegend').click();
      cy.get('@userLegend').next().should('be.visible');
    })
  })

  it('array: all disableXXX are true', () => {
    let id = md5('array: all disableXXX are true');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('userLegend');

      cy.get('@userLegend').parent().children('div').should('be.visible');
      cy.get('@userLegend').click();
      cy.get('@userLegend').parent().children('div').should('be.visible');

      cy.get('@userLegend').parent().find('button').should('not.exist');
    })
  })

  it('array: collapsed / itemCollapse true and txts change', () => {
    let id = md5('array: collapsed / itemCollapse true and txts change');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('userLegend');

      cy.get('@userLegend').parent().children('div').should('not.be.visible');
      cy.get('@userLegend').click();
      cy.get('@userLegend').parent().children('div').should('be.visible');

      cy.get('@userLegend').parent().find('input').should('not.be.visible');
      cy.get('@userLegend').parent().find('button').contains('Expand').click();
      cy.get('@userLegend').parent().find('input').should('be.visible');

      cy.get('@userLegend').parent().find('button').contains('Add Item').should('exist');
      cy.get('@userLegend').parent().find('button').contains('Remove All').should('exist');
    })
  })

  it('table: all disableXXX are true', () => {
    let id = md5('table: all disableXXX are true');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('userLegend');

      cy.get('@userLegend').next().should('be.visible');
      cy.get('@userLegend').click();
      cy.get('@userLegend').next().should('be.visible');

      cy.get('@userLegend').next().find('button').should('not.exist');
    })
  })

  it('table: collapsed true and txts change', () => {
    let id = md5('table: collapsed true and txts change');
    cy.get(`[data-cy=${id}]`).within(() => {
      cy.get('legend').contains('user').as('userLegend');

      cy.get('@userLegend').next().should('not.be.visible');
      cy.get('@userLegend').click();
      cy.get('@userLegend').next().should('be.visible');

      cy.get('@userLegend').next().find('button').contains('Add Item').should('exist');
      cy.get('@userLegend').next().find('button').contains('Remove All').should('exist');
    })
  })

})
