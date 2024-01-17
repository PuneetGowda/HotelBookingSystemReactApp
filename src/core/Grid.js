import React, { Component } from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import Card from './Card';
import '@inovua/reactdatagrid-community/index.css';
import '../assets/styles/Grid.css';
import { connect } from 'react-redux';
import Search from './Search';
import { activeIndexAction } from '../redux/actions/GridIndexAction';
import { gridRefAction } from '../redux/actions/GridRefAction';

class Grid extends Component {
  constructor() {
    super();

    console.log('inside grid constructor');
  }

  componentDidMount() {
    console.log('inside grid', this.props.gridRef);
  }

  render() {
    return (
      <Card>
        <div className="container">
          <div className="count">
            {`${this.props.hotelsState.length}\u00A0${this.props.label}`}
          </div>
          <Search />
        </div>
        <ReactDataGrid
          className="data-grid"
          idProperty="id"
          showCellBorders="true"
          columns={this.props.columnsState}
          dataSource={this.props.hotelsState}
          onReady={this.props.gridRefAction}
          onActiveIndexChange={this.props.activeIndexAction}
          activeIndex={this.props.activeIndex}
        />
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    columnsState: state.gridReducerFunction.columns,
    hotelsState: state.gridReducerFunction.data,
    label: state.gridReducerFunction.label,
    gridRef: state.gridRefReducerFunction.gridRef,
    activeIndex: state.gridIndexReducerFunction.activeIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    gridRefAction: (data) => dispatch(gridRefAction(data)),
    activeIndexAction: (data) => dispatch(activeIndexAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
