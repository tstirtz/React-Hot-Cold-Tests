import React from 'react';
import {shallow, mount} from 'enzyme';

import TopNav, {onRestaurantGame} from '../components/top-nav';

describe('<TopNav />', () => {
    it('Should render without crashing', () =>{
            shallow(<TopNav />);
    });

    it('Should call restartGame()', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onRestartGame={callback}/>);

        wrapper.find('.new').simulate('click');

        expect(callback).toHaveBeenCalled();
    });

    it('Should call onGenerateAuralUpdate()', () => {
        const callback = jest.fn();
        const wrapper = mount(<TopNav onGenerateAuralUpdate={callback}/>);

        wrapper.find('.status-link').simulate('click');
        
        expect(callback).toHaveBeenCalled();
    });
});
