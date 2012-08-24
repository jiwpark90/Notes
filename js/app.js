"use strict";

(function ($) {

	var tempNotes = [
		{title: "untitled"},
		{title: "untitled"},
		{title: "untitled"},
		{title: "untitled"}
	];

	var bar = Backbone.View.extend({
		el: $(".foo"),

		initialize: function () {
			window.alert("new object");
		}
	});

	var handler = function (){
		$(".foo").click(function () {
			var object = new bar();
			alert("hello world");
		});
	}
} (jQuery));

var object = {
	helo : "yo"
};

var yo = new Todo;
