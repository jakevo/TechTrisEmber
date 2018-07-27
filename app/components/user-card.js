import Component from '@ember/component';
import {computed, get, set } from '@ember/object'

export default Component.extend({
    hasAgreed: false,
    confirmId: computed('user.id', function(){
        const id = get(this, 'user.id');
        return `confirm_${id}`;
    }),
    role: null,
    hasNotAgreed: Ember.computed.not('hasAgreed'),
    isRookie: computed('user.usedEmberBefore', 'user.name', function(){
        const hasUsed = get(this,'user.usedEmberBefore');
        const isJustin = get(this, 'user.name') === 'Justin';
        if(hasUsed){
            return false;
        }else if(isJustin){
            return false;
        }else {
            return true;
        } 
    }),
    actions: {
           assignRole(roleString){
                set(this, 'role', roleString);
           },
           toogleUserdEmber(e){
                // if (get(this, 'user.usedEmberBefore')){
                //     set(this, 'user.usedEmberBefore', false)
                // } else {
                //     set(this, 'user.usedEmberBefore', true)
                // }
                e.preventDefault();
                if (get(this, 'hasAgreed')) {
                    this.toggleProperty('user.usedEmberBefore');
                } else {
                    return false;
                }
            
            }
        }
    });
