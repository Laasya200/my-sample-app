/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "project2/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("project2.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            },
            routes: [{
                name: "Screen1",
                pattern: "",
                target: "screen1"
              }, {
                name: "screen2",
                pattern: "screen2/{name}/{email}",
                target: "screen2"
              }],
              targets: {
                main: {
                  viewName: "Screen1",
                  controlId: "app",
                  controlAggregation: "pages"
                },
                screen1: {
                  viewName: "Screen2",
                  controlId: "app",
                  controlAggregation: "pages"
                }
              }
        });
    }
);