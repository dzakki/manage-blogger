import React, { Component } from "react";
import { Link } from 'react-router-dom';
import ListPost from '../components/posts/list';
import Search from '../components/posts/search';

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

    fetchPosts = () => {
        this.setState({ isLoading: true })
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data, isLoading: false, filteredPost: data })
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
                            : ''
                        }
                        {
                            this.state.filteredPost.map(post => {
                                return <ListPost key={post.id} post={post} />
                            })
                        }
                    </div>
                    <div className="col-3">
                        <div className="row">
                            <div className="col-12 mb-3">
                                <Search submit={this.filterPost} />
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