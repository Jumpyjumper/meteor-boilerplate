import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAndroid } from "@fortawesome/free-brands-svg-icons"



class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this);
    }

    componentDidMount(){

        Tracker.autorun(() => {
            if (!Meteor.userId()) { // if the user is not logged in (since userId() is reactive)
                if (Session.get("loginRedirect")) { // if the user was logged in
                    FlowRouter.go("/");
                }
            }
        })

    }


    handleLoginWithGoogle(event){
        event.preventDefault();

        Meteor.loginWithGoogle({
            requestPermissions: ["email", "profile"],
            requestOfflineToken: true,
            forceApprovalPrompt: true,
            loginStyle: "popup"
        }, function(err){
            if(!err){
                FlowRouter.go('homepage');
            }
        });
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-6">
                        <form id="login" role="form" className="login-widget">
                            <article>
                                <div className="text-center">
                                    <ul className="login-widget-services list-unstyled">
                                        <li>
                                            <button className="btn btn-google" id="loginWithGoogle" onClick={this.handleLoginWithGoogle}>login</button>
                                        </li>
                                    </ul>
                                    {
                                        (!Meteor.isCordova) ?
                                            <a className="login-widget-download-mobile" href="https://s3-us-west-2.amazonaws.com/meteor-boilerplate-public/app-debug.apk">
                                                <FontAwesomeIcon icon={faAndroid}/>
                                            </a>
                                            :   null
                                    }
                                </div>
                            </article>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

Login.defaultProps = {
};

Login.propTypes = {
};

export default withTracker(() => {
    return {};
})(Login);