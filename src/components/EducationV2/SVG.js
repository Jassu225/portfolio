import React from 'react';

export default class SVG extends React.Component {
    render() {
        return (
            <svg className={this.props.className ? this.props.className : ""} xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 364" style={{backgroundColor: "transparent"}}>
                <defs>
                    <linearGradient id="fill" x1="0.5" y1="1" x2="0.5" y2="0">
                        {/* <stop offset="0%;33.33%" stopOpacity="1" stopColor="#033c43"></stop> */}
                        <stop offset="0;0.34" stopOpacity="1" stopColor="#333333">
                            <animate attributeName="offset" from="0" to="0.34" dur="0.335s" begin="0s" repeatCount="1" fill="freeze"/>
                        </stop>
                        <stop offset="0.34;0.662" stopOpacity="1" stopColor="#348498"></stop>
                        <stop offset="0.34;0.662" stopOpacity="1" stopColor="#348498">
                            <animate attributeName="offset" from="0.34" to="0.662" dur="0.33s" begin="0.335s" repeatCount="1" fill="freeze" />
                        </stop>
                        <stop offset="0.662;1" stopOpacity="1" stopColor="#222931"></stop>
                        <stop offset="0.662;1" stopOpacity="1" stopColor="#222931">
                            <animate attributeName="offset" from="0.662" to="1" dur="0.335s" begin="0.665s" repeatCount="1" fill="freeze" />
                        </stop>
                        <stop offset="0" stopOpacity="1" stopColor="#777777"></stop>
                    </linearGradient>
                </defs>
                <path stroke="transparent" fill="url(#fill)" strokeWidth="0"
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