import { Component } from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export class Filter extends Component {
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    render() {
        return (
            <label>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    className={css.filterInput}
                />
            </label>
        );
    };
}