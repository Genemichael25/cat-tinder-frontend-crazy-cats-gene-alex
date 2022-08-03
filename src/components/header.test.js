import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './header.js'

Enzyme.configure({adapter: new Adapter()})



describe("When the header renders", () => {
    it("the header contains text", () => {

        const header = shallow(<Header />)

        const headingText = header.find("h1").text()
        expect(headingText).toEqual("Savannah Tinder")
      })
})