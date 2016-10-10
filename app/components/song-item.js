import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'tr',
	isPopular: Ember.computed('song.playCount', function(){
		return parseInt(this.get( 'song.playCount' )) >20;
		
	}),
	isAffordable: Ember.computed('song.price', function(){
		return parseFloat(this.get( 'song.price' )) < 1.00;
		
	})
	
});
