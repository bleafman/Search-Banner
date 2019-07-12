import React, { Component } from 'react';
import DepartmentList from './departmentList.jsx';
import DepartmentSubMenu from './departmentSubMenu.jsx';
import style from '../../style/main.less'


class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        entering: null,
        leaving: null
     }
     this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
     this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler(e) {
    e.target.style.backgroundColor = '#E5E5E5';
    this.setState({entering: e.target.innerHTML});
  }

  onMouseLeaveHandler(e) {
    e.target.style.backgroundColor = 'white';
    this.setState({entering: null});
  }  

  render() { 
    return ( 
      <div className={`col-3 ${style['column-adjust']}`}>
        <div className={`row ${style['row-adjust']}`}>
          <div className={`col-3 ${style['column-adjust']} ${style['destroy-padding-right']}`}>
            <div className={`${style['hamburger-wrapper']}`}>
              <div className={`${style['lowes-icon']} ${style.hamburger}`}>{'\uEC6E'}</div>
            </div>
          </div>
          <div className={`col-9 ${style['column-adjust']}`}>
            <DepartmentList 
              deptList={this.props.deptList} 
              onMouseEnterHandler={this.onMouseEnterHandler} 
              onMouseLeaveHandler={this.onMouseLeaveHandler}
              category={this.state.entering}
            />
          </div>
        </div>
      </div>
    );
  }
}
 
export default Departments;
