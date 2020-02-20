import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
      { title: 'Surname', field: 'surname' },
      { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
      {
        title: 'Birth Place',
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
      },
    ],
    data: [
      { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
      {
        name: 'Zerya Betül',
        surname: 'Baran',
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  console.log(state.data)

  React.useEffect(() => {
    fetch('http://localhost:3000/api/v1/patients')
        .then(response => response.json())
        .then(json => setState({
          columns: [
            { title: 'Name', field: 'name' },
            { title: 'Age', field: 'age' },
            { title: 'Gender', field: 'gender' },
            { title: 'Contact No', field: 'contact' },
            { title: 'Patient Id', field: 'patient_id' },
            { title: 'MR NO', field: 'mr_no' },
            { title: 'Date', field: 'date' }
          ],
          data: json.data.patients
        }))
        .catch(console.log('no server'));
  }, [setState]);

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      options={{
        filtering: true
      }}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}