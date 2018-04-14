import React from 'react';
import {shallow, mount} from 'enzyme';

import Game, {generateAuralUpdate} from '../components/game';

describe('<Game />', () => {
    it('Should render without crashing', () => {
        shallow(<Game />);
    });

    it('has no guess in the beginning', () => {
        // arrange
        const game = new Game();

        //act
        const guessCount = game.guessCount;

        //assert
        expect(guessCount).toEqual(0);
    });

    it('generateAuralUpdate# returns status of the game with 0 guesses', () => {
        const auralStatus = generateAuralUpdate([],undefined);
        // CMD + SHIFT + P
        expect(auralStatus).toContain('status of the game');
    });

    it('generateAuralUpdate# returns status of the game with 1 guess', () => {
        const auralStatus = generateAuralUpdate([1],undefined);
        // CMD + SHIFT + P
        expect(auralStatus).toContain('status of the game' && 'It was');
    });

    it('generateAuralUpdate# returns status of the game with > 1 guess', () => {
        const auralStatus = generateAuralUpdate([1, 2],undefined);
        // CMD + SHIFT + P
        expect(auralStatus).toContain('status of the game' && 'In order of');
    });

    it('Should restart game by resetting the state', () =>{
        const wrapper = shallow(<Game />);
        wrapper.instance().restartGame(true);
        wrapper.update();
        expect(wrapper.instance().state).toHaveProperty('guesses', []);
        expect(wrapper.instance().state).toHaveProperty('feedback', 'Make your guess!');
        expect(wrapper.instance().state).toHaveProperty('auralStatus', '');
        expect(wrapper.instance().state.correctAnswer).toBeGreaterThan(0);
        expect(wrapper.instance().state.correctAnswer).toBeLessThan(101);
    });

    it('makeGuess() should provide feedback upon invalid guess', () =>{
        const wrapper = shallow(<Game />);
        wrapper.instance().makeGuess('hello');
        wrapper.update();
        expect(wrapper.instance().state.feedback).toEqual('Please enter a valid number');
    });

    it('makeGuess() should provide feedback upon guess with diff of >= 50', () => {
        const wrapper = shallow(<Game />);
        let iceCold = wrapper.instance().state.correctAnswer - 50;
        console.log(iceCold);
        wrapper.instance().makeGuess(iceCold);
        wrapper.update();
        expect(wrapper.instance().state.feedback).toEqual("You're Ice Cold...");
    });

    it('makeGuess() should provide feedback upon guess with diff of >= 30', () => {
        const wrapper = shallow(<Game />);
        let cold = wrapper.instance().state.correctAnswer - 30;
        console.log(cold);
        console.log(wrapper.instance().state.correctAnswer);
        wrapper.instance().makeGuess(cold);
        wrapper.update();
        expect(wrapper.instance().state.feedback).toEqual("You're Cold...");
    });

    it('makeGuess() should provide feedback upon guess with diff of >= 10', () => {
        const wrapper = shallow(<Game />);
        let warm = wrapper.instance().state.correctAnswer - 10;
        console.log(warm);
        console.log(wrapper.instance().state.correctAnswer);
        wrapper.instance().makeGuess(warm);
        wrapper.update();
        expect(wrapper.instance().state.feedback).toEqual("You're Warm.");
    });

    it('makeGuess() should provide feedback upon guess with diff of >= 1', () => {
        const wrapper = shallow(<Game />);
        let hot = wrapper.instance().state.correctAnswer - 1;
        console.log(hot);
        console.log(wrapper.instance().state.correctAnswer);
        wrapper.instance().makeGuess(hot);
        wrapper.update();
        expect(wrapper.instance().state.feedback).toEqual("You're Hot!");
    });

    it('makeGuess() should provide feedback upon correct guess', () => {
        const wrapper = shallow(<Game />);
        let correct = wrapper.instance().state.correctAnswer;
        console.log(correct);
        console.log(wrapper.instance().state.correctAnswer);
        wrapper.instance().makeGuess(correct);
        wrapper.update();
        expect(wrapper.instance().state.feedback).toEqual("You got it!");
    });

    it('Should update document title upon guess', () => {
        const wrapper = shallow(<Game />);

        wrapper.instance().makeGuess(10);
        wrapper.update();

        expect(document.title).toEqual(`${wrapper.instance().state.feedback} | Hot or Cold`);
    });

    it('Should call onRestartGame when New Game is clicked', ()=>{
        const wrapper = mount(<Game />);
        const spy = jest.spyOn(wrapper.instance(), 'restartGame');

        wrapper.find('.new').simulate('click');
        wrapper.update();

        expect(spy).toHaveBeenCalled();
    });

    it('Should call setState when "Hear state of game" is clicked', ()=>{
        const wrapper = mount(<Game />);
        const spy = jest.spyOn(wrapper.instance(), 'setState');

        wrapper.find('.status-link').simulate('click');
        wrapper.update();

        expect(spy).toHaveBeenCalled();
    });

    it('Should call makeGuess when form is submitted', ()=>{
        const wrapper = mount(<Game />);
        const spy = jest.spyOn(wrapper.instance(), 'makeGuess');

        wrapper.find('form').simulate('submit');
        wrapper.update();

        expect(spy).toHaveBeenCalled();
    });
});
