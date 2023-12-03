import React, {Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({ hasError: True})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oops! There was an error!</h1>
        }
        return this.props.children
    }
}