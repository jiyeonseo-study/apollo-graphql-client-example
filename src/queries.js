import gql from 'graphql-tag';

export const HOME_PAGE = gql`
query {
    movies(limit:50, rating: 7) {
      id
      title
    }
  }
`

export const DETAIL_PAGE = gql`
query getMovieDetails($movieId: Int!) {
  movie(id: $movieId) {
    medium_cover_image
    title
    rating
    description_intro
    language
    genres
  }
}
`