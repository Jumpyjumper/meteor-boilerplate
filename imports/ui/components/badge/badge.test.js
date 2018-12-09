import React from 'react';
import Badge from './badge.jsx';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { chai } from 'meteor/practicalmeteor:chai';

Enzyme.configure({ adapter: new Adapter() });

if(Meteor.isClient){

	describe('ui/components/badge/', () => {
        it('should have a class "badge"', () => {
          const item = shallow(<Badge/>);
          chai.assert(item.hasClass("badge"), "span does not have a class equal to \"badge\"");
        });
        it('should have a role attribute equal to "status"', () => {
          const item = shallow(<Badge/>);
          chai.assert(item.exists("span[role=\"status\"]"), "span does not have a role attribute equal to \"status\"");
        });
	  it('should have an aria-live attribute equal to "polite"', () => {
	    const item = shallow(<Badge/>);
	    chai.assert(item.exists("span[aria-live=\"polite\"]"), "span does not have an aria-live attribute equal to \"polite\"");
	  });
	  it('should have an aria-atomic attribute equal to "true"', () => {
	    const item = shallow(<Badge/>);
	    chai.assert(item.exists("span[aria-atomic=\"true\"]"), "span does not have an aria-atomic attribute equal to \"true\"");
	  });
	  it('should have a classes "badge" and "badge-foo" if the props type is equal to "foo"', () => {
	    const item = shallow(<Badge type="foo"/>);
	    chai.assert(item.hasClass("badge-foo") && item.hasClass("badge"), "span does not have classes equal to \"badge\" and \"badge-foo\"");
	  });
	  it('should render children elements', () => {
	    const item = shallow(<Badge><span>Foo</span></Badge>);
	    expect(item.children().html()).to.equal("<span>Foo</span>");
	  });
	});
	
}