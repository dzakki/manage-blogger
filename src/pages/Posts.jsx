import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
    }

    componentDidMount() {
        this.fetchPosts()
    }

    componentWillUnmount() {
        this.setState(state => state.posts = [])
    }

    fetchPosts = (search, pagination) => {
        this.setState({ isLoading: true })
        let url = `${process.env.REACT_APP_BASE_URL}/posts?key=${process.env.REACT_APP_BLOGGER_KEY}`
        if (search) {
            url = `${process.env.REACT_APP_BASE_URL}/posts/search?key=${process.env.REACT_APP_BLOGGER_KEY}&q=${search}`
        }
        if (pagination) {
            url += `&pageToken=${pagination}`
        }
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                console.log(data.items)
                this.setState({ posts: data, isLoading: false, filteredPost: data.items })
            })
            .catch(err => console.log(err))
    }

    filterPost = (title) => {
        const data = this.state.posts.filter(function (post) {  
            return post.title.indexOf(title) !== -1
        })
        this.setState({ filteredPost: data })
    }


    render() {
        return (
            <>
                <div className="row">
                    <div className="col-8">
                        { 
                            this.state.isLoading 
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
                                    this.state.filteredPost.map(post => {
                                        return <ListPost key={post.id} post={post} />
                                    })
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

export default posts