import React, { Component } from 'react';

import './Filter.css';

class Filter extends Component {
    buttons = [
      { name: 'all', label: 'All'},
      { name: 'active', label: 'Active'},
      { name: 'done', label: 'Done'}
    ];

  render () {
    const {filter, onFilterChange} = this.props;
    const  buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz =  isActive ? 'btn-green' : 'btn-outline-secondary';
      return (
          <button type="button"
                  className= {`btn btn-filt col-4 ${clazz}`}
                  key = {name}
                  onClick = {() => onFilterChange(name)}>
            {label}
          </button>
        );
    });
    return (
      <div className="row btn-position">
        {buttons}
      </div>
    );
  }
}


export default Filter;