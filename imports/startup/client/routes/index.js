import {FlowRouter} from 'meteor/kadira:flow-router';
import './public';
import './private';



FlowRouter.triggers.enter([() => BodyClass.run()]);
FlowRouter.triggers.exit([() => BodyClass.cleanup()]);


FlowRouter.route('/logout', {
    name: 'logout',
    title: 'Logout',
    action: function() {
        Meteor.logout(function(){
            FlowRouter.go('homepage')
        });
    }
})