import React, {Component} from 'react';
import {CSSProperties} from "@material-ui/core/styles/withStyles";

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
        var searchButton:CSSProperties;
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
        var inputBox:CSSProperties = {
            position: 'relative',
            backgroundColor: 'rgb(205, 240, 251)',
            border: '3px solid rgb(205, 240, 251)',
            borderBottom: '3px solid rgb(4, 179, 179)',
            marginLeft: '25%',
            marginRight: '25%',
            height: '20%',

        };
        var searchBox:CSSProperties = {
                border: '1px solid rgb(205, 240, 251)',
                background: 'rgb(205, 240, 251)',
                padding: '10px 10px 10px 20px',
                position: 'absolute',
                top: '0',
                right: '0',
                width: '80%',
        };

        return (
            <div className="toplightblueline" dir="rtl">
                <h1>جاب‌اونجا خوب است!</h1>
                <p>
                    تولید محتوای الکترونیک یکی از ابزارهای اساسی در زمینه کیفیت آموزش مجازی می باشد. بسیاری افراد آموزش
                    مجازی
                    را بدلیل نداشتن تعامل و ارتباط
                </p>
                <div style={inputBox}>
                    <input value="" placeholder="جستجو در جاب‌اونجا" style={searchBox}/>
                    <button style={searchButton}
                            onMouseEnter={this.toggleHover}
                            onMouseLeave={this.toggleHover}
                            type="submit">جستجو
                    </button>
                </div>
            </div>
        );
    }
}

// PageHeader.propTypes = {
//   children: propTypes.any.isRequiered,
//   style: propTypes.any,
// };

interface State {
    hover: boolean;
}

interface props {
}

export default TopLightComponent;
