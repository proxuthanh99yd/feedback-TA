import PropTypes from "prop-types";
import { Component, Fragment } from "react";

export default class Form extends Component {
    static propTypes = {
        review: PropTypes.string,
        rate: PropTypes.number,
        onChange: PropTypes.func,
        onSubmit: PropTypes.func,
    };

    render() {
        const rates = [
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
        ];
        return (
            <div className="form-block">
                <h2>Thầy Phú dạy anh em có hay không ?????</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="rating">
                        {rates.map((el, i) => (
                            <Fragment key={i}>
                                <label
                                    className={`rating-label ${
                                        this.props.rate === i * 1.0 + 1
                                            ? "active"
                                            : ""
                                    }`}
                                    htmlFor={el}
                                >
                                    {i + 1}
                                </label>
                                <input
                                    checked={
                                        this.props.rate === i * 1.0 + 1
                                            ? true
                                            : false
                                    }
                                    hidden
                                    onChange={this.props.onChange}
                                    type="radio"
                                    name="rating"
                                    className="rating"
                                    id={el}
                                    value={i + 1}
                                />
                            </Fragment>
                        ))}
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.onChange}
                            type="text"
                            name="review"
                            value={this.props.review}
                        />
                        <input
                            type="submit"
                            value="Send"
                            onClick={this.props.onSubmit}
                        />
                    </div>
                </form>
            </div>
        );
    }
}
