import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


const GET_SONG_URL = gql`
query song($name: String!) {
  song(name: $name){
    artistName
  }
}
`;


export default function SongLink (props){ 
  return ( <Query    
              query={GET_SONG_URL}
              variables={ { name:props.song } }
            >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return  (
        <div >
          {data.song.map((item, i) => (
            <div key={i}>
              <a href={item.artistName} >{item.artistName}</a>
              </div>
          ))}
         
        </div>
      );
    }}
  </Query>
  )
};