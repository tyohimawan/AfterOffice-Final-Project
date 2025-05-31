// const homePage = require('../../support/pageObject/Agoda/homePage');
// const depaturePage = require('../../support/pageObject/Agoda/departurePage');
// const passengerPage = require('../../support/pageObject/Agoda/passengerDetailPage');

describe('Booking a flight on Agoda', () => {
    beforeEach(() => {
        cy.visit('https://www.agoda.com/flights');
        homePage.verifyHomePage();
    });
    
    // it('should book a flight successfully', () => {
    //     homePage.selectFlightType('One-way');
    //     homePage.enterDepartureCity('New York');
    //     homePage.enterDestinationCity('Los Angeles');
    //     homePage.selectDepartureDate('2023-12-01');
    //     homePage.clickSearchButton();
    
    //     depaturePage.verifySearchResults();
    //     depaturePage.selectFlightOption(1);
        
    //     passengerPage.verifyPassengerDetailsForm();
    //     passengerPage.fillPassengerDetails({
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: '
}); 