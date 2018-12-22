import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchToken, fetchUserSuccess} from "../actions/auth"
import store from "../store";
import {USER_ENDPOINT} from "../constants/services";

const mapDispatchToProps = dispatch => {

    return {
        fetchToken: code => dispatch(fetchToken(code)),
        fetchUser: user => dispatch(fetchUserSuccess(user)),
    };
};

const mapStateToProps = state => {

    return {
        token: state.auth,
        user: state.user,
    };
};

class ConnectedCallback extends Component{

    constructor(match) {
        super(match);
        this.checkToken = this.checkToken.bind(this);
    }

    componentDidMount()
    {
        if(!this.props.token.length > 0)
        {
            let code = this.props.location.search.substr(6);

            this.props.fetchToken(code);
        }

        store.subscribe(this.checkToken);
    }


    checkToken()
    {
        if(store.getState().auth[0].access_token)
        {
            console.log("access token no state existe");
            if(store.getState().user.length < 1)
            {
                console.log(store.getState());
                fetch(USER_ENDPOINT, {
                    headers: new Headers({'Authorization': 'Bearer ' + store.getState().auth[0].access_token})
                }).then(response => response.json(), ).then((responseData) => {
                    console.log(responseData);
                    this.props.fetchUser(responseData);
                });
            }
        }
        console.log(this.props.user+"here is johnny");
    }

    render() {

        if (this.props.user.length > 0)
        {
            return (
                <div className="row mt-4">
                    <div className="col-md-4 offset-md-1">
                    <p> {this.props.user[0].data.name}</p>
                    <p> Email: {this.props.user[0].data.email}</p>
                    <p> Sign up date: {this.props.user[0].data.created_at.substr(0, 10)}</p>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <p>Not logged in</p>
                </div>
            );
        }

    }
}

const Callback = connect(mapStateToProps, mapDispatchToProps)(ConnectedCallback);

export default Callback;
