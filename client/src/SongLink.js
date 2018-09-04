import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';


// const GET_SONG_URL = gql`
// query song($name: String!) {
//   song(name: $name){
//     artistName
//   }
// }
// `;
const GET_SONG_URL = gql`
query song($name: String!) {
  song(name: $name){
    songUrl
    title
    artist
    image
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
        console.log(data)
      return  (
        <div >
          {console.log('THIS_______',data.song.map(item=>item))}
          {data.song.map((item, i) => (
            
            <div key={i} className="songBox">
              <img src={item.image} alt='fix'/>
              <div>
              <h3>{item.artist}</h3>
              <a href={item.songUrl} target='blank'>{item.title}</a>
              </div>
            </div>
          ))}
         
        </div>
      );
    }}
  </Query>
  )
};