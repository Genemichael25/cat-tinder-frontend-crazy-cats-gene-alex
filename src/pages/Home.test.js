import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Home from './Home'
import africanlion from "../assets/africanlion.jpeg"


Enzyme.configure({adapter: new Adapter()})


let home;

beforeEach(() => {
home = shallow(<Home />)
})



describe("When Home Renders", () => {
    it("displays a heading", () => {
        
        const homeHeading = home.find("h1").text()
        expect(homeHeading).toEqual("Home")
    })

    it("has a img with props", () => {
        expect(home.find("img").prop("src")).toEqual(africanlion)
    })






})