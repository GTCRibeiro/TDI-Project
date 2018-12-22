import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchArticles, fetchGames, fetchGenres} from "../actions/index";
import {Link} from "react-router-dom";

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
        fetchGenres: () => dispatch(fetchGenres()),
        fetchGames: () => dispatch(fetchGames())
    };
};

const mapStateToProps = state => {
    return {articles: state.articles, genres: state.genres, games: state.games};
};

class ConnectedListGenreGames extends Component{

    constructor(match){
        super(match);

        //this.clickAction = this.clickAction.bind(this);
    }

    componentDidMount()
    {
        if(this.props.articles.length < 1) {
            this.props.fetchArticles({type: 'FETCH_ARTICLES'});
        }
        if(this.props.genres.length < 1){
            this.props.fetchGenres({type: 'FETCH_GENRES'});
        }
        if(this.props.games.length < 1){
            this.props.fetchGames({type: 'FETCH_GAMES'});
        }

    }


    render()
    {
        console.log(this.props);
        //const genre = this.props.genres.find(genremap => genremap.id.toString()  === this.props.match.params.id);
        const game = this.props.games.find(gamemap => gamemap.id.toString() === this.props.match.params.id);
        const articles = this.props.articles;
        const imgComponent = {
            width: "66%",
            height: "66%%",
            margin: "0px 15px 0px 15px"
        };
        const divComponent = {
            overflow: "hidden"
        };
        const btnComponent = {
            margin:"0px 0px 0px 0px"
        };

        return (
            <div className="row mt-5">

                <div className="col-md-8 offset-md-1">
                    <div>   <h1> {game.name} </h1> </div>
                        <div className="card-columns">


                {articles.map((el, index) => {
                    if (el.game_id.toString() === this.props.match.params.id) {
                        return <div className="card border-dark text-center w-100 " style={divComponent} key={index}>
                            <img src={el.image} className="card-img-top"/>
                            <div className="card-header">{el.game.name} </div>


                            <br></br>
                            {el.title}
                            <br></br>

                            <br></br>


                            <Link to={`/review/${el.id}`}>
                                <button className="btn btn-primary btn-lg" style={btnComponent}>Read more</button>
                            </Link>

                            <div className="card-footer">
                                <small className="text-muted"> {el.user.name} </small>
                            </div><h1></h1>

                        </div>
                    } else {
                        return "";
                    }


                })}

                        </div>
                    </div>
                </div>
        );
    }
}
//<button onClick={() => this.clickAction(el)} className="btn btn-danger btn-lg" style={btnComponent}>delete</button>


const ListGenreGames = connect(mapStateToProps, mapDispatchToProps)(ConnectedListGenreGames);

export default ListGenreGames;