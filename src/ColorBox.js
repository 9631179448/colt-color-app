import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './ColorBox.css';

export default class ColorBox extends Component {
    render() {
        const { name,background } = this.props;
           return (
        <CopyToClipboard text={background}>
            <div style = {{background: background}} className='ColorBox'> 
            <div className = 'copy-container'>
            <div className = 'box-content'>
                <span className='color-name'>{name}</span>
            </div>
                <button className='Copy-button'>Copy</button>
            </div>
                <span className='See-more'>More</span>
            </div>
        </CopyToClipboard>
        )
    }
}
