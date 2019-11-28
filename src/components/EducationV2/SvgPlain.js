import React from 'react';

export default class SvgPlain extends React.Component {
    render() {
        return (
            <svg className={this.props.className ? this.props.className : ""} xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 364" style={{backgroundColor: "transparent"}}>
                <path stroke="transparent" fill="#777777" strokeWidth="0"
                    d="M 10 16
                    A 6 6, 0, 1 1, 14 16
                    v 100
                    A 6.3 6.3, 0, 0 1, 14 128
                    v 100
                    A 6.3 6.3, 0, 0 1, 14 240
                    v 100
                    A 6 6, 0, 1 1, 10 340
                    v -100
                    A 6.3 6.3, 0, 0 1, 10 228
                    v -100
                    A 6.3 6.3, 0, 0 1, 10 116
                    z"
                />
            </svg>
        );
    }
}