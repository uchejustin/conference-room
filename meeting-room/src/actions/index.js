import posts from '../api/posts';

const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => async dispatch => {
    const response = await posts.get('/Takwa-Bay');
    console.log("response is: ");
    console.log(response);
    
    dispatch({ type: FETCH_POSTS, payload: response.data });
};
