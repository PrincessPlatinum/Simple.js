/* 
@A framework that makes diving into Wikia user scripting easier 
@Written by Wikia user:
@Licensed under CC-BY-SA
*/

function sim(id) {
 
   var about = {
      Version: 0.1,
      Author: "Maria Williams",
      Created: "Fall 2013",
      Updated: "13 September 2013"
   };
 
   if (id) {
 
      if (window === this) {
         return new sim(id);
      }

      this.e = document.getElementById(id);
      return this;
   } else {
      return about;
   }
}

sim.prototype = {
	button: function(text) {
		$(this).append('<a class="wikia-button" id="' + text + '">' + text + '</a>');
		return this;
        },

	addClick: function(handler) {
		$(this).attr('onclick', handler);
		return this;
	}
};
