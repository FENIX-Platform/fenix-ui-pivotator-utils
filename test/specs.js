/*global describe, it, require*/
var expect = require("chai").expect;
var PivotatorUtils = require("../src/js/index");

describe("Pivotator Utils", function () {

    it("should be not null", function () {
        expect(PivotatorUtils).to.be.not.null;
    });
});