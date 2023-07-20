import PropTypes from "prop-types";
import { Component } from "react";

export default class ListItems extends Component {
    static propTypes = {
        items: PropTypes.any,
        onDelete: PropTypes.func,
        onEdit: PropTypes.func,
    };

    render() {
        let rate = this.props.items.reduce(
            (prev, next) => Number(prev) + Number(next.rating),
            0
        );
        return (
            <>
                <div className="review-average">
                    <p className="review">{this.props.items.length} Review</p>
                    <p className="average">
                        Average Rating:
                        {isNaN((rate / this.props.items.length).toFixed(1))
                            ? 0
                            : (rate / this.props.items.length).toFixed(1)}
                    </p>
                </div>
                <ul className="list">
                    {this.props.items.map((el, i) => (
                        <li data={el.rating} key={i} className="list-item">
                            {el.review}
                            <p className="content"></p>
                            <div className="action">
                                <button
                                    onClick={() => this.props.onEdit(el.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => this.props.onDelete(el.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
