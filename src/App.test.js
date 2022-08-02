import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import Header from './components/header'

Enzyme.configure({adapter: new Adapter()})


describe("When App Renders", () => {

  let app;

  beforeEach(() => {
    app = shallow(<App/>)
  })



  it("displays a header", () => {
    
    const appHeader = app.find("Header")
    expect(appHeader.length).toEqual(1)
    
  })

  it("displays a footer", () => {

    const appFooter = app.find("Footer")
    expect(appFooter.length).toEqual(1)
  })


})