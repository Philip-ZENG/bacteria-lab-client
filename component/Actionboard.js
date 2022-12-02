// Header at the top of the gameWorld page, where players can see the infor mation of their current status

import React, { Component } from 'react';
import { Container, Button, Grid, Card,  Form, Input, Message } from 'semantic-ui-react';
import BacteriaLabCore from '../eth/bacteriaLabCore';
import web3 from '../eth/web3';

class Actionboard extends Component {
  state = {
    colonyID: "7",
    attackLoading: false,
    occupyLoading: false,
    attackNutritionInput: "",
    messageContent: "",
    messageHidden: true
  }

  onAttack = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ attackLoading: true, messageContent: '', messageHidden:true });
    try {
      const playerID = await BacteriaLabCore.methods.getPlayerID(accounts[0]).call();
      await BacteriaLabCore.methods.attack(playerID, this.state.attackNutritionInput, this.state.colonyID).send({
        from: accounts[0]
      });
    } catch(err) {
      this.setState({ messageHidden: false, messageContent: err.message });
    }
    this.setState({attackLoading: false, attackNutritionInput:""});
  };

  onOccupy = async (event) => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    this.setState({ occupyLoading: true, messageContent: '',  messageHidden:true });
    const playerID = await BacteriaLabCore.methods.getPlayerID(accounts[0]).call();
    try {
      await BacteriaLabCore.methods.occupy(playerID, this.state.colonyID).send({
        from: accounts[0]
      });
    } catch(err) {
      this.setState({ messageHidden: false, messageContent: err.message});
    }
    this.setState({occupyLoading: false});
  };

  render() {
    return (
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column width={8}>
              <Container textAlign='center'>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Attack</Card.Header>
                    <Card.Description>
                      Enter the amount of nutrition you want to deployed in this attack and click the attack button.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Form onSubmit={this.onAttack}>
                      <Form.Field>
                        <Input 
                          value={this.state.attackNutritionInput}
                          onChange={event => this.setState({ attackNutritionInput: event.target.value })}
                          label="Nutrition"
                          labelPosition='right'
                        />
                      </Form.Field>
                      <Button basic color='red' loading={this.state.attackLoading}>
                        Attack
                      </Button>
                    </Form>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>

            <Grid.Column width={8}>
              <Container textAlign='center'>
                <Card fluid>
                  <Card.Content>
                    <Card.Header>Occupy</Card.Header>
                    <Card.Description>
                      Click the button to occupy a colony that is not owned. To occupy a colony that has a owner, attack it first.
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                      <Button basic color='green' onClick={this.onOccupy} loading={this.state.occupyLoading}>
                        Occupy
                      </Button>
                  </Card.Content>
                </Card>
              </Container>
            </Grid.Column>

            <Message error hidden={this.state.messageHidden} content={this.state.messageContent}/>
          </Grid.Row>
        </Grid>
      </Container>
        );
    }
};

export default Actionboard;
