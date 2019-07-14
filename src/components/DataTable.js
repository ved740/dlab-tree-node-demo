import React from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

class DataTable extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [{
        headerName: "ID", field: "id", sortable: true, filter: true 
      }, {
        headerName: "Season", field: "season", sortable: true, filter: true 
      }, {
        headerName: "City", field: "city", sortable: true, filter: true 
      }, {
        headerName: "Date", field: "date", sortable: true, filter: true 
      }, {
        headerName: "Team1", field: "team1", sortable: true, filter: true 
      }, {
        headerName: "Team2", field: "team2", sortable: true, filter: true 
      }, {
        headerName: "Toss Winner", field: "tossWinner", sortable: true, filter: true 
      }],
      rowData: [
        {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }, {
          id: 1,
          season: 2017,
          city: "Mumbai",
          date: "04/06/2017",
          team1: "Mumbai Indians",
          team2: "Chennai Superkings",
          tossWinner: "Mumbai Indians"
        }
      ]
    }
  }
 
  render() {
    return (
      <div>
        <div 
          className="ag-theme-balham"
          style={{ 
          height: '580px', 
          width: '100%' }} 
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}
 
export default DataTable;