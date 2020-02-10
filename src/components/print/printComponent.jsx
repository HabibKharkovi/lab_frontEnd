import React from 'react';
import PrintButton from './printButton'
import PrintContent from './printContent'
import './printStyle.css';

 
class PrintComponent extends React.Component {
    
    render() {
      return (
        <div>
            <PrintContent printData={this.props.printData} ref={el => (this.componentRef = el)}/>
            <PrintButton componentRef={() => this.componentRef}/>
        </div>
      );
    }
  }

export default PrintComponent;