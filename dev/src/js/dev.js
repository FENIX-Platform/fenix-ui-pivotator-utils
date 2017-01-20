define([
    'loglevel',
    '../../../src/js/index',
    "../models/dataset"
], function (log, Utils, Model) {

    'use strict';

    function Dev() {

        console.clear();

        //trace, debug, info, warn, error, silent
        //log.setLevel('trace');
        log.setLevel('silent');

        this._importThirdPartyCss();

        this.start();

    }

    Dev.prototype.start = function () {

        log.trace("Dev started");

        this._render();

    };

    Dev.prototype._render = function () {

        this.fenixTool = new Utils();

        var config =this.fenixTool.toFilter(Model, {
            lang : "EN"
        });

        console.log(config)

    };

    Dev.prototype._importThirdPartyCss = function () {

        //Bootstrap
        require('bootstrap/dist/css/bootstrap.css');

    };

    return new Dev();

});