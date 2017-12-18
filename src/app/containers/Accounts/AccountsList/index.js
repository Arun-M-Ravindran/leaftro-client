import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

import PageBase from 'components/PageBase';


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
                <TableHeaderColumn>Sl No</TableHeaderColumn>
              </TableRow>
            </TableHeader>
          </Table>
        </div>
      </PageBase>
    );
  }
}

AccountsList.propTypes = {

};

export default AccountsList;
