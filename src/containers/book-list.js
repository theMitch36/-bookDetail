import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                  key={book.title}
                  onClick={() => this.props.selectBook(book)} 
                  className="list-group-item">
                  {book.title}
                </li>
            ); 
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever is retruned will show up as props
    // inside of BookList
    return {
        books: state.books
    };
}

// Anything retruned from this function will end up as props 
// on the BookList container
function mapDipatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({selectBook: selectBook}, dispatch);
}


// promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectedBook. Make it avail
// as a prop
export default connect(mapStateToProps, mapDipatchToProps )(BookList);