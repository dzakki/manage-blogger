import React, { Component } from "react";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPosts } from '../store/actions/post';
import { GET_POSTS } from '../store/actionTypes';
import ListPost from '../components/posts/List';
import Search from '../components/posts/Search';
import Pagination from '../components/posts/Pagination';

class posts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            posts: [],
            filteredPost: []
        }
        console.log(props)
    }

    componentDidMount() {
        this.fetchPosts()
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: GET_POSTS,
            data: []
        })
    }

    fetchPosts = (search, pagination) => {
        const params = this.props.match.params.id
        let url = `${process.env.REACT_APP_BASE_URL}/${params}/posts?key=${process.env.REACT_APP_BLOGGER_KEY}`
        if (search) {
            url = `${process.env.REACT_APP_BASE_URL}/${params}/posts/search?key=${process.env.REACT_APP_BLOGGER_KEY}&q=${search}`
        }
        if (pagination) {
            url += `&pageToken=${pagination}`
        }
        this.props.dispatch(getPosts(url))
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-8">
                        { 
                            this.props.onload_post
                            ? (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            )
                            : (
                                <>
                                {
                                    !this.props.posts.length
                                        ? ( <p className='mx-auto'>There's no posts</p> )
                                        : (
                                            this.props.posts.map(post => {
                                                return (
                                                    <ListPost 
                                                        key={post.id} 
                                                        post={post} 
                                                        blogId={this.props.match.params.id} 
                                                        />
                                                    )
                                            })
                                        )
                                }
                                    <div className="mt-5">
                                        <div className="float-right">
                                            <Pagination 
                                                previous={this.state.posts.prevPageToken} 
                                                next={this.state.posts.nextPageToken} 
                                                filterPost={this.fetchPosts} 
                                            />
                                        </div>
                                    </div>
                                </>
                            )
                        }
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <Search submit={this.fetchPosts} />
                            </div>
                            <div className="col-12 mb-3">
                                <Link to="/posts/add"
                                    type="button" 
                                    className="btn btn-outline-dark btn-sm btn-block"
                                    >
                                    Write a new Post
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

}

const mapStateToProps = state => {
    return state.post
}

export default withRouter(connect(mapStateToProps)(posts))