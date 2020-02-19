import React from 'react';
import { connect } from 'react-redux';


class PrintContent extends React.Component {
  render() {
    const { patient_id, mr_no, password, name, contact, age, gender } = this.props.printData
    console.log('patient_data: ', this.props.patient_data);
    return (
          <div className="print-mainContainer">
            <div className="print-header">
                <div className="print-container">
                    <img className="print-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d2/Fab_Lab_logo.svg"/>
                </div>
            </div>
            <div className="print-content print-container">
                <div className="print-label-Wrapper">
                  <span className="print-label">Name: </span>
                  <span className="print-value">{name}</span>
                </div>
                <div className="print-label-Wrapper">
                  <span className="print-label">Contact No: </span>
                  <span className="print-value">{contact}</span>
                </div>
                <div className="print-label-Wrapper">
                  <span className="print-label">Age: </span>
                  <span className="print-value">{age}</span>
                </div>
                <div className="print-label-Wrapper">
                  <span className="print-label">Gender: </span>
                  <span className="print-value">{gender}</span>
                </div>
            </div>
        </div>
      );
    }
  }

const mapStateToProps = state => {
  return {patient_data: state.patient_reducer}
}
  
export default connect(mapStateToProps)(PrintContent);