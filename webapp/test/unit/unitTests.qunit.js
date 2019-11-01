/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"Kushagra_23/Kushagra_23/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});