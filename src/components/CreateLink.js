import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class CreateLink extends Component {
  state = {
    description: '',
    url: ''
  };

  render() {
    return (
      <div>
        <div className="flex flex-column mt3">
          <input type="text" className="mb2" value={this.state.description}
            onChange={(e) => this.setState({description: e.target.value})}
            placeholder="A description for the link"
          />
          <input type="text" className="mb2" value={this.state.url}
            onChange={(e) => this.setState({url: e.target.value})}
            placeholder="The URI for the link"
          />
        </div>
        <button onClick={() => this._createLink()}>Submit</button>
      </div>
    )
  }

  async _createLink() {
    const { description, url } = this.state;
    await this.props.postMutation({
      variables: {
        description,
        url
      }
    });
    this.props.push('/')
  }
}

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $url: String!) {
    post(description: $description, url: $url) {
      id
      url
      description
    }
  }
`;

export default graphql(POST_MUTATION, { name: 'postMutation' })(CreateLink);