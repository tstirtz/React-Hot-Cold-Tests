import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessForm, {onSubmit} from '../components/guess-form';

describe('<GuessForm />', () => {
    it('Should render without crashing', () =>{
        shallow(<GuessForm />);
    });

    it('Should call onSubmit() with empty guess', () =>{
        const wrapper = mount(<GuessForm />);
        const spy = jest.spyOn(wrapper.instance(), 'onSubmit');

        wrapper.children('form').simulate('submit'); //{preventDefault: () => {}});
        wrapper.update();

        expect(wrapper.instance().onSubmit).toHaveBeenCalled();
    });

    it('Should call onSubmit() with a valid guess', () =>{
        const callback = jest.fn();
        const wrapper = mount(<GuessForm onMakeGuess = {callback}/>);
        
        wrapper.children('form').simulate('submit');
        wrapper.update();

        expect(callback).toHaveBeenCalled();


    });
});
