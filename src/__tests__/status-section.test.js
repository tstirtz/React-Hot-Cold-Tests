import React from 'react';
import {shallow, mount} from 'enzyme';

import StatusSection from '../components/status-section';

describe('<StatusSection />', () => {
    it('Should render without crashing', () => {
        shallow(<StatusSection />);
    });

    it('Should return guessList array to GuessList component', () =>{
        const guesses = [1, 2, 3];
        const wrapper = mount(<StatusSection guesses={guesses}/>);


        console.log(wrapper.find('.guessBox').text());
        const guessList = wrapper.find('.guessBox').text();

        expect(guessList).toContain(123);

    });

    it('Should pass down guessCount prop to GuessCount component', () =>{
        const guesses = [10, 20, 30, 40];
        const wrapper = mount(<StatusSection guesses ={guesses}/>);

        const guessCount = wrapper.find('#count').text();

        expect(guessCount).toEqual(guesses.length.toString());
    });

    it('Should pass down auralStatus prop to AuralStatus component', () =>{
        const auralStatus = "Here's the status of the game";
        const wrapper = mount(<StatusSection auralStatus={auralStatus}/>);

        console.log(wrapper.find('#status-readout').text());
        const renderedStatus = wrapper.find('#status-readout').text();

        expect(renderedStatus).toContain(auralStatus);
    });
});
