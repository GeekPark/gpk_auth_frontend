import _ from 'lodash';

import * as LoginActions from './LoginActions';
import * as MessageActions from './MessageActions';

const actions = _.assign({}, LoginActions, MessageActions);

export default actions;
