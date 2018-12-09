import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { FlowRouterMeta, FlowRouterTitle } from 'meteor/ostrio:flow-router-meta';
import './public.js';


FlowRouter.triggers.enter([() => BodyClass.run()]);
FlowRouter.triggers.exit([() => BodyClass.cleanup()]);

new FlowRouterMeta(FlowRouter);
new FlowRouterTitle(FlowRouter);