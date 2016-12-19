console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.height = 5.6; // default height in feet
}

app.controller("loanController", loanController);

function loanController(){
	// this.amount = 1;
	// this.apr = 5;
	// this.month= function(){
	// 	month = [];
	// 	for (i=0; i<100; i++){
	// 		month++;
	// 		return month;
	// 	}
	// };
}
