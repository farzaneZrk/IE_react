import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";
import { any } from 'prop-types';

class TopLightComponent extends Component <props, State> {
    constructor(props: props) {
        super(props);
        this.state = {
            hover: false
        };
    }

    toggleHover = () =>{
        this.setState({hover: !this.state.hover})
    };

    render() {
        let searchButton:CSSProperties;

        if(!this.state.hover) {
            searchButton= {
                position: 'absolute',
                top: '0',
                left: '0',
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'rgb(4, 179, 179)',
                border: '1px solid rgb(205, 240, 251)',
                color: 'white',
            };

        } else {
            searchButton= {
                position: 'absolute',
                top: '0',
                left: '0',
                display: 'inline-block',
                padding: '10px 20px',
                backgroundColor: 'yellow',
                border: '1px solid rgb(205, 240, 251)',
                color: 'black',
            }
        }
        let inputBox:CSSProperties = {
            position: 'relative',
            backgroundColor: 'rgb(205, 240, 251)',
            border: '3px solid rgb(205, 240, 251)',
            borderBottom: '3px solid rgb(4, 179, 179)',
            marginLeft: '25%',
            marginRight: '25%',
            height: '30%',
            maxHeight: "50px",

        };

        let searchBox:CSSProperties = {
                border: '2px solid rgb(205, 240, 251)',
                background: 'rgb(205, 240, 251)',
                padding: '10px 10px 10px 20px',
                position: 'absolute',
                right: '0',
                width: '100%',
        };

        let TopLightBlueLine:CSSProperties = {
            marginTop: "-2%",
            // padding: "1em",
            marginBottom: "35px",
            border: "10px solid lightblue",
            backgroundColor: "lightblue",
            height: "20em",
            position: "relative",
        };

        let TopLightBlueLineHeading:CSSProperties = {
            marginRight: "10%",
            fontWeight: "bold",
            color: "rgb(3, 129, 129)",
            marginBottom: "1.5%",
            marginTop: "2%",
        };

        let TopLightBlueLineParagraph = {
            marginRight: "13%",
            marginBottom: "1.5%",
        };

        return (
            <div style={TopLightBlueLine} dir="rtl">
                <h1 style={TopLightBlueLineHeading}>جاب‌اونجا خوب است!</h1>
                <p style={TopLightBlueLineParagraph}>
                    تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش
                    مجازی
                    را بدلیل نداشتن تعامل و ارتباط
                </p>
                <div style={inputBox}>
                    <input
                        placeholder="جستجو در جاب‌اونجا"
                        style={searchBox}
                        onChange={this.props.onChangeinput}
                        onBlur={this.props.onBlurinput}
                    />
                    <button style={searchButton}
                            onMouseEnter={this.toggleHover}
                            onMouseLeave={this.toggleHover}
                            onClick={this.props.onClickButton}
                            type="submit">جستجو
                    </button>
                </div>
            </div>
        );
    }
}


interface State {
    hover: boolean;
}

interface props {
    onChangeinput: any;
    onBlurinput: any;
    onClickButton: any;
}

export default TopLightComponent;
