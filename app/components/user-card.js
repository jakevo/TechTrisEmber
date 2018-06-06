import Component from '@ember/component';
import {computed, get } from '@ember/object'

export default Component.extend({
   isRookie: computed('user.usedEmberBefore', 'user.dateStartedAtASH', function(){
        const hasUsed = get(this,'user.usedEmberBefore');
        const isJustin = get(this, 'user.name') === 'Justin';
        return (hasUsed===isJustin);
   })
});
