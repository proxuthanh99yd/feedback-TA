import PropTypes from "prop-types";
import { Component } from "react";

export default class Container extends Component {
    static propTypes = { children: PropTypes.any };

    render() {
        return <div className="container">{this.props.children}</div>;
    }
}
