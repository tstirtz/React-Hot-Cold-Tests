import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from '../components/guess-section';

describe('<GuessSection />', () => {
    it('Should render without crashing', () =>{
        shallow(<GuessSection />);
    });

    it('onMakeGuess make guess should be called on GuessForm click', () => {
        const callback = jest.fn();
        const wrapper = mount(<GuessSection onMakeGuess = {callback}/>);

        wrapper.find('.button').simulate('submit');
        wrapper.update();

        expect(callback).toHaveBeenCalled();
    });
});
