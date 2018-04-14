import React from 'react';
import {shallow, mount} from 'enzyme';

import Feedback from '../components/feedback';

describe('<Feedback />', () => {
    it('Should render without crashing', () => {
        shallow(<Feedback />);
    });
});
