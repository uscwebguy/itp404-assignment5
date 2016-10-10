import Ember from 'ember';

export default Ember.Route.extend({
	model: function( params ){
		//console.log( params.term );
		var artistURL = 'http://itp-api.herokuapp.com/api/artists/'+ params.term +'/songs';
		
		return $.ajax( {url: artistURL} ).then(function( response ){
			console.log( response.artists[0] );
			return {
						artistName: response.artists[0].name,
						songs:response.songs
					};
			
		});
		
	},
	afterModel: function( response ){
		console.log( "AJAX response start" );
		console.log(  response );
		console.log( "AJAX response end" );
		
	}
});
