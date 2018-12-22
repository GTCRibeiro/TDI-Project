import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles, fetchGenres, fetchGames } from "../actions/index";
import {Link} from "react-router-dom";

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchGames: () => dispatch(fetchGames())
    };
};

const mapStateToProps = state => {
    return { articles: state.articles, genres: state.genres, games: state.games};
};

class ConnectedDetailGenre extends Component{

    constructor(match) {
        super(match);
    };

    componentDidMount()
    {

        if(this.props.articles.length === 0)
        {
            this.props.fetchArticles({type: 'FETCH_ARTICLES'});
        }
        if(this.props.genres.length === 0){
            this.props.fetchGenres({type: "FETCH_GENRES"});
        }
        if(this.props.games.length === 0){
            this.props.fetchGames({type: "FETCH_GAMES"});
        }

    }


    render() {


        const containerStyle={
            paddingTop: "80px",
            margin:"0px 0px 0px 300px",
        };
        const div1 = {
            fontSize: "50px",
            marginTop: "15px"
        };
        const div2 ={
            margin: "50px 0px 0px 0px",
        };
        const div3 ={
            marginTop: "25px",
        };
        const div4 ={
            marginTop: "75px",
        };
        const imgStyle={
            width: "30%",
            height: "10%"
        };
        const divComponent = {
            overflow: "hidden",
            margin: "60px 20px 20px 70px",
            fontSize: "25px"

        };


        let genre = this.props.genres.find(genremap => genremap.id.toString()  === this.props.match.params.id);
        const games = this.props.games;


        return(
            <div className="row mt-5" >
                <div className="col-md-4 offset-md-1">
                <h1 > {genre.name} </h1>

                {games.map((el,index)=> {
                //console.log(genre.id);
                if (el.genre_id === genre.id) {
                    //console.log("entrou no if do el_genre_id");
                    return <div style={divComponent} key={index}>
                        <Link to={`/game/${el.id}/reviews`}> <div>{el.name}</div> </Link>
                    </div>;
                } else {
                    return "";
                }
            })}
                </div>
            </div>

        );




    }

}

const DetailGenre = connect(mapStateToProps, mapDispatchToProps)(ConnectedDetailGenre);

export default DetailGenre;
