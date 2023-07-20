// import PropTypes from 'prop-types'
import { Component } from "react";
import Header from "./Header/Header";
import Container from "./Container/Container";
import Form from "./Form/Form";
import ListItems from "./ListItems/ListItems";

export default class App extends Component {
    state = {
        reviews: [],
        input: {
            id: "",
            rating: 0,
            review: "",
        },
        edit: false,
    };

    handleInput = (e) => {
        const { name, value } = e.target;
        this.setState({
            input: {
                ...this.state.input,
                [name]: value,
            },
        });
    };

    handleSubmit = () => {
        if (this.state.input.review === "") return;
        if (!this.state.edit) {
            this.setState((prevReview) => ({
                reviews: [
                    ...prevReview.reviews,
                    { ...this.state.input, id: Date.now() },
                ],
            }));
        } else {
            this.setState((prevReview) => ({
                reviews: [
                    ...prevReview.reviews.map((el) => {
                        if (el.id === this.state.input.id) {
                            return {
                                ...el,
                                ...this.state.input,
                            };
                        }
                        return el;
                    }),
                ],
            }));
        }
        this.setState({
            input: {
                id: "",
                rating: 0,
                review: "",
            },
            edit: false,
        });
    };

    handleDelete = (id) => {
        const newList = this.state.reviews.filter((el) => el.id !== id);
        this.setState({ reviews: newList });
    };

    handleEdit = (id) => {
        this.setState({
            edit: true,
            input: this.state.reviews.find((el) => el.id === id),
        });
    };

    componentDidMount() {
        localStorage.getItem("reviews")
            ? this.setState({
                  reviews: JSON.parse(localStorage.getItem("reviews")),
              })
            : localStorage.setItem("reviews", "[]");
    }
    componentDidUpdate() {
        localStorage.setItem("reviews", JSON.stringify(this.state.reviews));
    }
    render() {
        return (
            <>
                <Container>
                    <Header />
                    <Form
                        review={this.state.input.review}
                        rate={Number(this.state.input.rating)}
                        onChange={this.handleInput}
                        onSubmit={this.handleSubmit}
                    />
                    <ListItems
                        onEdit={this.handleEdit}
                        onDelete={this.handleDelete}
                        items={this.state.reviews}
                    />
                </Container>
            </>
        );
    }
}
