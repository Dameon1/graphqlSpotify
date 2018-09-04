import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const GET_ARTIST_URL = gql`
  query song($name: String!) {
    artist(name: $name){
      name
      artistUrl
      image
    }
}`;

export default function AritstLink (props){ 
  return ( <Query    
              query={GET_ARTIST_URL}
              variables={ { name:props.artist } }
            >
    {({ loading, error, data }) => {
      
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;
        console.log(data)
      return  (
        <div>          
          {data.artist.map((item, i) => (
            <div key={i} className="songBox">
            { (item.image !== undefined) 
              ? <img src={item.image} alt='fix'style={{width:'200px',height:'200px'}}/> 
              : null }       
              <div>
                <h3>{item.name}</h3>
                { (item.artistUrl!== undefined)
                  ? <a href={item.artistUrl} target='blank'>{item.name}</a> 
                  : null }              
              </div> 
            </div> ))
          }         
        </div>
      );
    }}
  </Query>
  )
};
