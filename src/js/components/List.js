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

        this.props.fetchArticles({type: 'FETCH_ARTICLES'});
    }


    render()
    {
        const articles = this.props.articles.articles;
        const image = `http://localhost:81/tdi/api-ssj2/app/`;


        return (
            <ul className="list-group list-group-flush">
                {articles.map((el) => (
                    <li className="list-group-item" key={el.id} >
                        Review Title: {el.title}
                        <br></br>
                        Game: {el.name}
                        <br></br>
                        Prefácio: {el.description}
                        <br></br>
                        Review: {el.review}
                        <br></br>
                        <img src={image + el.image}/>
                        <br></br>
                        <Link to={ `/review/${el.id}` }><button>Ver mais</button></Link>
                        <button className="btn btn-danger btn-lg" onClick={() => this.clickAction(el)}>delete</button>
                    </li>
                ))}
            </ul>
        );
    }
}
/*const ConnectedList = ({articles}) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id}>
                {el.title}
            </li>
        ))}
    </ul>
);*/

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;