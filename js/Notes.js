(function ($) {	//loads at the dom everything

	var Notes = [
		{text: "Hello world"},
		{text: "Hello world"},
		{text: "Hello world"},
		{text: "Hello world"},
		{text: "Hello world"},
		{text: "Hello world"},
		{text: "Hello world"},
		{text: "Hello world"}
	];


	//Creation, Edit, Deletion, Date
	var Note = Backbone.Model.extend({
		default: function () {
			return {
				text: "write here...",
				done: false
			};
		},

		initialize: function (){
			if(!this.get("text")){
				this.set({"text": this.default.text});
			}
		},

		edit: function (){
			this.save({done: !this.get("done")});
		},

		clear: function (){
			this.destroy();
		}
	});

	var NoteList = Backbone.Collection.extend({
		model:Note
	});

	var NoteView = Backbone.View.extend({
		tagName: "li",

		className: "notes-list",

		template: $("noteTemplate").html(),

		render: function (){
			var tmpl = _.template(this.template);

			$(this.el).html(tmpl(this.model.toJSON()));
			return this;
		}
	});

	var AppView = Backbone.View.extend({
		el: $("#notes"),

		initialize: function (){
			this.collection = new NoteList(Notes);
			this.render();
		},

		render: function () {
			var that = this;
			_.each(this.collection.models, function(item){
				that.renderNote(item);
			}, this);
		},

		renderNote: function(item){
			var noteView = new NoteView({
				model: item
			});
			this.$el.append(noteView.render().el);
		}
	});

	var app = new AppView();
}(jQuery));