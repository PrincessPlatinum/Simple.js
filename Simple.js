/* 
@A framework that makes diving into Wikia user scripting easier 
@Written by Wikia user:
@Licensed under CC-BY-SA
*/

function Sim(id) {
 
   var about = {
      Version: 0.1,
      Author: "Maria Williams",
      Created: "Fall 2013",
      Updated: "13 September 2013"
   };
 
   if (id) {
 
      if (window === this) {
         return new Sim(id);
      }

      this.e = document.getElementById(id);
      return this;
      return about;
   }
}

Sim.prototype = {
	button: function(text) {
		var button = '<a class="wikia-button" id="' + text + '">' + text + '</a>';
                this.e.innerHTML += button;
		return this;
        },

	addClick: function(handler) {
		this.e.setAttribute("onclick", handler);
		return this;
	},
};
