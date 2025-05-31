const element = require('/element/Agoda/homePage.json');
class homePage{
    searchFromCity(city) {
        cy.xpath(element.fromCity).type(city);
    }
}
export default homePage;