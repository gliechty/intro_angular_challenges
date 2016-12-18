console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
// app.value('start_date', '10/31/2016');

app.controller("WelcomeController", WelcomeController);

function WelcomeController(){
  this.full_name = "Guy Liechty";
  this.age = 26;
  this.city = "Denver";
  this.state="Colorado";
  this.shout = function(input){
  		input = input || '';
		var out = input.toUpperCase();
		return out + "!";
	};
}

app.controller("ClassController", ClassController);

function ClassController(){
	this.class_name = "Big Nick's Cult of Zebulon Online";
	this.enrolled_students = 10;
	this.start_date = '10/31/2016';
	this.end_date = '02/02/2017';
	this.daysRemaining = function(){
		var oneDay = 24*60*60*1000
		var current = new Date();
		var end = new Date(2017,1,2);
		console.log(current);
		console.log(end);
		var daysLeft = Math.round(Math.abs((current.getTime()-end.getTime())/(oneDay))+1);
		return daysLeft;
	};
}