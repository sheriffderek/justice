import Ember from 'ember';

export default Ember.Controller.extend({
  showData: false,

  nextStoryExists: Ember.computed('model.story.id', 'model.stories', function() {
    const currentStoryId = this.get('model.story.id');
    const stories = this.get('model.stories');

    // Should check story IDs instead of assuming IDs are always sequential
    if (currentStoryId < stories.get('length')) {
      return true;
    } else {
      return false;
    }
  }),

  actions: {
    transitionToNextStory() {
      const currentStoryId = this.get('model.story.id');

      // Should check story IDs instead of assuming IDs are always sequential
      this.transitionToRoute('stories.story.charge', currentStoryId + 1);
    },
    transitionToConclusion() {
      this.transitionToRoute('conclusion.sign-up');
    },
    didTransition() {
      Ember.run.later(() => this.controller.set('showData', true), 500);
    },
    willTransition() {
      this.controller.set('showData', false);
    }
  }
});
