import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired
    }

    onChange = (e) => {
        // this.setState({ text: e.target.value })
        this.setState({ [e.target.name]: e.target.value }) //same as above
    }

    onSubmit(e) {
        e.preventDefault();
        //Adding trim to remove all white spaces 
        if (this.state.text.trim() === '') {
            this.props.setAlert('Please enter someting', 'light');
        } else {
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }

    } //make onSubmit as arrow function if you dont want to use bind.

    render() {

        const { showClear, clearUsers } = this.props
        return (
            <div>
                <form onSubmit={this.onSubmit.bind(this)} className='from'>
                    <input type='text' name='text' placeholder='Searh Users...' value={this.state.text} onChange={this.onChange} />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                {showClear && <button className='btn btn-light btn-block' onClick={clearUsers}>Clear</button>}
            </div>
        )
    }
}

export default Search
