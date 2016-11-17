/*global describe, it, require*/
var expect = require("chai").expect;
var PivotatorUtils = require("../src/js/index"),
    model1 = require("./models/model_1");

var P = PivotatorUtils();

describe("Pivotator Utils", function () {

    it("instance should be not null", function () {
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



   console.log(JSON.stringify(P.toFilter(model1, {
       lang : "FR"
   })))



});