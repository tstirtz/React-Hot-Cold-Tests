import React from 'react';
import {shallow, mount} from 'enzyme';

import InfoSection from '../components/info-section';

describe('<InfoSection />', () => {
    it('Should render without crashing', () => {
        shallow(<InfoSection />);
    });
});
