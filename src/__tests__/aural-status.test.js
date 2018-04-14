import React from 'react';
import {shallow, mount} from 'enzyme';

import AuralStatus from '../components/aural-status';

describe('<AuralStatus />', ()=> {
    it('Should render without crashing', ()=>{
        shallow(<AuralStatus />);
    });

    // it('Should intially render with no text', () => {
    //     const wrapper = shallow(<AuralStatus />);
    //     console.log(wrapper);
    //     expect(wrapper.text()).to.equal('');
    // });
});
