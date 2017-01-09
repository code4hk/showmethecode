import React from 'react';
import _ from 'lodash';
import moment from 'moment';
import $ from 'jquery';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import CircularProgress from 'material-ui/CircularProgress';
import StyledRow from './StyledRow.jsx';
import style from './style.jsx';


export default class Temperature extends React.Component {


  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.refresh();
    setInterval(() => {
      this.refresh();
    }, 60000);
  }

  getTemperature() {
    this.setState(Object.assign({}, this.state, { loading: true }));
    $.ajax({
      url: `//xxxxxxxxxxxxxx/temperature?limit=100&hourly=${this.hourly}`,
      dataType: 'json',
      success: data => {
        this.setState({ data, loading: false });
      }
    }).fail(e => {
      console.error('Get Temperature', e);
      alert('ERROR1');
    });
  }

  hourly = true;


  refresh() {
    this.getTemperature();
  }

  hourlyChanged(e, v) {
    this.hourly = v;
    this.getTemperature();
  }

  render() {

    if (!this.state.data) {
      return <div>..........................</div>;
    }

    let loadingInd = <span style={style.loadingStyle} ></span>
    if (this.state.loading) {
      loadingInd = <CircularProgress size={0.3} style={style.loadingStyle} />;
    }

    const rows = _(this.state.data)
      .map((data, i) => {
        return <StyledRow
          key={'row_' + i}
          temperature={data.temperature}
          humidity={data.humidity}
          heatIndex={data.heat_index}
          craetedAt={data.created_at}
          ></StyledRow>;
      }).value();



    return (
      <div>
        <Toggle label="Hourly" defaultToggled={true} onToggle={this.hourlyChanged.bind(this)} style={{ margin: '16px 10px', width: '95%' }} />
        {loadingInd}
        <Paper zDepth={2} >
          <Table selectable={false}>
            <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
              <TableRow style={style.rowStyle}>
                <TableHeaderColumn style={style.iconColStyle} ></TableHeaderColumn>
                <TableHeaderColumn style={style.timeColStyle} >Time</TableHeaderColumn>
                <TableHeaderColumn colSpan="2" style={style.cellStyle} >HI ℃</TableHeaderColumn>
                <TableHeaderColumn style={style.cellStyle} >T ℃</TableHeaderColumn>
                <TableHeaderColumn style={style.cellStyle} >H %</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {rows}
            </TableBody>
          </Table>
        </Paper>
        <FloatingActionButton mini={true} style={{ position: 'fixed', bottom: 15, right: 15 }}
          onClick={this.refresh.bind(this)} onTouchTap={this.refresh.bind(this)} >
          <i className="material-icons" >refresh</i>
        </FloatingActionButton>
      </div>
    );
  }
}
