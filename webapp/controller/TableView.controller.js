sap.ui.define([
	"../model/Formatter",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Formatter, Controller, JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("home.kpmg.exercise3.controller.TableView", {
		Formatter: Formatter,
		onInit: function () {},

		onFilterTable: function (oEvent) {
			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Name", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("idProductsTable");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		}

	});
});