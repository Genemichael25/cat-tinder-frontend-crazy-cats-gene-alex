import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import CatEdit from './CatEdit'

Enzyme.configure({adapter: new Adapter()})

describe("Cat edit exists", () => {

  const props = {
    cat: [
        {
            id: 1,
            name: "Mittens",
            age: 5,
            enjoys: "sunshine and warm spots",
            image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"  
        }
    ]
  }
    let catEditRender;

    beforeEach(() => {
      catEditRender = shallow(<CatEdit {...props}/>)

    })

    it("Has a Form", () => {
        const catForm = catEditRender.find("Form")
        expect(catForm.length).toEqual(1)
    })

    it("The Form Group has a Input and a Label", () => {
        const formGroup = catEditRender.find("FormGroup")
        const formInputs = catEditRender.find("Input")
        const formLabel = catEditRender.find("Label")
        
        expect(formGroup.length).toEqual(4)
        expect(formInputs.length).toEqual(4)
        expect(formLabel.length).toEqual(4)
    //     // expect(formGroup).toContain("Label")
    //     // expect(new Set(formGroup)).toContain("Label")
    //     // console.log(formGroup.)
    })



})
