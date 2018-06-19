import React, { Component } from 'react';
import Link from "./Link";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

class LinkList extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
      {
          ({ loading, error, data}) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error!</p>;
            return data.feed.map(link => {
              return <Link key={link.id} link={link} />
            });
          }
        }
      </Query>
    );
  }
}

const FEED_QUERY = gql`
  query FeedQuery {
    feed {
      id
      url
      description
    }
  }
`;

export default LinkList;
