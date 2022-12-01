// This page is used to the game world

import React, { Component } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import web3 from '../eth/web3';
import bacteriaLabCore from '../eth/bacteriaLabCore';
import 'semantic-ui-css/semantic.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import PlayerInfo from '../component/PlayerInfo';
import Gameboard from '../component/Gameboard';
import TileInfo from '../component/TileInfo';
import Actionboard from '../component/Actionboard';
import NavbarTop from '../component/NavbarTop';
import NavbarBottom from '../component/NavbarBottom';

import {
    Container,
    Divider,
    Dropdown,
    Grid,
    Header,
    Image,
    List,
    Menu,
    Segment,
    Icon,
    Input
} from 'semantic-ui-react'

class GameWorld extends Component {

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
                        <Grid.Column width={7}>
                            <div style={{height:'120px'}}></div>
                            <Divider horizontal>
                                <Header as='h3'>
                                    <Icon name='dna' />
                                    Bacteria Land NFT
                                </Header>
                            </Divider>

                            <div style={{height:'250px'}}></div>
                            <Divider horizontal>
                                <Header as='h3'>
                                    <Icon name='search' />
                                    Show NFT
                                </Header>
                            </Divider>
                            <form onSubmit={()=>Router.push('/gameWorld')}>
                                <Input action='Show' placeholder='Search...' size='small' fluid /> 
                            </form>

                        </Grid.Column>

                        <Grid.Column width={7}>
                            <div style={{ height: '25px' }}>
                            </div>
                            <Container textAlign='center'>
                                <Gameboard />
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

export default GameWorld


