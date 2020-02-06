import React, { Component } from "react"
import { connect } from 'react-redux';
import { setSelectedBook, updateSelectedBook } from '../actions'

class Book extends Component {

  handleSummary = (value) => {
    this.setState(() => ({ buttonClicked: value }));
  }
  state = {
    editClicked: false,
    book: this.props.book
  }
  handleEdit = () => {
    this.setState(()=>({editClicked:true}))
  }
  handleSave = ()=> {
    this.props.dispatch(updateSelectedBook(this.state.book))
    this.setState(()=>({editClicked:false}))
    this.props.dispatch(setSelectedBook(this.state.book));
  }
  onSummaryEdit = ( e) => {
    const value = e.target.value
    this.setState((currS)=>{
      currS.book.summary = value;
      return currS;
    })
  }
  render() {
    const { book, editClicked } = this.state
    return (
      <div>
        <div className="card" style={{ "width": 350, "marginLeft": 25 }}>
          <div className="card-body">
            <h5 className="card-title text-center textWrap">{book.title}</h5>
            <div className="card-text">
              <span>Author: {book.author}</span><br />
              <span>Genre: {book.genre}</span><br />
              <br />
              {editClicked === false
                ? (<div className="textWrap"><span>{book.summary}</span><br/></div>) 
                : (<div><textarea name="summary" onChange={(e)=>this.onSummaryEdit(e)} value={this.state.book.summary} className="form-control"/><br/></div>)
                }
            </div>
            <br/>
            {editClicked === false
                ? (<button className="btn btn-warning" onClick={() => this.handleEdit()}>Edit this</button>) 
                : (<button className="btn btn-success" onClick={() => this.handleSave()}>Save</button>)
                }
          </div>
        </div>
        <br />
      </div>
    )
  }
}

function mapStateToProps({ selectedBook }) {
  return {
    selectedBook,
  }
}

export default connect(mapStateToProps)(Book);