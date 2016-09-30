import Ember from 'ember';

export default Ember.Route.extend({

  beforeModel() {
    const thisRoute = this;
    Ember.run.later( function() {
      thisRoute.transitionTo('experience.story.1.charge');
    }, 2000);
  }

});
