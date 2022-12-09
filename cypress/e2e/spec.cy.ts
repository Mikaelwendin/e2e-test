import { failData, mockData } from "../mocks/mockIMovie";

describe("Testing movieapp", () => {

  beforeEach(() => {
    cy.visit("/");
  })

  it("should visit localhost", () => {
  });
  it("Should add text to input", () => {
    cy.get("#searchText").type("star").should("have.value", "star");
  });
  it("Should connect to API", () => {
    cy.get("#searchText").type("star");  //Vet inte varför den blir aborted!!
    cy.get("#search").click();
  });
  //Testar en test bara...
  it("Should simulate server error", () => {
    cy.get("#searchText").type("star").should("have.value", "star");
    cy.intercept("GET", "http://omdbapi.com/*", {statusCode:500}).as("serverError");
    cy.get("#search").click();
    cy.wait("@serverError");
    cy.contains("Inga sökresultat att visa");
  });
  it("Should intercept search", () => {
    cy.get("#searchText").type("star").should("have.value", "star");
    cy.intercept("GET", "http://omdbapi.com/*", mockData).as("movie");
    cy.get("#search").click();
    cy.wait("@movie").its("request.url").should("contain", "star");
  });
  it("Should add error-paragraph element ", () => {
    cy.intercept("GET", "http://omdbapi.com/*", failData).as("movie");
    cy.get("#search").click();
    cy.wait("@movie").its("request.url");
    cy.get("#movie-container > p").contains("Inga sökresultat att visa");
  });
  it("Should have 3 movie-divs", () => {
    cy.get("#searchText").type("star").should("have.value", "star");
    cy.intercept("GET", "http://omdbapi.com/*", mockData).as("movie");
    cy.get("#search").click();
    cy.wait("@movie").its("request.url");
    cy.get("#movie-container > div").should("have.length", 3);
    cy.get("#movie-container > div > img").should("have.length", 3);
    cy.get("#movie-container > div > h3").should("have.length", 3);
  });
  it("should have correct headers", () => {
    cy.get("#searchText").type("star").should("have.value", "star");
    cy.intercept("GET", "http://omdbapi.com/*", mockData).as("movie");
    cy.get("#search").click();
    cy.wait("@movie").its("request.url");
    cy.get("#movie-container div:first-child h3").contains("Star Wars IV");
    cy.get("#movie-container div:nth-child(2) h3").contains("The Lord of the Rings");
    cy.get("#movie-container div:last-child h3").contains("Harry Potter III");
  });
  it("Should have classlist movie ", () => {
    cy.get("#searchText").type("star").should("have.value", "star");
    cy.intercept("GET", "http://omdbapi.com/*", mockData).as("movie");
    cy.get("#search").click();
    cy.wait("@movie").its("request.url");
    cy.get("#movie-container > div").should("have.class", "movie");
  });
});
