import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatNew from './CatNew'

Enzyme.configure({adapter: new Adapter()})

describe("Cat New exists", () => {

    let catNewRender;

    beforeEach(() => {
      catNewRender = shallow(<CatNew />)

    })

    it("Has a Form", () => {
        const catForm = catNewRender.find("Form")
        expect(catForm.length).toEqual(1)
    })

    it("The Form Group has a Input and a Label", () => {
        const formGroup = catNewRender.find("FormGroup")
        const formInputs = catNewRender.find("Input")
        const formLabel = catNewRender.find("Label")
        
        expect(formGroup.length).toEqual(4)
        expect(formInputs.length).toEqual(4)
        expect(formLabel.length).toEqual(4)
       
        // expect(formGroup).toContain("Label")
        // expect(new Set(formGroup)).toContain("Label")
        // console.log(formGroup.)
    })



})
