import { extend } from 'vee-validate';

extend('positiveOnly', value => {
    if(value >= 0) {
        return true;
    }
    return 'This Field Cannot Contain Negative Values'
})