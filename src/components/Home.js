import React, { Component } from "react"
import { connect } from 'react-redux';
import libaray from './../libaray.jpg';
import Book from "./Book";
import Search from "./Search";

class Home extends Component {
    state = {
        buttonClicked: false,
        searchedBook: []
    };

    handleMe = (value) => {
        this.setState(() => ({ buttonClicked: value }));
    }

    getSuggestionList = (books) => {
        let suggestions = [];
        if (books) {
            books.map((book) => {
                if (suggestions.indexOf(book.title) < 0) {
                    suggestions.push(book.title);
                }
            });
        }
        return suggestions;
    }

    search = (searchText) => {
        console.log("Hi I am home", searchText, this.props.books);
        const searchedBook = this.props.books.filter(book => book.title === searchText);
        this.setState(() => ({ searchedBook: searchedBook }))
        console.log('searchedBook', searchedBook[0].title);
    }

    getHomeContent = () => {
        if (this.state.searchedBook.length > 0) {
            return (
                <div className="row searchedCard">
                    {
                        this.state.searchedBook.map((aBook, key) => <Book key={key} book={aBook} />)
                    }
                </div>
            )
        } else {
            return <img className='homeImage' src={libaray} alt="library view" />
        }
    }

    render() {
        const { books, selectedBook } = this.props;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <Search onSearch={this.search} suggestions={this.getSuggestionList(books)} />
                    {this.getHomeContent()}
                </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({ books, selectedBook }) {
    return {
        books,
        selectedBook,
    }
}

export default connect(mapStateToProps)(Home);