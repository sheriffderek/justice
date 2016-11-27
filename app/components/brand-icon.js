import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['brand-icon', 'touchable'],
  audio: Ember.inject.service(),

  initAudioFile: Ember.on('init', function() {
    // Eb5.mp3 is an mp3 file located in the "public" folder
    this.get('audio').load('/audio/alert.mp3').asSound('jail-door');
  }),

  didInsertElement() {
    Ember.$('body').find('.brand-icon').css('opacity', 0);
  },
  didRender() {
    // let x = this.$();
    // Ember.run.later( function() {
    //   x.animate({
    //     'opacity': 1
    //   }, 500);
    // }, 0);
   },
  click() {
    this.get('audio').getSound('jail-door').play();
    this.sendAction();
  }
});
