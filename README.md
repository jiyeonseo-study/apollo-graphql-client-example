# graphql-client-study 
a study code of [[실전] Apollo & GraphQL로 웹앱 만들기](https://academy.nomadcoders.co/courses/364948)

## dependencies 
- React stacks 
- [react-apollo](https://github.com/apollographql/react-apollo)
- [graphql-tag](https://github.com/apollographql/graphql-tag) : A JavaScript template literal tag that parses GraphQL queries
```js
mport gql from 'graphql-tag';

const query = gql`
  {
    user(id: 5) {
      firstName
      lastName
    }
  }
`
``` 
```js
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

<Query query={DETAIL_PAGE} variables={{movieId : movieId}}></Query>
```
- [react-helmet](https://github.com/nfl/react-helmet) : takes plain HTML tags and outputs plain HTML tags
```js
import React from "react";
import {Helmet} from "react-helmet";

class Application extends React.Component {
  render () {
    return (
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            ...
        </div>
    );
  }
};
```



## dev tool
- [Apollo Dev Tool - Chrome extension](https://www.apollographql.com/docs/react/features/developer-tooling.html#devtools) 