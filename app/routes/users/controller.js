import Controller from 'ember-controller';
import computed, { alias } from 'ember-computed';
import service from 'ember-service/inject';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import IsOwnerMixin from 'client/mixins/is-owner';
import { image } from 'client/helpers/image';

export default Controller.extend(IsOwnerMixin, {
  isEditing: false,
  user: alias('model'),
  session: service(),

  coverImageStyle: computed('user.coverImage', {
    get() {
      const coverImage = image([get(this, 'user.coverImage')]);
      return `background-image: url("${coverImage}")`.htmlSafe();
    }
  }),

  actions: {
    toggleEditing(value) {
      set(this, 'isEditing', value);
    }
  }
});
