import React from 'react';
import axios from 'axios';
import CustomForm from '../components/Form';
import Button from 'react-bootstrap/Button';


class PlayerDetailView extends React.Component {
  state = {
    player: {}
  }

  componentDidMount() {
    const playerID = this.props.match.params.playerID;
    axios.get(`http://127.0.0.1:8000/api/${playerID}`)
    .then(res => {
      this.setState({
        player: res.data
      });
    })
  }
  
  handleDelete = (event) => {
    const playerID = this.props.match.params.playerID;
    axios.delete(`http://127.0.0.1:8000/api/${playerID}`);
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        {this.state.player.score}
        <CustomForm 
          requestMethod="put"
          playerScoreID={this.props.match.params.playerID} 
          btnText="Update"/>
        <form onSubmit={this.handleDelete}>
          <Button className="test" variant="danger" type="submit">Delete</Button>
        </form>
      </div>
    );
  }
}

export default PlayerDetailView;