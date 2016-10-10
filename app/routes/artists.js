import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		var artistsURL = "http://itp-api.herokuapp.com/api/artists";
		return $.ajax({ url: artistsURL }).then( function(response){
			return response;
		} );
	},
	afterModel: function( model ){
		console.log( model.artists );
	}
	
});
