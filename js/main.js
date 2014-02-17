
function test1() {
	var country = {
		"country": "Spain", 
		"observations": [ 
			{"value": 12 },
			{"value": 43 }
   		]
	};

	var template = "<h1>Country: {{country}}</h1><ul><li>value: {{#observations}}{{value}}{{/observations}}</ul>";
	var output = Mustache.render(template, country);
	$('#sampleArea').html(output);
}

function githubSample() {
	var view = {
	  title: "Joe",
	  calc: function () {
	    return 2 + 4;
	  }
	};

	var output = Mustache.render("{{title}} spends {{calc}}", view);
	$('#sampleArea').html(output);
}
