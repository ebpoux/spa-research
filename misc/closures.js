var $ = require('jQuery')

var prison = {
	names: 'Josh Powell and Mike Mikowski',
	who: function() {
		$.ajax({
			url: 'http://localhost:8888/test',
			success: function() {
				console.log("### this.names: ", this.names);
			}
		});
	}
};
// outputs undefined, 'this' is the ajax object
console.log("### who: ", prison.who());

var prison2 = {
	names: 'Mike Mikowski and Josh Powell',
	who: function() {
		var that = this;
		$.ajax({
			url: 'http://localhost:8888/test',
			success: function() {
				console.log("### that.names: ", that.names);
			}
		});
	}
};
// outputs 'Mike Mikowski and Josh Powell'
console.log("### who: ", prison2.who());
