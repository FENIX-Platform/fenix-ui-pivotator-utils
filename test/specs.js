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

describe("Pivotator", function () {

    var P = PivotatorUtils();

    it("should have 'test' property", function () {
        expect(model).to.have.ownProperty('test')
    });

    //Sbagliato
    it("test should be equal to 'WRONG'", function () {
        expect(P.parseInput({"metadata":{"language":{"version":"1998","codes":[{"code":"eng","label":{"EN":"English"}}],"idCodeList":"ISO639-2","extendedName":{"EN":"International Standard Organization - Language"}},"creationDate":1466542800000,"dsd":{"contextSystem":"cstat_mdg","datasources":["D3S"],"columns":[{"dataType":"year","key":true,"id":"DIMENSION0","title":{"EN":"year"},"values":{"timeList":[2014,2013,2012,2011,2010,2009,2008,2007,2006]},"subject":"time"},{"dataType":"code","key":true,"id":"DIMENSION1","title":{"EN":"Indicator (code)"},"values":{"codes":[{"codes":[{"code":"13020201"},{"code":"13020202"},{"code":"13020203"},{"code":"13010201"},{"code":"130201"},{"code":"130101"},{"code":"0301"},{"code":"0302"}],"idCodeList":"CountrySTAT_Indicators"}]},"domain":{"codes":[{"idCodeList":"CountrySTAT_Indicators"}]},"subject":"indicator"},{"dataType":"code","key":true,"id":"DIMENSION2","title":{"EN":"Species (code)"},"values":{"codes":[{"codes":[{"code":"45"},{"code":"3"},{"code":"34"},{"code":"36"},{"code":"37"},{"code":"57"},{"code":"43"},{"code":"42"},{"code":"33"},{"code":"76"},{"code":"38"},{"code":"56"},{"code":"13"},{"code":"41"},{"code":"25"},{"code":"55"},{"code":"53"},{"code":"77"},{"code":"92"},{"code":"71"},{"code":"1"},{"code":"82"},{"code":"72"}],"idCodeList":"CountrySTAT_Fishery_products"}]},"domain":{"codes":[{"idCodeList":"CountrySTAT_Fishery_products"}]},"subject":"item"},{"dataType":"text","key":false,"id":"VALUE0","title":{"EN":"Value"},"subject":"value"},{"dataType":"code","key":false,"id":"OTHER0","title":{"EN":"um (code)"},"values":{"codes":[{"codes":[{"code":"0103"},{"code":"0108"},{"code":"0105"}],"idCodeList":"CountrySTAT_UM"}]},"domain":{"codes":[{"idCodeList":"CountrySTAT_UM"}]},"subject":"um"},{"dataType":"text","key":false,"id":"DIMENSION1_EN","title":{"EN":"Indicator (code)"},"virtual":false,"transposed":false},{"dataType":"text","key":false,"id":"DIMENSION2_EN","title":{"EN":"Species (code)"},"virtual":false,"transposed":false},{"dataType":"text","key":false,"id":"OTHER0_EN","title":{"EN":"um (code)"},"virtual":false,"transposed":false, "subject":"um"}]},"title":{"EN":"PRODUCTION ET EXPORTATION DES PRODUITS HALIEUTIQUES ET DE LA PECHE"},"rid":"12_1302","uid":"D3S_72301342456766320158096290848384418569","meContent":{"description":{"EN":"Evolution de production et exportation des produits halieutiques et de la peche"},"resourceRepresentationType":"dataset","resourceRepresentationTypeLabel":{"EN":"Dataset"}},"languageDetails":{"EN":"FRENCH"},"characterSet":{"codes":[{"code":"106","label":{"EN":"UTF-8"}}],"idCodeList":"IANAcharacterSet","extendedName":{"EN":"Internet Assigned Numbers Authority codelist"}},"metadataStandardName":"FENIX","metadataStandardVersion":"1.0","metadataLanguage":{"version":"1998","codes":[{"code":"eng","label":{"EN":"English"}}],"idCodeList":"ISO639-2","extendedName":{"EN":"International Standard Organization - Language"}},"contacts":[{"position":{"EN":"Chef de Service Statistique"},"organization":{"EN":"Ministère des Ressources Halieutiques et de la Pêche"},"role":"owner","contactInfo":{"address":"Ministère des Ressources Halieutiques et de la Pêche BP 1699","phone":"+261324906308","emailAddress":"dgrhhajaralstat21@hotmail.fr","hoursOfService":{"EN":"08 h à 16 h"}},"pointOfContact":"ANDRIAMANANA Jasmin Haja Ralalasoa","organizationUnit":{"EN":"Direction de la Statistique et de la Programmation"},"roleLabel":{"EN":"Owner"}}],"meAccessibility":{"seDataDissemination":{"seDistribution":{},"seReleasePolicy":{"disseminationPeriodicity":{"version":"1.0","codes":[{}],"idCodeList":"FAO_Period","extendedName":{"EN":"FAO Reference Period"}},"embargoTime":{}}}},"meMaintenance":{"seUpdate":{"updateDate":1467095803684}}},"data":[[2014,"13020201","45","3708","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2014,"13020201","3","4988.82","0103","Industrial Marine Capture production","Marine fishes","ton"],[2014,"13020201","34","381.8","0103","Industrial Marine Capture production","Miscellaneous demersal fishes","ton"],[2014,"13020201","36","24614","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2014,"13020201","37","2144","0103","Industrial Marine Capture production","Miscellaneous pelagic fishes","ton"],[2014,"13020202","3","99.65","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2014,"13020202","57","7.8","0103","Artisanal Marine Capture production","Squids, cuttlefishes, octopuses","ton"],[2014,"13020202","43","0.43","0103","Artisanal Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2014,"13020203","45","1530.55","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2014,"13020203","42","4514.91","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2014,"13020203","43","251","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2014,"13020203","3","27742","0103","Traditional Marine Capture production","Marine fishes","ton"],[2014,"13020203","33","0.03","0103","Traditional Marine Capture production","Miscellaneous coastal fishes","ton"],[2014,"13020203","76","2126","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2014,"13020203","38","224","0103","Traditional Marine Capture production","Sharks, rays, chimaeras","ton"],[2014,"13020203","56","391.31","0103","Traditional Marine Capture production","Clams, cockles, arkshells","ton"],[2014,"13020203","13","1804","0103","Traditional Marine Capture production","Miscellaneous freshwater fishes","ton"],[2014,"13020203","57","2790","0103","Traditional Marine Capture production","Squids, cuttlefishes, octopuses","ton"],[2014,"13020203","41","2368.438","0103","Traditional Marine Capture production","Freshwater crustaceans","ton"],[2014,"13020203","25","7.81","0103","Traditional Marine Capture production","Miscellaneous diadromous fishes","ton"],[2014,"13020203","55","2845","0103","Traditional Marine Capture production","Scallops, pectens","ton"],[2014,"13020203","53","1158.06","0103","Traditional Marine Capture production","Oysters","ton"],[2014,"13020203","77","19.6","0103","Traditional Marine Capture production","Miscellaneous aquatic invertebrates","ton"],[2014,"13020203","36","22.28","0103","Traditional Marine Capture production","Tunas, bonitos, billfishes","ton"],[2014,"13020203","34","8.98","0103","Traditional Marine Capture production","Miscellaneous demersal fishes","ton"],[2014,"13010201","45","3258","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2014,"13010201","92","6970","0103","Industrial Marine Aquaculture production","Red seaweeds","ton"],[2014,"130201","3","12328.081","0103","Inland Capture production","Marine fishes","ton"],[2014,"130201","45","1053.756","0103","Inland Capture production","Shrimps, prawns","ton"],[2014,"130201","13","891","0103","Inland Capture production","Miscellaneous freshwater fishes","ton"],[2014,"130201","25","162","0103","Inland Capture production","Miscellaneous diadromous fishes","ton"],[2014,"130201","71","4.72","0103","Inland Capture production","Frogs and other amphibians","ton"],[2014,"130201","41","176","0103","Inland Capture production","Freshwater crustaceans","ton"],[2014,"130101","1","8.57","0103","Inland Aquaculture production","Freshwater fishes","ton"],[2014,"130101","13","16500000","0108","Inland Aquaculture production","Miscellaneous freshwater fishes","units"],[2013,"13020201","45","3593","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2013,"13020201","3","4002","0103","Industrial Marine Capture production","Marine fishes","ton"],[2013,"13020201","37","333","0103","Industrial Marine Capture production","Miscellaneous pelagic fishes","ton"],[2013,"13020201","34","382","0103","Industrial Marine Capture production","Miscellaneous demersal fishes","ton"],[2013,"13020201","36","32525","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2013,"13020202","3","1","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2013,"13020203","45","4031.767","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2013,"13020203","42","3909.489","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2013,"13020203","43","589","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2013,"13020203","3","34069","0103","Traditional Marine Capture production","Marine fishes","ton"],[2013,"13020203","38","482","0103","Traditional Marine Capture production","Sharks, rays, chimaeras","ton"],[2013,"13020203","76","2566","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2013,"13020203","56","232.76","0103","Traditional Marine Capture production","Clams, cockles, arkshells","ton"],[2013,"13020203","13","1343","0103","Traditional Marine Capture production","Miscellaneous freshwater fishes","ton"],[2013,"13020203","57","1739","0103","Traditional Marine Capture production","Squids, cuttlefishes, octopuses","ton"],[2013,"13020203","41","2158.35","0103","Traditional Marine Capture production","Freshwater crustaceans","ton"],[2013,"13020203","25","9.874","0103","Traditional Marine Capture production","Miscellaneous diadromous fishes","ton"],[2013,"13020203","55","2119.967","0103","Traditional Marine Capture production","Scallops, pectens","ton"],[2013,"13020203","34","30","0103","Traditional Marine Capture production","Miscellaneous demersal fishes","ton"],[2013,"13020203","53","772.47","0103","Traditional Marine Capture production","Oysters","ton"],[2013,"13020203","33","0.159","0103","Traditional Marine Capture production","Miscellaneous coastal fishes","ton"],[2013,"13020203","36","86.1","0103","Traditional Marine Capture production","Tunas, bonitos, billfishes","ton"],[2013,"13020203","82","11538","0108","Traditional Marine Capture production","Corals","units"],[2013,"13010201","45","5744","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2013,"13010201","92","3574.96","0103","Industrial Marine Aquaculture production","Red seaweeds","ton"],[2013,"13010201","3","23143.327","0103","Industrial Marine Aquaculture production","Marine fishes","ton"],[2013,"13010201","13","253","0103","Industrial Marine Aquaculture production","Miscellaneous freshwater fishes","ton"],[2013,"13010201","25","219.929","0103","Industrial Marine Aquaculture production","Miscellaneous diadromous fishes","ton"],[2013,"13010201","71","2.38","0103","Industrial Marine Aquaculture production","Frogs and other amphibians","ton"],[2013,"13010201","41","151","0103","Industrial Marine Aquaculture production","Freshwater crustaceans","ton"],[2013,"130101","13","996","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2012,"13020201","45","3782","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2012,"13020201","3","4026","0103","Industrial Marine Capture production","Marine fishes","ton"],[2012,"13020201","34","136.26","0103","Industrial Marine Capture production","Miscellaneous demersal fishes","ton"],[2012,"13020201","36","23746","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2012,"13020202","45","6.2","0103","Artisanal Marine Capture production","Shrimps, prawns","ton"],[2012,"13020202","34","120.31","0103","Artisanal Marine Capture production","Miscellaneous demersal fishes","ton"],[2012,"13020202","3","162.96","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2012,"13020202","42","543.95","0103","Artisanal Marine Capture production","Crabs, sea-spiders","ton"],[2012,"13020202","57","0.12","0103","Artisanal Marine Capture production","Squids, cuttlefishes, octopuses","ton"],[2012,"13020203","45","1195.38","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2012,"13020203","42","2280.39","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2012,"13020203","43","254","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2012,"13020203","76","699.34","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2012,"13020203","3","45136","0103","Traditional Marine Capture production","Marine fishes","ton"],[2012,"13020203","38","2977","0103","Traditional Marine Capture production","Sharks, rays, chimaeras","ton"],[2012,"13020203","36","44.62","0103","Traditional Marine Capture production","Tunas, bonitos, billfishes","ton"],[2012,"13020203","55","349.8","0103","Traditional Marine Capture production","Scallops, pectens","ton"],[2012,"13020203","57","6206","0103","Traditional Marine Capture production","Squids, cuttlefishes, octopuses","ton"],[2012,"13020203","25","13.39","0103","Traditional Marine Capture production","Miscellaneous diadromous fishes","ton"],[2012,"13020203","41","2922.36","0103","Traditional Marine Capture production","Freshwater crustaceans","ton"],[2012,"13020203","13","1226","0103","Traditional Marine Capture production","Miscellaneous freshwater fishes","ton"],[2012,"13020203","53","781.1","0103","Traditional Marine Capture production","Oysters","ton"],[2012,"13020203","34","6.394","0103","Traditional Marine Capture production","Miscellaneous demersal fishes","ton"],[2012,"13020203","82","0.98","0103","Traditional Marine Capture production","Corals","ton"],[2012,"13020203","56","209.94","0103","Traditional Marine Capture production","Clams, cockles, arkshells","ton"],[2012,"13020203","72","63.5","0103","Traditional Marine Capture production","Turtles","ton"],[2012,"13010201","45","5468","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2012,"13010201","92","1399.79","0103","Industrial Marine Aquaculture production","Red seaweeds","ton"],[2012,"13010201","3","14340.06","0103","Industrial Marine Aquaculture production","Marine fishes","ton"],[2012,"13010201","13","1061","0103","Industrial Marine Aquaculture production","Miscellaneous freshwater fishes","ton"],[2012,"13010201","25","214.846","0103","Industrial Marine Aquaculture production","Miscellaneous diadromous fishes","ton"],[2012,"13010201","41","271","0103","Industrial Marine Aquaculture production","Freshwater crustaceans","ton"],[2012,"130101","13","3598","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2011,"13020201","45","4332","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2011,"13020201","3","3077","0103","Industrial Marine Capture production","Marine fishes","ton"],[2011,"13020201","36","19045","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2011,"13020202","3","75.44","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2011,"13020202","42","86.46","0103","Artisanal Marine Capture production","Crabs, sea-spiders","ton"],[2011,"13020203","45","1746","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2011,"13020203","42","3700","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2011,"13020203","43","353.58","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2011,"13020203","76","890.08","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2011,"13020203","92","1699","0103","Traditional Marine Capture production","Red seaweeds","ton"],[2011,"13020203","3","33090","0103","Traditional Marine Capture production","Marine fishes","ton"],[2011,"13020203","57","1765.24","0103","Traditional Marine Capture production","Squids, cuttlefishes, octopuses","ton"],[2011,"13020203","53","477.38","0103","Traditional Marine Capture production","Oysters","ton"],[2011,"13010201","45","6878","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2011,"130201","1","17486","0103","Inland Capture production","Freshwater fishes","ton"],[2011,"130101","13","3404","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2010,"13020201","45","3250","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2010,"13020201","3","2386","0103","Industrial Marine Capture production","Marine fishes","ton"],[2010,"13020201","36","14000","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2010,"13020202","3","195.74","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2010,"13020203","45","3450","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2010,"13020203","42","2019.4","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2010,"13020203","43","367.2","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2010,"13020203","76","415","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2010,"13020203","92","3600","0103","Traditional Marine Capture production","Red seaweeds","ton"],[2010,"13020203","3","56000","0103","Traditional Marine Capture production","Marine fishes","ton"],[2010,"13010201","45","2000","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2010,"130201","1","30000","0103","Inland Capture production","Freshwater fishes","ton"],[2010,"130101","13","3500","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2009,"13020201","45","3512","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2009,"13020201","3","1526","0103","Industrial Marine Capture production","Marine fishes","ton"],[2009,"13020201","36","4644","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2009,"13020202","45","131","0103","Artisanal Marine Capture production","Shrimps, prawns","ton"],[2009,"13020202","3","87","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2009,"13020203","45","3450","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2009,"13020203","42","2580","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2009,"13020203","43","432","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2009,"13020203","76","302","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2009,"13020203","92","3600","0103","Traditional Marine Capture production","Red seaweeds","ton"],[2009,"13020203","3","56000","0103","Traditional Marine Capture production","Marine fishes","ton"],[2009,"13010201","45","3260","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2009,"130201","1","30000","0103","Inland Capture production","Freshwater fishes","ton"],[2009,"130101","13","2828","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2008,"13020201","45","2922","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2008,"13020201","3","4304","0103","Industrial Marine Capture production","Marine fishes","ton"],[2008,"13020201","36","10000","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2008,"13020202","45","311","0103","Artisanal Marine Capture production","Shrimps, prawns","ton"],[2008,"13020202","3","37","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2008,"13020203","45","3450","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2008,"13020203","42","1370","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2008,"13020203","43","450","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2008,"13020203","76","470","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2008,"13020203","92","3650","0103","Traditional Marine Capture production","Red seaweeds","ton"],[2008,"13020203","3","56000","0103","Traditional Marine Capture production","Marine fishes","ton"],[2008,"13010201","45","8000","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2008,"130201","1","30000","0103","Inland Capture production","Freshwater fishes","ton"],[2008,"130101","13","2630","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2007,"13020201","45","4679","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2007,"13020201","3","4726","0103","Industrial Marine Capture production","Marine fishes","ton"],[2007,"13020201","36","10000","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2007,"13020202","45","401","0103","Artisanal Marine Capture production","Shrimps, prawns","ton"],[2007,"13020202","3","58","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2007,"13020203","45","3450","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2007,"13020203","42","1370","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2007,"13020203","43","380","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2007,"13020203","76","470","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2007,"13020203","92","3650","0103","Traditional Marine Capture production","Red seaweeds","ton"],[2007,"13020203","3","55000","0103","Traditional Marine Capture production","Marine fishes","ton"],[2007,"13010201","45","8457","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2007,"130201","1","30000","0103","Inland Capture production","Freshwater fishes","ton"],[2007,"130101","13","2090","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2006,"13020201","45","5442","0103","Industrial Marine Capture production","Shrimps, prawns","ton"],[2006,"13020201","3","5828","0103","Industrial Marine Capture production","Marine fishes","ton"],[2006,"13020201","36","10000","0103","Industrial Marine Capture production","Tunas, bonitos, billfishes","ton"],[2006,"13020202","45","490","0103","Artisanal Marine Capture production","Shrimps, prawns","ton"],[2006,"13020202","3","57","0103","Artisanal Marine Capture production","Marine fishes","ton"],[2006,"13020203","45","3450","0103","Traditional Marine Capture production","Shrimps, prawns","ton"],[2006,"13020203","42","1600","0103","Traditional Marine Capture production","Crabs, sea-spiders","ton"],[2006,"13020203","43","550","0103","Traditional Marine Capture production","Lobsters, spiny-rock lobsters","ton"],[2006,"13020203","76","850","0103","Traditional Marine Capture production","Sea-urchins and other echinoderms","ton"],[2006,"13020203","92","5300","0103","Traditional Marine Capture production","Red seaweeds","ton"],[2006,"13020203","3","55000","0103","Traditional Marine Capture production","Marine fishes","ton"],[2006,"13010201","45","6776","0103","Industrial Marine Aquaculture production","Shrimps, prawns","ton"],[2006,"130201","1","30000","0103","Inland Capture production","Freshwater fishes","ton"],[2006,"130101","13","3025","0103","Inland Aquaculture production","Miscellaneous freshwater fishes","ton"],[2014,"0301","38","21.389","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2014,"0301","25","49","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2014,"0301","13","0.788","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2014,"0301","57","1380","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2014,"0301","41","11.087","0103","Export quantity","Freshwater crustaceans","ton"],[2014,"0301","36","8321.79763","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2014,"0301","42","3401.2456","0103","Export quantity","Crabs, sea-spiders","ton"],[2014,"0301","45","7043","0103","Export quantity","Shrimps, prawns","ton"],[2014,"0301","43","235","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2014,"0301","77","19.6","0103","Export quantity","Miscellaneous aquatic invertebrates","ton"],[2014,"0301","3","2023.413564","0103","Export quantity","Marine fishes","ton"],[2014,"0301","76","372.366","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2014,"0301","34","4.355","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2013,"0301","38","33.216","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2013,"0301","25","69","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2013,"0301","13","1.774","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2013,"0301","57","1485","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2013,"0301","41","3.5755","0103","Export quantity","Freshwater crustaceans","ton"],[2013,"0301","36","7976.34878000001","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2013,"0301","42","1965.9459","0103","Export quantity","Crabs, sea-spiders","ton"],[2013,"0301","45","7674","0103","Export quantity","Shrimps, prawns","ton"],[2013,"0301","43","239","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2013,"0301","3","2404.056288","0103","Export quantity","Marine fishes","ton"],[2013,"0301","76","396.58705","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2013,"0301","34","5.114","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2012,"0301","38","29.101","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2012,"0301","25","25","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2012,"0301","13","2.2613","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2012,"0301","57","1438","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2012,"0301","41","8","0103","Export quantity","Freshwater crustaceans","ton"],[2012,"0301","36","10517","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2012,"0301","42","1100.15187","0103","Export quantity","Crabs, sea-spiders","ton"],[2012,"0301","45","8548","0103","Export quantity","Shrimps, prawns","ton"],[2012,"0301","43","171.82888","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2012,"0301","3","1093.38145","0103","Export quantity","Marine fishes","ton"],[2012,"0301","76","384.484","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2012,"0301","34","4.6244","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2011,"0301","25","35","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2011,"0301","41","0.566","0103","Export quantity","Freshwater crustaceans","ton"],[2011,"0301","42","1276.03967","0103","Export quantity","Crabs, sea-spiders","ton"],[2011,"0301","45","8837.24985","0103","Export quantity","Shrimps, prawns","ton"],[2011,"0301","33","0.003","0103","Export quantity","Miscellaneous coastal fishes","ton"],[2011,"0301","43","222","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2011,"0301","3","2107.46236","0103","Export quantity","Marine fishes","ton"],[2011,"0301","57","1586","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2011,"0301","76","490","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2011,"0301","34","5.5418","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2011,"0301","36","10223.41454","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2010,"0301","25","42","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2010,"0301","13","0.323","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2010,"0301","41","0.0005","0103","Export quantity","Freshwater crustaceans","ton"],[2010,"0301","42","917.91754","0103","Export quantity","Crabs, sea-spiders","ton"],[2010,"0301","45","7696.78214","0103","Export quantity","Shrimps, prawns","ton"],[2010,"0301","43","213","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2010,"0301","3","4436.883423","0103","Export quantity","Marine fishes","ton"],[2010,"0301","57","1261","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2010,"0301","76","412.485","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2010,"0301","34","5.313","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2010,"0301","36","6712.58605","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2010,"0301","38","31.90245","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2009,"0301","56","12.172","0103","Export quantity","Clams, cockles, arkshells","ton"],[2009,"0301","38","43.315","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2009,"0301","25","15","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2009,"0301","13","0.307","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2009,"0301","57","1381","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2009,"0301","43","132","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2009,"0301","36","5449.633885","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2009,"0301","42","856.25498","0103","Export quantity","Crabs, sea-spiders","ton"],[2009,"0301","45","8470.47966945","0103","Export quantity","Shrimps, prawns","ton"],[2009,"0301","3","1044.880488","0103","Export quantity","Marine fishes","ton"],[2009,"0301","76","301.9319","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2009,"0301","34","3.0289","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2008,"0301","25","17","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2008,"0301","13","1.056","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2008,"0301","57","1208","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2008,"0301","43","213","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2008,"0301","42","1129.185572","0103","Export quantity","Crabs, sea-spiders","ton"],[2008,"0301","45","10239.41458","0103","Export quantity","Shrimps, prawns","ton"],[2008,"0301","33","0.0015","0103","Export quantity","Miscellaneous coastal fishes","ton"],[2008,"0301","3","619.04584","0103","Export quantity","Marine fishes","ton"],[2008,"0301","38","37.7322","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2008,"0301","36","7775.01777000001","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2008,"0301","76","309.3411","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2008,"0301","34","4.2005","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2007,"0301","25","13","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2007,"0301","13","15.824","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2007,"0301","42","987.24289","0103","Export quantity","Crabs, sea-spiders","ton"],[2007,"0301","45","12494.118","0103","Export quantity","Shrimps, prawns","ton"],[2007,"0301","33","0.0008","0103","Export quantity","Miscellaneous coastal fishes","ton"],[2007,"0301","43","285","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2007,"0301","3","1130","0103","Export quantity","Marine fishes","ton"],[2007,"0301","57","1333","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2007,"0301","38","37.8927","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2007,"0301","36","11686.673454","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2007,"0301","76","293.5001","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2007,"0301","34","4.039","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2006,"0301","25","10","0103","Export quantity","Miscellaneous diadromous fishes","ton"],[2006,"0301","13","8.702","0103","Export quantity","Miscellaneous freshwater fishes","ton"],[2006,"0301","43","222","0103","Export quantity","Lobsters, spiny-rock lobsters","ton"],[2006,"0301","36","16262","0103","Export quantity","Tunas, bonitos, billfishes","ton"],[2006,"0301","42","741.80796","0103","Export quantity","Crabs, sea-spiders","ton"],[2006,"0301","45","12050.83806","0103","Export quantity","Shrimps, prawns","ton"],[2006,"0301","56","30.33887","0103","Export quantity","Clams, cockles, arkshells","ton"],[2006,"0301","3","1175","0103","Export quantity","Marine fishes","ton"],[2006,"0301","57","1116","0103","Export quantity","Squids, cuttlefishes, octopuses","ton"],[2006,"0301","38","24.1297","0103","Export quantity","Sharks, rays, chimaeras","ton"],[2006,"0301","76","198.6118","0103","Export quantity","Sea-urchins and other echinoderms","ton"],[2006,"0301","34","1.49","0103","Export quantity","Miscellaneous demersal fishes","ton"],[2014,"0302","38","601870673.9","0105","Export value","Sharks, rays, chimaeras","local currency"],[2014,"0302","25","1696917554","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2014,"0302","13","9400456.8","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2014,"0302","57","10464027344","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2014,"0302","41","144124866.1","0105","Export value","Freshwater crustaceans","local currency"],[2014,"0302","43","8612112453","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2014,"0302","36","95111541315.0199","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2014,"0302","42","49484178387.91","0105","Export value","Crabs, sea-spiders","local currency"],[2014,"0302","45","184359108410","0105","Export value","Shrimps, prawns","local currency"],[2014,"0302","77","33075000","0105","Export value","Miscellaneous aquatic invertebrates","local currency"],[2014,"0302","3","24123893644.71","0105","Export value","Marine fishes","local currency"],[2014,"0302","76","4266485012.35","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2014,"0302","34","109360710.27","0105","Export value","Miscellaneous demersal fishes","local currency"],[2013,"0302","38","559438734.15","0105","Export value","Sharks, rays, chimaeras","local currency"],[2013,"0302","25","2372701188","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2013,"0302","13","23944840","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2013,"0302","57","10167465761","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2013,"0302","41","39122083","0105","Export value","Freshwater crustaceans","local currency"],[2013,"0302","36","97225376369.9798","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2013,"0302","42","26685408850.658","0105","Export value","Crabs, sea-spiders","local currency"],[2013,"0302","45","186334931252","0105","Export value","Shrimps, prawns","local currency"],[2013,"0302","43","8107520828","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2013,"0302","3","38073278859.007","0105","Export value","Marine fishes","local currency"],[2013,"0302","76","4287583544.46","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2013,"0302","34","128235219.17","0105","Export value","Miscellaneous demersal fishes","local currency"],[2012,"0302","38","882627330.99","0105","Export value","Sharks, rays, chimaeras","local currency"],[2012,"0302","25","1467427748","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2012,"0302","13","41197409.969","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2012,"0302","57","10462280278","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2012,"0302","41","88129871","0105","Export value","Freshwater crustaceans","local currency"],[2012,"0302","43","5663676179","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2012,"0302","36","120032177956","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2012,"0302","42","10651761915.04","0105","Export value","Crabs, sea-spiders","local currency"],[2012,"0302","45","188877842443","0105","Export value","Shrimps, prawns","local currency"],[2012,"0302","3","12010838722.24","0105","Export value","Marine fishes","local currency"],[2012,"0302","76","4543908774.08","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2012,"0302","34","125634195.892","0105","Export value","Miscellaneous demersal fishes","local currency"],[2011,"0302","25","863589163","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2011,"0302","57","1064366091","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2011,"0302","41","929324.43","0105","Export value","Freshwater crustaceans","local currency"],[2011,"0302","43","6696737701","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2011,"0302","42","11009339536.098","0105","Export value","Crabs, sea-spiders","local currency"],[2011,"0302","45","187035989280.327","0105","Export value","Shrimps, prawns","local currency"],[2011,"0302","3","24344699605.72","0105","Export value","Marine fishes","local currency"],[2011,"0302","76","8253956331.8","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2011,"0302","38","1265543690.3","0105","Export value","Sharks, rays, chimaeras","local currency"],[2011,"0302","34","88801184.93","0105","Export value","Miscellaneous demersal fishes","local currency"],[2011,"0302","36","74993877082.4731","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2010,"0302","25","1058589700","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2010,"0302","13","4320000","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2010,"0302","57","8323412093","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2010,"0302","43","6734351833","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2010,"0302","42","8258408369.356","0105","Export value","Crabs, sea-spiders","local currency"],[2010,"0302","45","188018786026.936","0105","Export value","Shrimps, prawns","local currency"],[2010,"0302","3","45100950867.2938","0105","Export value","Marine fishes","local currency"],[2010,"0302","76","4180707031.3","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2010,"0302","34","210107848.2","0105","Export value","Miscellaneous demersal fishes","local currency"],[2010,"0302","36","43711861099.308","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2010,"0302","38","890756369.6","0105","Export value","Sharks, rays, chimaeras","local currency"],[2009,"0302","56","76421760","0105","Export value","Clams, cockles, arkshells","local currency"],[2009,"0302","38","896138230.1","0105","Export value","Sharks, rays, chimaeras","local currency"],[2009,"0302","25","812662640","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2009,"0302","13","3800000","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2009,"0302","57","11649217832","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2009,"0302","43","3714055584","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2009,"0302","36","39329148310.9714","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2009,"0302","42","7871121338.95","0105","Export value","Crabs, sea-spiders","local currency"],[2009,"0302","45","154696448588.512","0105","Export value","Shrimps, prawns","local currency"],[2009,"0302","3","11676127576.08","0105","Export value","Marine fishes","local currency"],[2009,"0302","76","3403231290.5","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2009,"0302","34","70019792","0105","Export value","Miscellaneous demersal fishes","local currency"],[2008,"0302","25","445445546","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2008,"0302","13","12121600","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2008,"0302","57","6808556454","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2008,"0302","43","6695149624","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2008,"0302","42","9110680223.774","0105","Export value","Crabs, sea-spiders","local currency"],[2008,"0302","45","201018396742.088","0105","Export value","Shrimps, prawns","local currency"],[2008,"0302","3","13093674738.448","0105","Export value","Marine fishes","local currency"],[2008,"0302","38","866548361.9","0105","Export value","Sharks, rays, chimaeras","local currency"],[2008,"0302","36","53805522576.44","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2008,"0302","76","4223683836.61","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2008,"0302","34","87549732.3","0105","Export value","Miscellaneous demersal fishes","local currency"],[2007,"0302","25","673200016","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2007,"0302","13","185578681.6","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2007,"0302","57","7860311629","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2007,"0302","43","7435763184","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2007,"0302","42","7336510848.536","0105","Export value","Crabs, sea-spiders","local currency"],[2007,"0302","45","262532635128.899","0105","Export value","Shrimps, prawns","local currency"],[2007,"0302","3","22563038494","0105","Export value","Marine fishes","local currency"],[2007,"0302","38","914068499.19","0105","Export value","Sharks, rays, chimaeras","local currency"],[2007,"0302","36","74752203187.9701","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2007,"0302","76","3234581133","0105","Export value","Sea-urchins and other echinoderms","local currency"],[2007,"0302","34","72076121","0105","Export value","Miscellaneous demersal fishes","local currency"],[2006,"0302","25","402965340","0105","Export value","Miscellaneous diadromous fishes","local currency"],[2006,"0302","13","80992500","0105","Export value","Miscellaneous freshwater fishes","local currency"],[2006,"0302","57","9604804676","0105","Export value","Squids, cuttlefishes, octopuses","local currency"],[2006,"0302","43","10642674687","0105","Export value","Lobsters, spiny-rock lobsters","local currency"],[2006,"0302","34","23590776","0105","Export value","Miscellaneous demersal fishes","local currency"],[2006,"0302","36","87526405594","0105","Export value","Tunas, bonitos, billfishes","local currency"],[2006,"0302","42","4687617552.25","0105","Export value","Crabs, sea-spiders","local currency"],[2006,"0302","45","228046248530.56","0105","Export value","Shrimps, prawns","local currency"],[2006,"0302","56","193204071","0105","Export value","Clams, cockles, arkshells","local currency"],[2006,"0302","3","11075249075","0105","Export value","Marine fishes","local currency"],[2006,"0302","38","756959971.12","0105","Export value","Sharks, rays, chimaeras","local currency"],[2006,"0302","76","2579525164","0105","Export value","Sea-urchins and other echinoderms","local currency"]],"size":397},'')).to.be.equal('Barbara')
    });

});

// describe("Pivotator", function () {
//
//     var P = PivotatorUtils();
//
//     it("should have 'test' property", function () {
//         expect(model).to.have.ownProperty('test')
//     });
//
//     //Giusto
//     it("test should be equal to 'Barbara'", function () {
//         expect(P.toFilter(
//             {
//             "metadata" : {
//                 "language" : {
//                     "version" : "1998",
//                     "codes" : [ {
//                         "code" : "eng",
//                         "label" : {
//                             "EN" : "English"
//                         }
//                     } ],
//                     "idCodeList" : "ISO639-2",
//                     "extendedName" : {
//                         "EN" : "International Standard Organization - Language"
//                     }
//                 },
//                 "creationDate" : 1466550000000,
//                 "dsd" : {
//                     "contextSystem" : "cstat_mdg",
//                     "datasources" : [ "D3S" ],
//                     "rid" : "66_2890",
//                     "columns" : [ {
//                         "dataType" : "year",
//                         "key" : true,
//                         "id" : "DIMENSION0",
//                         "title" : {
//                             "EN" : "ANNEE"
//                         },
//                         "values" : {
//                             "timeList" : [ 2009, 2010, 2011, 2012, 2013, 2014, 2015 ]
//                         },
//                         "subject" : "time"
//                     }, {
//                         "dataType" : "code",
//                         "key" : true,
//                         "id" : "DIMENSION1",
//                         "title" : {
//                             "EN" : "INDICATEUR"
//                         },
//                         "values" : {
//                             "codes" : [ {
//                                 "codes" : [ {
//                                     "code" : "0301",
//                                     "label" : {
//                                         "EN" : "Export quantity"
//                                     }
//                                 } ],
//                                 "idCodeList" : "CountrySTAT_Indicators",
//                                 "extendedName" : {
//                                     "EN" : "CountrySTAT Indicators"
//                                 }
//                             } ]
//                         },
//                         "domain" : {
//                             "codes" : [ {
//                                 "idCodeList" : "CountrySTAT_Indicators",
//                                 "extendedName" : {
//                                     "EN" : "CountrySTAT Indicators"
//                                 }
//                             } ]
//                         },
//                         "subject" : "indicator"
//                     }, {
//                         "dataType" : "code",
//                         "key" : true,
//                         "id" : "DIMENSION2",
//                         "title" : {
//                             "EN" : "PRODUIT"
//                         },
//                         "values" : {
//                             "codes" : [ {
//                                 "version" : "2.1",
//                                 "codes" : [ {
//                                     "code" : "01802",
//                                     "label" : {
//                                         "EN" : "Sugar cane"
//                                     }
//                                 } ],
//                                 "idCodeList" : "CPC",
//                                 "extendedName" : {
//                                     "EN" : "Central Product Classification"
//                                 }
//                             } ]
//                         },
//                         "domain" : {
//                             "codes" : [ {
//                                 "version" : "2.1",
//                                 "idCodeList" : "CPC",
//                                 "extendedName" : {
//                                     "EN" : "Central Product Classification"
//                                 }
//                             } ]
//                         },
//                         "subject" : "item"
//                     }, {
//                         "dataType" : "number",
//                         "key" : false,
//                         "id" : "VALUE0",
//                         "title" : {
//                             "EN" : "VALEUR"
//                         },
//                         "subject" : "value"
//                     }, {
//                         "dataType" : "text",
//                         "key" : false,
//                         "id" : "OTHER0",
//                         "title" : {
//                             "EN" : "FLAG"
//                         },
//                         "subject" : "flag"
//                     }, {
//                         "dataType" : "code",
//                         "key" : false,
//                         "id" : "OTHER1",
//                         "title" : {
//                             "EN" : "UNITE"
//                         },
//                         "values" : {
//                             "codes" : [ {
//                                 "codes" : [ {
//                                     "code" : "0103",
//                                     "label" : {
//                                         "EN" : "ton"
//                                     }
//                                 } ],
//                                 "idCodeList" : "CountrySTAT_UM",
//                                 "extendedName" : {
//                                     "EN" : "Units of measurement"
//                                 }
//                             } ]
//                         },
//                         "domain" : {
//                             "codes" : [ {
//                                 "idCodeList" : "CountrySTAT_UM",
//                                 "extendedName" : {
//                                     "EN" : "Units of measurement"
//                                 }
//                             } ]
//                         },
//                         "subject" : "um"
//                     } ]
//                 },
//                 "title" : {
//                     "EN" : "EXPORTATION DU SUCRE A MADAGASCAR"
//                 },
//                 "rid" : "12_1279",
//                 "uid" : "D3S_23884590166739340879104681457744394357",
//                 "meContent" : {
//                     "description" : {
//                         "EN" : "Base de donnÃ©es sur l'exportation du sucre Ã  Madagascar"
//                     },
//                     "resourceRepresentationType" : "dataset",
//                     "keywords" : [ "Exportation, sucre, Madagascar" ],
//                     "statisticalConceptsDefinitions" : {
//                         "EN" : "base de donnÃ©es sur l'exportation"
//                     },
//                     "seCoverage" : {
//                         "coverageSectors" : {
//                             "codes" : [ {
//                                 "code" : "0301",
//                                 "label" : {
//                                     "EN" : "Export quantity"
//                                 }
//                             } ],
//                             "idCodeList" : "CountrySTAT_Indicators",
//                             "extendedName" : {
//                                 "EN" : "CountrySTAT Indicators"
//                             }
//                         },
//                         "coverageSectorsDetails" : {
//                             "EN" : "COMMERCE"
//                         },
//                         "coverageTime" : {
//                             "from" : 1230764400000,
//                             "to" : 1451516400000
//                         },
//                         "coverageGeographic" : {
//                             "version" : "2014",
//                             "codes" : [ {
//                                 "code" : "150",
//                                 "label" : {
//                                     "PT" : "MadagÃ¡scar",
//                                     "FR" : "Madagascar",
//                                     "AR" : "Ù…Ø¯ØºØ´Ù‚Ø±",
//                                     "EN" : "Madagascar",
//                                     "RU" : "ÐœÐ°Ð´Ð°Ð³Ð°ÑÐºÐ°Ñ€",
//                                     "ES" : "Madagascar",
//                                     "ZH" : "é©¬è¾¾åŠ æ–¯åŠ "
//                                 }
//                             } ],
//                             "idCodeList" : "GAUL0",
//                             "extendedName" : {
//                                 "EN" : "Global administrative unit layer country level"
//                             }
//                         }
//                     },
//                     "resourceRepresentationTypeLabel" : {
//                         "EN" : "Dataset"
//                     }
//                 },
//                 "characterSet" : {
//                     "codes" : [ {
//                         "code" : "106",
//                         "label" : {
//                             "EN" : "UTF-8"
//                         }
//                     } ],
//                     "idCodeList" : "IANAcharacterSet",
//                     "extendedName" : {
//                         "EN" : "Internet Assigned Numbers Authority codelist"
//                     }
//                 },
//                 "metadataStandardName" : "FENIX",
//                 "metadataStandardVersion" : "1.0",
//                 "metadataLanguage" : {
//                     "version" : "1998",
//                     "codes" : [ {
//                         "code" : "fre",
//                         "label" : {
//                             "EN" : "French"
//                         }
//                     } ],
//                     "idCodeList" : "ISO639-2",
//                     "extendedName" : {
//                         "EN" : "International Standard Organization - Language"
//                     }
//                 },
//                 "contacts" : [ {
//                     "position" : {
//                         "EN" : "CHEF DE DIVISION INFORMATION ET OBSERVATOIRE DU SUCRE"
//                     },
//                     "organization" : {
//                         "EN" : "CENTRE MALGACHE DE LA CANNE ET DU SUCRE"
//                     },
//                     "role" : "owner",
//                     "contactInfo" : {
//                         "address" : "III L 111 FIADANANA TSIMBAZAZA - 101 ANTANANARIVO - MADAGASCAR",
//                         "phone" : "+261 20 22 557 45 ; +261 33 03 361 51",
//                         "emailAddress" : "div.info@canneasucre.mg",
//                         "hoursOfService" : {
//                             "EN" : "08 h 00 Ã  16 h 00"
//                         }
//                     },
//                     "pointOfContact" : "RAKOTONOELY Tantely",
//                     "organizationUnit" : {
//                         "EN" : "SERVICE INFORAMTIONS, OBSERVATOIRE DU SUCRE, PROMOTIONS ET ETUDES"
//                     },
//                     "roleLabel" : {
//                         "EN" : "Owner"
//                     }
//                 } ],
//                 "meInstitutionalMandate" : { },
//                 "meDataQuality" : { },
//                 "meMaintenance" : {
//                     "seUpdate" : {
//                         "updatePeriodicity" : {
//                             "version" : "1.0",
//                             "codes" : [ { } ],
//                             "idCodeList" : "FAO_Period",
//                             "extendedName" : {
//                                 "EN" : "FAO Reference Period"
//                             }
//                         },
//                         "updateDate" : 1474559956895
//                     }
//                 },
//                 "meStatisticalProcessing" : {
//                     "seDataSource" : {
//                         "sePrimaryDataCollection" : {
//                             "dataCollection" : {
//                                 "EN" : "EXPORTATION DU SUCRE"
//                             },
//                             "dataCollector" : {
//                                 "position" : {
//                                     "EN" : "CHEF DE DIVISION INFORMATION ET OBSERVATOIRE DU SUCRE"
//                                 },
//                                 "organization" : {
//                                     "EN" : "CENTRE MALGACHE DE LA CANNE ET DU SUCRE"
//                                 },
//                                 "role" : "distributor",
//                                 "contactInfo" : {
//                                     "address" : "III L 111 Fiadanana Tsimbazaza - 101 Antananarivo - Madagascar",
//                                     "phone" : "+261 20 22 557 45 ; +261 33 03 361 51",
//                                     "emailAddress" : "div.info@canneasucre.mg"
//                                 },
//                                 "pointOfContact" : "RAKOTONOELY Tantely Joseph Hermann",
//                                 "organizationUnit" : {
//                                     "EN" : "SERVICE INFORMATIONS, OBSERVATOIRE DU SUCRE, PROMOTIONS ET ETUDES"
//                                 },
//                                 "roleLabel" : {
//                                     "EN" : "Distributor"
//                                 }
//                             },
//                             "typeOfCollection" : {
//                                 "version" : "1.0",
//                                 "codes" : [ {
//                                     "code" : "06",
//                                     "label" : {
//                                         "EN" : "Administrative data"
//                                     }
//                                 } ],
//                                 "idCodeList" : "FAOSTAT_Collection",
//                                 "extendedName" : {
//                                     "EN" : "Type or usage of  the data collection"
//                                 }
//                             },
//                             "collectionPeriodicity" : {
//                                 "version" : "1.0",
//                                 "codes" : [ {
//                                     "code" : "9",
//                                     "label" : {
//                                         "EN" : "Year"
//                                     }
//                                 } ],
//                                 "idCodeList" : "FAO_Period",
//                                 "extendedName" : {
//                                     "EN" : "FAO Reference Period"
//                                 }
//                             }
//                         }
//                     },
//                     "seDataCompilation" : {
//                         "dataAdjustment" : {
//                             "version" : "1.1",
//                             "codes" : [ { } ],
//                             "idCodeList" : "CL_ADJUSTMENT",
//                             "extendedName" : {
//                                 "EN" : "Adjustment code list (ESTAT)"
//                             }
//                         }
//                     }
//                 }
//             },
//             "data" : [ [ 2009, "0301", "01802", 26756.4, null, "0103" ], [ 2010, "0301", "01802", 29400.0, "", "0103" ], [ 2011, "0301", "01802", 21244.0, "", "0103" ], [ 2012, "0301", "01802", 40000.0, "", "0103" ], [ 2013, "0301", "01802", 66391.0, "", "0103" ], [ 2014, "0301", "01802", 31918.0, "", "0103" ], [ 2015, "0301", "01802", 20524.0, "", "0103" ] ],
//             "size" : 7
//         }, '')).to.be.equal('Barbara')
//     });
//
// });