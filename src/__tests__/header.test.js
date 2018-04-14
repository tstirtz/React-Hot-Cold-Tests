import React from 'react';
import {shallow, mount} from 'enzyme';

import Header from '../components/header';

describe('<Header />', () => {
    it('Should render without crashing', () => {
        shallow(<Header />);
    });

    it('Should call onGenerateAuralUpdate', () => {
        const callback = jest.fn();
        const wrapper = mount(<Header onGenerateAuralUpdate={callback}/>);

        wrapper.find('.status-link').simulate('click');
        
        expect(callback).toHaveBeenCalled();
    });

    it('Should call onRestartGame', () => {
        const callback = jest.fn();
        const wrapper = mount(<Header onRestartGame={callback}/>);

        wrapper.find('.new').simulate('click');

        expect(callback).toHaveBeenCalled();
    });
});
