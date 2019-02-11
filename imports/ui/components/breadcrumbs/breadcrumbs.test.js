import React from 'react';
import Breadcrumbs from './breadcrumbs.jsx';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { chai } from 'meteor/practicalmeteor:chai';

Enzyme.configure({ adapter: new Adapter() });

if(Meteor.isClient){
	
	const breadcrumbs = [
		{
			routeName: "routeName1",
			url: "url1",
			active: false
		},
		{
			routeName: "routeName2",
			url: "url2",
			active: true
		}
	]

	describe('ui/components/breadcrumbs/', () => {
	  it('should have nav element with an aria-label set as breadcrumb', () => {
	    const item = shallow(<Breadcrumbs/>);
	    chai.assert(item.exists("nav[aria-label=\"breadcrumb\"]"), "nav do not have aria label set as breadcrumb");
	  });
	  it('should have an ordered list element with the class breadcrumb', () => {
	    const item = shallow(<Breadcrumbs/>);
	    chai.assert(item.find("ol").hasClass("breadcrumb"), "ol do not have a .breadcrumb class");
	  });
	  it('should render all breadcrumbs items', () => {
	    const item = shallow(<Breadcrumbs breadcrumbs={breadcrumbs}/>);
	    expect(item.find('ol').children()).to.have.lengthOf(breadcrumbs.length);
	  });
	  it('should render first breadcrumb item with "url1" as link value', () => {
	    const item = shallow(<Breadcrumbs breadcrumbs={breadcrumbs}/>);
	    chai.assert(item.find('ol li').at(0).exists('a[href="url1"]'), "first breadcrumb item does not have a link with \"url1\" as a value");
	  });
	  it('should render first breadcrumb item with "routeName1" as text', () => {
	    const item = shallow(<Breadcrumbs breadcrumbs={breadcrumbs}/>);
	    expect(item.find('ol li').at(0).text()).to.equal("routeName1");
	  });
    });
	
}