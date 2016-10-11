import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	isPopular: Ember.computed('song.playCount', function(){
		return parseInt(this.get( 'song.playCount' )) >20;
		
	}),
	isAffordable: Ember.computed('song.price', function(){
		return parseFloat(this.get( 'song.price' )) < 1.00;
		
	}),
	isLiked: false,
	actions: {
		like: function(e){
			e.preventDefault();
			//alert("Liked");
			// console.log(  );
			// if( $(this).hasClass( "liked" ) )
				// $(this).removeClass( "liked" );
			// else
				// $(this).addClass( "liked" );
			
			if(this.get('isLiked'))
				this.set('isLiked', false);
			else
				this.set('isLiked', true);
		}
	}
	
});
