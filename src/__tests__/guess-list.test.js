import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from '../components/guess-list';

describe('<GuessList />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessList />);
    });
});
