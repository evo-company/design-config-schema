import { getKeyValues } from 'Schema/utils';
import facebook from './properties/facebook';
import instagram from './properties/instagram';
import odnoklassniki from './properties/odnoklassniki';
import pinterest from './properties/pinterest';
import tumblr from './properties/tumblr';
import twitter from './properties/twitter';
import vkontakte from './properties/vkontakte';
import youtube from './properties/youtube';


const NAME = 'socialNetwork';


const properties = Object.assign(
    {},
    facebook,
    instagram,
    odnoklassniki,
    pinterest,
    tumblr,
    twitter,
    vkontakte,
    youtube,
);
const required = Object.keys(properties);
const ui = getKeyValues('ui', properties);


export default {
    [NAME]: {
        type: 'object',
        title: NAME,
        description: 'Social network',
        additionalProperties: false,
        required,
        properties,
        ui,
    }
};
