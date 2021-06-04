import React from 'react';
import { shallow } from 'enzyme';
import Timer from '../../../js/TDD/Timer';

describe("Timer", () => {
    describe("render function", () => {
        it("check container render", () => {
            const wrapper = shallow(<Timer></Timer>);
            expect(wrapper.find(".container").exists()).toEqual(true);
        })

        it("check timer render", () => {
            const wrapper = shallow(<Timer></Timer>);
            expect(wrapper.find(".timerDiv").childAt(0).find("span").exists()).toEqual(true);
            expect(wrapper.find(".timerDiv").childAt(1).find("span").exists()).toEqual(true);
            expect(wrapper.find(".timerDiv").childAt(2).find("span").exists()).toEqual(true);
        })

        it("check buttons render", () => {
            const wrapper = shallow(<Timer></Timer>);
            expect(wrapper.find(".start").exists()).toEqual(true);
            expect(wrapper.find(".stop").exists()).toEqual(true);
            expect(wrapper.find(".reset").exists()).toEqual(true);
        })

        it("check start time", () => {
            const wrapper = shallow(<Timer></Timer>);
            wrapper.setState({minute: 1, seconds: 20})
            expect(wrapper.state("minute")).toEqual(1);
            expect(wrapper.state("seconds")).toEqual(20);
        })

        it("check stop time", () => {
            const wrapper = shallow(<Timer></Timer>);
            wrapper.setState({minute: 1, seconds:0})
            wrapper.find(".reset").simulate("click");
            expect(wrapper.state("minute")).toEqual(0);
            expect(wrapper.state("seconds")).toEqual(0);
        })

        it("check reset time", () => {
            const wrapper = shallow(<Timer></Timer>);
            wrapper.setState({minute: 1, seconds:0})
            wrapper.find(".reset").simulate("click");
            expect(wrapper.state("minute")).toEqual(0);
            expect(wrapper.state("seconds")).toEqual(0);
        })
    })
})