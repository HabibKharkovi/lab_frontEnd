import React from 'react';
import Button from '@material-ui/core/Button';
import ReactToPrint from 'react-to-print';

 
const PrintButton = props => {
    return (
        <ReactToPrint
            trigger={() => 
            <Button variant="contained" color="primary">
                   Print
            </Button>}
            content={props.componentRef}
        />
    )
}

export default PrintButton;
          
