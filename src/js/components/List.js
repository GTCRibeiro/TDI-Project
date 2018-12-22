import React, {Component} from "react";
import { connect } from "react-redux";
import {fetchArticles, deleteArticle} from "../actions/index";
import {Link} from "react-router-dom";

const mapDispatchToProps = dispatch => {
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles())
    };
};

const mapStateToProps = state => {
    return {articles: state.articles};
};

class ConnectedList extends Component{

    constructor(){
        super();

        this.clickAction = this.clickAction.bind(this);
    }

    clickAction(article) {
        this.props.deleteArticle(article);
    }

    componentDidMount()
    {
        if(this.props.articles.length < 1) {
            this.props.fetchArticles({type: 'FETCH_ARTICLES'});
        }
    }


    render()
    {
        console.log(this.props);

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
            <div className="card-columns">

                {articles.map((el, index) => (

                    <div className="card border-dark text-center w-100 " style={divComponent}  key={index}>
                        <img src={el.image} className="card-img-top"  />
                        <div className="card-header">{el.game.name} </div>




                        <br></br>
                        {el.title}
                        <br></br>

                        <br></br>



                        <Link to={ `/review/${el.id}` }><button className="btn btn-primary btn-lg" style={btnComponent}>Read more</button></Link>

                        <div className="card-footer">
                            <small className="text-muted"> {el.user.name} </small>
                        </div>

                    </div>

                ))}


            </div>
        );
    }
}
//<button onClick={() => this.clickAction(el)} className="btn btn-danger btn-lg" style={btnComponent}>delete</button>


const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;