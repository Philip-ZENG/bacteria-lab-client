// Header at the top of the gameWorld page, where players can see the infor mation of their current status

import React, { Component } from 'react';
import { Container, Button, Image, Grid, Card, Segment, Divider } from 'semantic-ui-react';

class Actionboard extends Component {

    render() {
        return (
                <Container>
                    <Grid columns={2}>
                        <Grid.Row>
                            <Grid.Column width={8}>
                                <Container textAlign='center'>
                                    <Card fluid>
                                        <Card.Content>
                                            <Image
                                                floated='right'
                                                size='mini'
                                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                            />
                                            <Card.Header>Steve Sanders</Card.Header>
                                            <Card.Meta>Friends of Elliot</Card.Meta>
                                            <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='green'>
                                                    Approve
                                                </Button>
                                                <Button basic color='red'>
                                                    Decline
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Container>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <Container textAlign='center'>
                                    <Card fluid>
                                        <Card.Content>
                                            <Image
                                                floated='right'
                                                size='mini'
                                                src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
                                            />
                                            <Card.Header>Steve Sanders</Card.Header>
                                            <Card.Meta>Friends of Elliot</Card.Meta>
                                            <Card.Description>
                                                Steve wants to add you to the group <strong>best friends</strong>
                                            </Card.Description>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <div className='ui two buttons'>
                                                <Button basic color='green'>
                                                    Approve
                                                </Button>
                                                <Button basic color='red'>
                                                    Decline
                                                </Button>
                                            </div>
                                        </Card.Content>
                                    </Card>
                                </Container>
                            </Grid.Column>

                        </Grid.Row>
                    </Grid>
                </Container>
        );
    }
};

export default Actionboard;
