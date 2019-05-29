import React, { Component, Fragment } from 'react'
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { setUsers } from './actions';

class Users extends Component {

  getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((data)=> {
      this.props.setUsersFromApi(data)
      console.log(data)
    })
  }

  render() {
    return (
      <Fragment>
        <div>
          <h3>Press the button to get users and display them below</h3>
          <Button onClick={this.getUsers} variant="contained" color="primary">Get Users</Button>
        </div>
        <div className="users-block">
        {this.props.users.map((user) => console.log(user.name, user.username, user.email, user.website))}
        </div>
      </Fragment>
    )
  }
}



const mapStateToProps = (state) => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUsersFromApi: (users) => dispatch(setUsers(users))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)