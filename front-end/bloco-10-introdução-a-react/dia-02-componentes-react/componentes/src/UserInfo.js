import React from "react";
import propTypes from 'prop-types';

class UserInfo extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.user.name}</li>
                <li>{this.props.user.email}</li>
                <li>{this.props.user.age}</li>
            </div>
        )
    }
}

UserInfo.propTypes = {
  /* user: propTypes.object.isRequired, */
  /* user: propTypes.shape({
      name: propTypes.string,
      email: propTypes.string,
      age: propTypes.number,
  }) */
  user: propTypes.exact({
    name: propTypes.string,
    email: propTypes.string,
    age: propTypes.number,
    id: propTypes.number,
})
};

UserInfo.defaultProps = {
    name: 'stranger',
    email: 'stranger',
    age: 'stranger',
    id: 'stranger',
};

export default UserInfo;