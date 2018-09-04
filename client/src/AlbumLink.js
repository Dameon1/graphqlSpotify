import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ALBUM_URL = gql`
  query albums($name: String!) {
    albums(name: $name){
      albumName
      releaseDate
      artist
      albumUrl
      albumImage     
    }
}`;

export default function AlbumLink (props){ 
  return ( <Query    
              query={GET_ALBUM_URL}
              variables={ { name:props.album } }
            >
    {({ loading, error, data }) => {
      
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        console.log(data)
      return  (
        <div >
          {data.albums.map((item, i) => (
            <div key={i} className="songBox">
              { (item.albumImage !== undefined) 
                ? <img src={item.albumImage} alt='fix'style={{width:'200px',height:'200px'}}/>
                : null }       
              <div>
              <h3>{item.name}</h3>
              { (item.albumUrl!== undefined)
                ? <a href={item.albumUrl} target='blank'>{item.albumName}</a> 
                : null }              
              </div> 
            </div>
          ))}         
        </div>
      );
    }}
  </Query>
  )
};
