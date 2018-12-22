import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchGenres} from "../actions/index";
import {Link} from "react-router-dom";


const mapDispatchToProps = dispatch => {
    return {
        fetchGenres: () => dispatch(fetchGenres())
    };
};

const mapStateToProps = state => {
    return {genres: state.genres};
};

class ConnectedListGenres extends Component{
    constructor(){
        super();

        //this.clickAction = this.clickAction.bind(this);
    }


    componentDidMount()
    {
        if(this.props.genres.length < 1) {
            this.props.fetchGenres({type: 'FETCH_GENRES'});
        }
    }

    render(){
        console.log(this.props);

        const genres = this.props.genres;
        const imgComponent = {
            width: "66%",
            height: "66%%",
            margin: "0px 15px 0px 15px"
        };
        const divComponent = {
            overflow: "hidden",
            margin: "60px 20px 20px 70px",
            fontSize: "25px"

        };
        const btnComponent = {
            margin:"0px 0px 0px 0px"
        };
        return (

            <div className="row mt-5" >
                <div className="col-md-4 offset-md-1">
                    <h1> Genres </h1>

                {genres.map((el, index) => (

                    <div style={divComponent} key={index} >

                        <Link to={ `/genre/${el.id}` }> <div >{el.name} </div> </Link>

                    </div>

                ))}

                </div>
            </div>
        );
    }
}

const ListGenres = connect(mapStateToProps, mapDispatchToProps) (ConnectedListGenres);

export default ListGenres;