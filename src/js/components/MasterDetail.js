import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/index";
import {Link} from "react-router-dom";

const mapDispatchToProps = dispatch => {
    return {
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const mapStateToProps = state => {
    return { articles: state.articles };
};

class ConnectedDetail extends Component{

    constructor(match) {
        super(match);
    }

    componentDidMount()
    {

        if(this.props.articles.length === 0)
        {
            this.props.fetchArticles();
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
        let article = this.props.articles.find(articlemap => articlemap.id.toString()  === this.props.match.params.id);
        console.log('article123', this.props.articles);
        if (article)
        {
            return (
                <div  style={containerStyle}>

                    <div className="" style={div1}> <h1 >{article.title} </h1> </div>
                    <div style={div2}><h4>{article.name} </h4></div>
                    <p style={div3}>{article.description} </p>
                    <img className="rounded" style={imgStyle} src={article.image} />
                    <p style={div4}>{article.review} </p>

                    <p>{} </p>
                    <br></br>
                    <Link to={'/'}><button  className="btn btn-primary btn-lg">Back</button></Link>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <p>Review not found. Sorry.</p>
                </div>
            );
        }
    }
}

const Detail = connect(mapStateToProps, mapDispatchToProps)(ConnectedDetail);

export default Detail;
