import React from 'react';
import Calculator from 'js/TDD/Calculator';
import { shallow } from 'enzyme';

describe("Calculator", () => {
    describe("render function", () => {
        it("check container render", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            expect(wrapper.find(".calculator_conatiner").exists()).toEqual(true);
        })

        it("check input box render", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            expect(wrapper.find(".box_container").childAt(0).find("input").hasClass("number_box1")).toEqual(true);
            expect(wrapper.find(".box_container").childAt(1).find("input").hasClass("number_box2")).toEqual(true);
        })

        it("check calculate button render", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            expect(wrapper.find(".button_container").childAt(0).hasClass("calculate_button")).toEqual(true);
        })

        it("check result render", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            expect(wrapper.find(".result_container").childAt(0).hasClass("result_div")).toEqual(true);
        })

        it("check onchange of textbox", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            wrapper.find(".number_box1").simulate("change", { target: { value: 1 } });
            expect(wrapper.state("number1")).toEqual(1)

            wrapper.find(".number_box2").simulate("change", { target: { value: 3 } });
            expect(wrapper.state("number2")).toEqual(3)
        })

        it ("check calculate", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            wrapper.setState({number1:2,number2:4})
            wrapper.find(".calculate_button").simulate("click");
            expect(wrapper.state("result")).toEqual(6)
        })

        it("check result", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            wrapper.setState({number1:2,number2:4})
            wrapper.find(".calculate_button").simulate("click");
            expect(wrapper.find(".result_container").find(".result_div").text()).toEqual("6");
        })

        it ("addNumber function", () => {
            const wrapper = shallow(<Calculator></Calculator>);
            expect(wrapper.instance().addNumber(2,3)).toEqual(5)
        })
    })
})