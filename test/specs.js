/*global describe, it, require*/
var expect = require("chai").expect;
var PivotatorUtils = require("../src/js/index"),
    model = require("./models/model");

describe("Pivotator Utils", function () {

    var P = PivotatorUtils();

    it("should be not null", function () {
        expect(PivotatorUtils).to.be.not.null;
    });

    it("should have convertFX() method", function () {
        expect(P).to.have.ownProperty('convertFX')
    });

/*    it("should convertFX() result not null", function () {
        expect(P.convertFX()).to.be.not.null;
    });*/


});

describe("Model", function () {

    it("should be not null", function () {
        expect(model).to.be.not.null;
    });

    it("should have 'test' property", function () {
        expect(model).to.have.ownProperty('test')
    });

    it("test should be equal to 'Barbara'", function () {
        expect(model.test).to.be.equal('Barbara')
    });

});