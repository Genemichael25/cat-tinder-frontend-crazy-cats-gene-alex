import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import NotFound from './NotFound'

Enzyme.configure({adapter: new Adapter()})

describe("When Not Found Renders", () => {
    it("displays a header", () => {
        const notfound = shallow(<NotFound/>)
        const notFoundHeader = notfound.find("h1")
        expect(notFoundHeader.length).toEqual(1)
        
    })
})

