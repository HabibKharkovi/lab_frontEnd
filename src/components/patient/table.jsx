import React, { Component } from 'react'
import MaterialTable from 'material-table'
import Button from '@material-ui/core/Button'

class Table extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/patients')
    .then(res => res.json())
    .then(data => this.setState({ data: data.data.patients }))
  }

  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Age', field: 'age' },
            { title: 'contact', field: 'contact' },
            { title: 'MR No', field: 'mr_no' }
          ]}
          data={this.state.data.map(item => ({
              name: item.name,
              age: item.age,
              contact: item.contact,
              mr_no: item.mr_no
          }))}
          title=""
          localization={{
            pagination: {
              labelRowsPerPage: '10',
            }
          }}
          options={{
              addRowPosition: 'first',
              pageSize: 10,
              pageSizeOptions: [10, 20]
          }}
          detailPanel={rowData => {
            return (
              <div style={{padding: '10px'}}>
                <Button variant="contained" size="small" color="primary">
                  View Details
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Edit
                </Button>
              </div>
            )
          }}
          
          onRowClick={(event, rowData, togglePanel) => togglePanel()}
        />
      </div>
    )
  }
}

export default Table;