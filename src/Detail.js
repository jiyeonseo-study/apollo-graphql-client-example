import React from 'react';
import {withRouter} from 'react-router-dom';
import {Query} from 'react-apollo';
import { DETAIL_PAGE } from './queries';

const Detail = ({
    match
}) =>{
    console.log(match);
    const movieId = parseInt(match.params.id,10);
    return (<Query query={DETAIL_PAGE} variables={{movieId}}>{({loading, data, error}) => {
        if(loading) {
            return <span>loading</span>
        }
        else if (error){
            return <span>error has occured</span> 
        } 
        else if(data) {
            return (
                <>
                    <h1>{data.movie.title}</h1>
                    <h2>{data.movie.rating}</h2>
                    <span>{data.movie.description_intro}</span>
                </>
            )
        }
    }}</Query>);
} 

export default withRouter(Detail);