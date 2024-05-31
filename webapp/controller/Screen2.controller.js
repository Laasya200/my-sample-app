sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";
        return Controller.extend("zform.controller.Screen2", {
            onInit: function () {
                var oModel = new sap.ui.model.json.JSONModel({
                    name: "",
                    email: ""
                  });
                  this.getView().setModel(oModel);
            },
            toScreen1: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("screen1");
              },
              
        });
    });