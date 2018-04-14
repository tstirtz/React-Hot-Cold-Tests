import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessCount from '../components/guess-count';

describe('<GuessCount />', () => {
    it('Should render without crashing', () => {
        shallow(<GuessCount />);
    });

    it('Shoulder render plural guessNoun', () => {
        const guessCount = 2;
        const wrapper = mount(<GuessCount guessCount= {guessCount} />);

        wrapper.update();
        console.log(wrapper.prop('guessCount'));

        console.log(wrapper.find('#guessCount').text());
        expect(wrapper.find('#guessCount').text()).toContain('guesses');
    });

    it('Shoulder render singular guessNoun', () => {
        const guessCount = 1;
        const wrapper = mount(<GuessCount guessCount= {guessCount} />);

        wrapper.update();
        console.log(wrapper.prop('guessCount'));

        console.log(wrapper.find('#guessCount').text());
        expect(wrapper.find('#guessCount').text()).toContain('guess');
    });
});
