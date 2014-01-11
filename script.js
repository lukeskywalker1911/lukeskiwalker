$(document).ready(function() {

	  var zitate = ['"Tolle Seite"-Mark Zuckerberg', '"Toll, was meine Schueler koennen!"-Fr. Pohlus', '"Wie habt ihr das gemacht?-Ein Meisterwerk!"-Unbekannt', '"Gut gemacht!(Grabesstimme)"-Hannibal Lecter'];
	  $('[data-role="header"]:first').html(zitate[Math.floor(Math.random()*zitate.length)]);
});