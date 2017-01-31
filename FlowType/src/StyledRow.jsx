// @flow 
import React from 'react';
import Row from './Row.jsx';
import style from './style.jsx';

type Props = {
    temperature: number,
    humidity: number,
    heatIndex: number,
    craetedAt: string
};

export default class StyledRow extends React.Component {
    props: Props;


    render() {
        // this.test() * 2;
        return <Row
            temperature={"this.props.temperature"}
            humidity={this.props.humidity}
            heatIndex={this.props.heatIndex}
            craetedAt={this.props.craetedAt}
            style={{
                row: style.rowStyle,
                cell: style.cellStyle,
                time: style.timeStyle,
                icon: style.iconStyle,
                iconCol: style.iconColStyle,
                timeCol: style.timeColStyle
            }} ></Row>
    }

    // test() {
    //     if (true) {
    //         return '';
    //     }
    //     return null;
    // }
}