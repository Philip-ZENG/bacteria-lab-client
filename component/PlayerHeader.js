// Header at the top of the gameWorld page, where players can see the infor mation of their current status

import React,  {Component} from 'react';
import { Table } from 'semantic-ui-react';

class PlayerHeader extends Component {

  render(){
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Player ID</Table.HeaderCell>
            <Table.HeaderCell>Player Address</Table.HeaderCell>
            <Table.HeaderCell>Nutrition</Table.HeaderCell>
            <Table.HeaderCell>Absorption Rate</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>{this.props.playerData.id}</Table.Cell>
            <Table.Cell>{this.props.playerData.playerAddress}</Table.Cell>
            <Table.Cell>{this.props.playerData.nutrition}</Table.Cell>
            <Table.Cell>{this.props.playerData.absorptionRate}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
};

export default PlayerHeader;
