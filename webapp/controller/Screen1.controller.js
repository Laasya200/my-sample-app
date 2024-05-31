sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";
    
    return Controller.extend("project2.controller.Screen1", {
        onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel({
                name: "",
                email: "",
                currentAddress: "",
                permanentAddress: "",
                switchState: false // Set default value of the switch to false
            });
            this.getView().setModel(oModel);
            
            // Check if current address is same as permanent address when the app is first loaded
            this.checkAddressMatch();
        },

        toScreen2: function() {
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            var oModel = this.getView().getModel();
            var sName = oModel.getProperty("/name");
            var sEmail = oModel.getProperty("/email");
            var sCurrentAddress = oModel.getProperty("/currentAddress");
            var sPermanentAddress = oModel.getProperty("/permanentAddress");
            var bSwitchState = oModel.getProperty("/switchState");

            console.log("Name:", sName);
            console.log("Email:", sEmail);
            console.log("Current Address:", sCurrentAddress);
            console.log("Permanent Address:", sPermanentAddress);
            console.log("Switch State:", bSwitchState);

            // Check if all required fields are filled or if the switch state is true
            if ((sName && sEmail && sCurrentAddress && sPermanentAddress) || bSwitchState) {
                oRouter.navTo("screen2", { // Pass data as parameters when navigating to Screen2
                    name: sName,
                    email: sEmail
                });
            } else {
                sap.m.MessageToast.show("Please fill in all the details.");
            }
        },

        onSwitchChange: function(oEvent) {
            var bState = oEvent.getParameter("state");
            var oModel = this.getView().getModel();
            oModel.setProperty("/switchState", bState);

            // Check if current address is same as permanent address when the switch state changes
            this.checkAddressMatch();
        },

        checkAddressMatch: function() {
            var oModel = this.getView().getModel();
            var sCurrentAddress = oModel.getProperty("/currentAddress");
            var sPermanentAddress = oModel.getProperty("/permanentAddress");
            var bMatch = sCurrentAddress === sPermanentAddress;
            oModel.setProperty("/switchState", bMatch); // Update switch state based on address match
        },
        onCountryCodeChange: function(oEvent) {
            var sCountryCode = oEvent.getParameter("selectedItem").getKey();
            var oModel = this.getView().getModel();
            var sMobileNumber = oModel.getProperty("/mobileNumber");
            var sFormattedMobileNumber = sCountryCode + sMobileNumber;
            oModel.setProperty("/mobileNumber", sFormattedMobileNumber);
        }
    });
});

