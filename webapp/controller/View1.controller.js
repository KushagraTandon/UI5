sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Kushagra_23.Kushagra_23.controller.View1", {
		onInit: function () {

		},

		handleSearch: function (evt) {
			// create model filter
			var filters = [];
			var query = evt.getParameter("query");
			if (query && query.length > 0) {
				var filter = new sap.ui.model.Filter("", sap.ui.model.FilterOperator.Contains, query);
				filters.push(filter);
			}

			// update list binding
			var list = this.getView().byId("StandardListItem");
			var binding = list.getBinding("items");
			binding.filter(filters);
		},
		VaibhavShakkarwal: function()
		{
			alert("Hello");
		}
		// },
		
		// .KushagraTandon: function(){
				
		// 	}
	});
});