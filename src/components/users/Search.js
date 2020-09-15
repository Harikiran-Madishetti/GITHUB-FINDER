import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () => {

    const githubContaxt = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    //Using useState for state as we have changed the class based component to function based componenet
    const [text, setText] = useState('');

    const onChange = (e) => {
        // this.setState({ text: e.target.value })
        setText(e.target.value) //same as above
    }

    const onSubmit = (e) => {
        e.preventDefault();
        //Adding trim to remove all white spaces 
        if (text.trim() === '') {
            alertContext.setAlert('Please enter someting', 'light');
        } else {
            githubContaxt.searchUsers(text)
            setText('')
        }

    } //make onSubmit as arrow function if you dont want to use bind.

    return (
        <div>
            <form onSubmit={onSubmit} className='from'>
                <input type='text' name='text' placeholder='Searh Users...' value={text} onChange={onChange} />
                <input type='submit' value='Search' className='btn btn-dark btn-block' />
            </form>
            {githubContaxt.users.length > 0 && <button className='btn btn-light btn-block' onClick={githubContaxt.clearUsers}>Clear</button>}
        </div>
    )

}

export default Search
