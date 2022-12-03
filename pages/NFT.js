// This page is used to the game world

import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import store from '../store/index';

import NFTboard from '../component/NFTboard';
import NavbarTop from '../component/NavbarTop';
import NavbarBottom from '../component/NavbarBottom';

import {
    Container,
    Divider,
    Grid,
    Header,
    Message,
    Icon,
    Input
} from 'semantic-ui-react'

class NFT extends Component {

    render() {
        return (
            <div>
                <Head>
                    <title>NFT: Bacteria Land</title>
                    <meta name="description" content="Bacteria Land NFT" />
                    <link rel="icon" href="/icon.png" />
                </Head>

                <NavbarTop />

                <Grid columns={4} divided>
                    <Grid.Row>
                        <Grid.Column width={1}>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <div style={{height:'120px'}}></div>
                            <Divider horizontal>
                                <Header as='h3'>
                                    <Icon name='dna' />
                                    Bacteria Land NFT
                                </Header>
                            </Divider>
                            <Message
                                icon='image'
                                header='What is the NFTs of Bacteria Land?'
                                content='The NFT is the history of Bacteria Land. All contributions play a vital part in the lifecycle of Bacteria Land!'
                            />
                            <Message
                                icon='history'
                                header='The Carol of Bacteria Land History'
                                content='Her story is not written, she walks this earth making history one step at a time. She whispers to the waves and they carry her song to the whales. One day a fisherman will find her story washed ashore, laying sodden and sandy on a rock and around the fire, her tale will be told.'
                            />
                            <div style={{height:'25px'}}></div>
                            <Divider horizontal>
                                <Header as='h3'>
                                    <Icon name='search' />
                                    Show NFT
                                </Header>
                            </Divider>
                            <form onSubmit={()=>Router.push('/gameWorld')}>
                                <Input action='Show' placeholder='Search...' size='small' fluid /> 
                            </form>
                            <Message warning
                                icon='warning sign'
                                header='How to check the NFT?'
                                content='Please input the NFT ID.'
                            />

                        </Grid.Column>

                        <Grid.Column width={8}>
                            <div style={{ height: '25px' }}>
                            </div>
                            <Container textAlign='center'>
                                <Provider store={store}>
                                    <NFTboard />
                                </Provider>
                            </Container>
                        </Grid.Column>

                        <Grid.Column width={1}>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <NavbarBottom />
            </div>


        );
    };
}

export default NFT


