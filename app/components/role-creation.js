import Component from '@ember/component';
import {set, get} from '@ember/object'

export default Component.extend({
    actions:{
        modifyTitle(e){
            //set(this, 'roleTitle', e.target.value)
            const parentFunction = get(this, 'titleChanged');
            parentFunction(e.target.value);
        }
    }
});
