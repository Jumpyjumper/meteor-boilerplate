import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginWithGoogle = this.handleLoginWithGoogle.bind(this);
    }

    handleLoginWithGoogle(event){
        event.preventDefault();

        Meteor.loginWithGoogle({
            requestPermissions: ["email", "profile"],
            requestOfflineToken: true,
            forceApprovalPrompt: true,
            loginStyle: "redirect"
        }, function (err) {
            if(!err){
                return;
            }
            throw new Error(err);
        });
    }
    
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-sm-center">
                    <div className="col-sm-6">
                        <form id="login" role="form" className="login-widget">
                            <article>
                                <div>
                                    <button className="btn btn-google" id="loginWithGoogle" onClick={this.handleLoginWithGoogle}>login</button>
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