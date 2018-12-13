// src/js/components/Form.js
import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/index";


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
            title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { name } = this.state;
        const { description} = this.state;
        const { review } = this.state;
        const { title } = this.state;

        const id = uuidv1();
        this.props.addArticle({ name, review, description, title, id });
        this.setState({ name: "" });
        this.setState({description: ""});
        this.setState({review: ""});
        this.setState({title: ""});

    }

    render() {
        const { name } = this.state;
        const {review} = this.state;
        const {description} = this.state;
        const {title} = this.state;

        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        className="form-control"
                        id="review"
                        value={review}
                        onChange={this.handleChange}
                    />



                </div>
                <button type="submit" className="btn btn-success btn-lg" >
                    SAVE
                </button>
            </form>
        );
    }
}
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;