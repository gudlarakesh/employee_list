var app = app || {};

 app.EmployeeList = Backbone.Collection.extend({
 	model: app.Employee,
 	url: '/api/employees'
 });
