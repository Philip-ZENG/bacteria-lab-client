// Header at the top of the gameWorld page, where players can see the infor mation of their current status

import React,  {Component} from 'react';
import { Container, Button, Image, Grid, Card } from 'semantic-ui-react';
import BacteriaLabCore from '../eth/bacteriaLabCore';
import { connect } from 'react-redux';

class TileInfo extends Component {
  state = {
    selectedColonyID: this.props.selectedColonyID,
    ownerID: "",
    absorptionRate: "",
    defenseNutrition: "",
    occupyNutrition: "",
    isOwned: false
  }

  async componentDidMount(){
    this.getColonyInfo();
  }

  async getColonyInfo() {
    const colonyInfo = await BacteriaLabCore.methods.getColonyInfo(this.props.selectedColonyID).call();
    this.setState({ownerID: colonyInfo[1], absorptionRate: colonyInfo[2], defenseNutrition: colonyInfo[3], occupyNutrition: colonyInfo[4], isOwned: colonyInfo[5]});
  }

  render(){
    this.getColonyInfo();
    return (
        <Container>
          <div style={{height:'250px'}}>
            <p>Colony ID: {this.props.selectedColonyID}</p>
            <p>Owner ID: {this.state.absorptionRate}</p>
            <p>Absorption Rate:{this.state.defenseNutrition}</p>
            <p>Defense Nutrition: {this.state.defenseNutrition}</p>
            <p>Occupy Nutrition: {this.state.occupyNutrition}</p>
            <p>Is Owned: {String(this.state.isOwned)}</p>
          </div>
        </Container>
    );
  }
};

const mapStateToProps = state => {
  return {
    selectedColonyID: state.selectedColonyID
  }
};

const mapDispatchToProps = dispatch => {
  return {
    changeSelectedColony: (newColonyID) => dispatch({type: 'changeSelectedColony', newSelectedColonyID: newColonyID})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TileInfo);
