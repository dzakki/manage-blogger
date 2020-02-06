import React,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { login } from "../store/actions/user";
import { getBlogs } from "../store/actions/blog";
import { GET_BLOGS } from "../store/actionTypes";
import Greeting from "../components/blog/Greeting";
import List from "../components/blog/List";
class Blogs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            redirectToRoot: false,
            code: this.getQueryByName('code')
        }
    }
    UNSAFE_componentWillMount(){
        const code = this.state.code
        if (code) {
            this.setState({
                redirectToRoot: true
            })
            this.props.dispatch(login(code))
        }
    }

    componentDidMount() {
        if (this.props.user.isLogged) {
            this.props.dispatch(getBlogs())   
        }
    }

    componentWillUnmount() {
        this.props.dispatch({
            type: GET_BLOGS,
            data: []
        })   
    }

    getQueryByName(name, url) {
        if (!url) url = window.location.href;
        // eslint-disable-next-line
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    render() {
        if ((this.state.redirectToRoot && this.props.user.isLogged) && this.state.code) {
            window.location.href = '/'
        }
        const { isLogged } = this.props.user
        const { blogs } = this.props.blog
        const { onload_blog } = this.props.blog
        return (
            <>
                <Greeting />
                { isLogged 
                    ? (
                        <div className="row">
                            {   
                                onload_blog
                                    ? (
                                        <div className="mx-auto">
                                            <div className="spinner-border" role="status">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    )
                                    : !blogs.length
                                        ? ( <p>There's not blogs</p> )
                                        : blogs.map(blog => {
                                                return (
                                                    <div className="col-lg-6 mb-3" key={blog.id}>
                                                        <List blog={blog} />
                                                    </div>
                                                )
                                            })
                            }
                            </div>  
                        )
                    : ''
                }   
            </>
        )
    }
}

const mapStateToProps = state => {
    return state
}

export default withRouter( connect(mapStateToProps)(Blogs))