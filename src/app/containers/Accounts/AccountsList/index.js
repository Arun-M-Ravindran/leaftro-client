import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import PageBase from 'components/PageBase';
import styles from './styles';


class AccountsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PageBase title="Accounts" navigation="Application / Accounts" >
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn style={styles.table.columns.id} >Sl No</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Contact number</TableHeaderColumn>
                <TableHeaderColumn>Company Address</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableRowColumn style={styles.table.columns.id} >1</TableRowColumn>
                <TableRowColumn>Arun Ravindran</TableRowColumn>
                <TableRowColumn>arunmr503@gmail.com</TableRowColumn>
                <TableRowColumn>9087654321</TableRowColumn>
                <TableRowColumn>Bla Bla Blee Bloo Blum</TableRowColumn>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </PageBase>
    );
  }
}

AccountsList.propTypes = {

};

export default AccountsList;
