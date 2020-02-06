import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../store/actions/post';
import { GET_POST } from '../store/actionTypes';

export default function useGetPost(url) {
    const post = useSelector(state => state.post.post)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getPost(url))
      return () => {
        dispatch({
          type: GET_POST,
          data: null
        });
      }
    }, [dispatch, url])

    return post
}