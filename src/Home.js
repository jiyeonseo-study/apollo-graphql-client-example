import React from 'react';
import {Query} from 'react-apollo';
import {HOME_PAGE} from './queries';
import {Link} from 'react-router-dom';

const  Home = () => <Query query={HOME_PAGE}>{({loading, data, error}) => {
    if(loading) {
        return <span>loading</span>
    }
    else if (error){
        return <span>error has occured</span> 
    } 
    else if(data) {
        console.log(data);
        return data.movies.map(movie=> {
             return  ( 
                 <Link to={`/details/${movie.id}`}>
                    <h2 key={movie.id}>{movie.title}</h2>
                 </Link>
            );
        });
    }
}}</Query>;
export default Home;