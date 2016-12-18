import React, { Component } from 'react';
import Test from '../containers/Test';

class Default extends Component {
    render() {
        return (
            <div className="p-default">
                <div className="p-default__header">
                    <h4 className="p-default__header_title">Mattel Web Starter</h4>
                </div>
                <Test/>
            </div>
        );
    }
}

export default Default;