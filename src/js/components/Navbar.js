import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Provider } from "react-redux";
import App from "./App";
import Detail from "./MasterDetail";
import User from "./User";
import Form from "./Form";
import ListGenres from "./ListGenres";
import DetailGenre from "./MasterDetailGenres";
import ListGenreGames from "./ListGenreGames";
import Callback from "./Callback";

const spanComponent = {
    display: "inline"
};

const Navbar = ({ store }) => (
    <Provider store={store}>
        <Router>
            <div >
                <nav className="navbar sticky-top -expand -lg navbar-dark bg-dark">
                    <ul>
                        <li className="navbar-brand">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="navbar-brand">
                            <Link to="/newReview">New Review</Link>
                        </li>
                        <li className="navbar-brand">
                            <Link to="/genres">Genres</Link>
                        </li>
                        <User />

                    </ul >
                    <span className="navbar-text" style={spanComponent}> Reviews&Reviews </span>
                </nav>

                <Route path="/" exact component={App} />

                <Route path="/review/:id" component={Detail} />

                <Route path="/genre/:id" component={DetailGenre} />

                <Route path="/game/:id/reviews" component={ListGenreGames} />

                <Route path="/newReview" component={Form}/>

                <Route path="/genres" component={ListGenres}/>

                <Route path="/callback" component={Callback} />

            </div>
        </Router>
    </Provider>
);


export default Navbar;
