import React from 'react';
import Stopwatch from 'js/TDD/Stopwatch';
import { shallow } from 'enzyme';

describe("Stopwatch", () => {
    describe("render function", () => {
        it("check container render", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            expect(wrapper.find(".stopwatch_conatiner").exists()).toEqual(true);
        })

        it("check show time conatiner render", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            expect(wrapper.find(".showtime_conatiner").exists()).toEqual(true);
        })

        it("check button conatiner render", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            expect(wrapper.find(".button_container").exists()).toEqual(true);
        })

        it("check start, stop, reset button render", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            expect(wrapper.find(".button_container").childAt(0).hasClass("startbtn")).toEqual(true);
            expect(wrapper.find(".button_container").childAt(1).hasClass("stopbtn")).toEqual(true);
            expect(wrapper.find(".button_container").childAt(2).hasClass("resetbtn")).toEqual(true);
        })

        it("check initial time on render", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            expect(wrapper.find(".showtime_conatiner").text()).toEqual('0.00');
        })

        it ("check start button on click", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            jest.useFakeTimers();
            wrapper.find(".startbtn").simulate("click");
            jest.advanceTimersByTime(1000);
            expect(wrapper.state("time")).toEqual(1);
            expect(wrapper.state("isTimerRunning")).toEqual(true);
            expect(wrapper.find(".showtime_conatiner").text()).toEqual("1.00");
        })

        it ("check stop button on click", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            wrapper.setState({time: 25})
            expect(wrapper.find(".showtime_conatiner").text()).toEqual('25.00');
            wrapper.find(".stopbtn").simulate("click");
            expect(wrapper.state("isTimerRunning")).toEqual(false);
            expect(wrapper.find(".showtime_conatiner").text()).toEqual('25.00');
        })

        it ("check reset button on click", () => {
            const wrapper = shallow(<Stopwatch></Stopwatch>);
            wrapper.setState({time: 25, isTimerRunning: true})
            wrapper.find(".resetbtn").simulate("click");
            expect(wrapper.state("time")).toEqual(0);
            expect(wrapper.state("isTimerRunning")).toEqual(false);
            expect(wrapper.find(".showtime_conatiner").text()).toEqual("0.00");
        })
    })
})