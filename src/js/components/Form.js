import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";
import Redirect from "react-router-dom/es/Redirect";

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            review: "",
            description: "",
            title: "",
            image: "",
            id: "",
            render: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const {image} = this.stxate;
        const { name } = this.state;
        const { description} = this.state;
        const { review } = this.state;
        const { title } = this.state;
        if((this.state.title).length > 1 && (this.state.name).length > 1 && (this.state.description).length > 1 && (this.state.review).length > 1 && (this.state.image).length > 1) {

            const id = uuidv1();

            this.props.addArticle({name, review, description, title, id, image});

            this.setState({name: ""});
            this.setState({description: ""});
            this.setState({review: ""});
            this.setState({title: ""});
            this.setState({id: id});
            this.setState({image: ""});

            this.setState({render:true});
        }
    }

    render() {
        if(this.state.render === true){
            return <Redirect push to="/"/>;
        }

        const { name } = this.state;
        const {review} = this.state;
        const {description} = this.state;
        const {title} = this.state;
        const {image} = this.state;

        const labelComponent = {
            margin:"25px 0px 0px 0px"
        };
        const divComponent = {
            margin: "80px 0px 0px 150px"
        };

        return (
            <div className="col-md-4 offset-md-1" style={divComponent}>
                <h2>Add a new Review</h2>
                <br></br> <br></br> <br></br>


                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label style={labelComponent} htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            value={title}
                            onChange={this.handleChange}
                        />
                        <label style={labelComponent} htmlFor="name">Game Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={this.handleChange}
                        />
                        <label style={labelComponent} htmlFor="preface">Preface</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                        <label style={labelComponent} htmlFor="name">Review text</label>
                        <textarea
                            rows="4"
                            className="form-control"
                            id="review"
                            value={review}
                            onChange={this.handleChange}
                        />
                        <label style={labelComponent} htmlFor="image">Image Link</label>
                        <input
                            type="text"
                            className="form-control"
                            id="image"
                            value={image}
                            onChange={this.handleChange}
                        />
                    </div>
                    <a href={this.state.id}>
                        <button type="submit" className="btn btn-success btn-lg">
                            SAVE
                        </button>
                    </a>
                </form>
            </div>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;