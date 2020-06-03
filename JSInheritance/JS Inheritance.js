use strict //1 var createBicyclePrototye = () => { speed= 0; function changeSpeed(param) { 
this.speed = this.speed + param; } return { getSpeed: () => speed, applyBreak: function(decrement) {
	changeSpeed(-1*decrement); }, speedup: function(increment) { changeSpeed(increment); } } }
//2 var createMountainBikePrototye = function(proto) { var object = Object.create(proto);
	object.gear=1; object.setGear = function(gearValue) { this.gear = gearValue; } }
//3 var start = function() { var bicyclePrototype = createBicyclePrototye(); 
	var mountainBike = createMountainBikePrototye(bicyclePrototype); }
 //4 var myPrototypeBike = Object.create(createBicyclePrototye()); myPrototypeBike.speed = 10; 
	 var myMountainBike = Object.create(createMountainBikePrototye()); console.log(myMountainBike.speed); myMountainBike.speedup(20);
	 console.log(myMountainBike.speed); 
 //5 var objectCreationMethods = function() { return {
	createBicyclePrototye: function () { var bickespeed=0; function changeSpeed(param) {
	bickespeed = bickespeed + param; } return { getSpeed: () => bickespeed, applyBreak: function(decrement) {
	changeSpeed(-1*decrement); }, speedup: function(increment) { changeSpeed(increment); } } }, 
	createMountainBikePrototye: function (proto) { var object = Object.create(proto);
	object.gear=1; object.setGear = function(gearValue) { this.gear = gearValue; }
	return object; }, start: function () { var bicyclePrototype = createBicyclePrototye();
	var mountainBike = createMountainBikePrototye(bicyclePrototype); } } }