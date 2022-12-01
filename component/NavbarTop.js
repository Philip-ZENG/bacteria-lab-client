import React,  {Component} from 'react';
import Router from 'next/router';
import {Image, Menu, Dropdown } from 'semantic-ui-react';

class NavbarTop extends Component {

  render(){
    return (
        <Menu inverted>
          <Menu.Item as='a' header>
            <Image size='mini' src='/icon.png' style={{ marginRight: '1em' }} />
              <p style={{color:'#38AFE8'}}>Bacteria Lab</p>
          </Menu.Item>
          <Menu.Item as='a' onClick={()=>{Router.push('/')}}>Home</Menu.Item>
          <Menu.Item as='a' onClick={()=>{Router.push('/gameWorld')}}>GameWorld</Menu.Item>
          <Menu.Item as='a' onClick={()=>{Router.push('/gameWorld')}}>NFT (Beta)</Menu.Item>

          <Dropdown item simple text='Admin (only for Beta)'>
            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>{Router.push('/adminInvite')}}>Invite</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Dev Tool</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Dev Board</span>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={()=>{Router.push('/adminConsole')}}>Console</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>Github</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
    );
  }
};

export default NavbarTop;