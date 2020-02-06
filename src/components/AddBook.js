import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'

import { addABook } from '../actions'

class AddBook extends Component {
  state = {
    form: { title: "", author: "", genre: "", summary: "" },
    formErrorMessage: { title: "", author: "", genre: "", summary: "" },
    formValidity: { title: false, author: false, genre: false, summary: false, buttonActive: false },
    errorMessage: "",
    successMessage: ""
  }
  submitted = false;

  handleChange = event => {
    const inputfield = event.target.name;
    const enteredvalue = event.target.value;
    const newFormObj = this.state.form
    newFormObj[inputfield] = enteredvalue
    this.setState(() => ({ form: newFormObj }))
    this.validateField(inputfield, enteredvalue);
  };



  validateField = (fieldName, value) => {
    var formmessage = ""
    switch (fieldName) {
      case "title":
        value.length >= 4 ? formmessage = "" : formmessage = "Title must contain atleast 4 characters";
        break;

      case "author":
        value.length >= 3 ? formmessage = "" : formmessage = "Author must contain atleast 3 characters";
        break;

      case "genre":
        value !== "" ? formmessage = "" : formmessage = "Please select a genre";
        break;

      case "summary":
        var summaryRegex = new RegExp(/^[\w,\s]{10,100}$/);
        summaryRegex.test(value) ? formmessage = "" : formmessage = "Summary must contain atleast 10 characters and not more than 100 characters"
        break;

      default:
        break;
    }

    var fromErrObj = this.state.formErrorMessage;
    fromErrObj[fieldName] = formmessage
    this.setState({ formErrorMessage: fromErrObj })

    var status = false;
    if (formmessage === "") {
      status = true
    }

    var formValidObj = this.state.formValidity;
    formValidObj[fieldName] = status;
    formValidObj.buttonActive = formValidObj.title && formValidObj.author
      && formValidObj.genre && formValidObj.summary
    this.setState({ formValidity: formValidObj })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(addABook(this.state.form));
    this.submitted = true
  }

  render() {
    if (this.submitted === true) {
      return (
        <Redirect to='/card' />
      )
    }
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6 offset-3 card">
            <form onSubmit={this.handleSubmit} >
              <h2 className="text-center">Add A Book</h2>
              <div className="form-group">
                <label>Title</label>
                <input className="form-control" placeholder="Enter the title" name="title" onChange={this.handleChange} />
                <div className="text-danger">{this.state.formErrorMessage.title}</div>
              </div>

              <div className="form-group">
                <label>Author</label>
                <input className="form-control" placeholder="Enter the Author name" name="author" onChange={this.handleChange} />
                <div className="text-danger">{this.state.formErrorMessage.author}</div>
              </div>

              <div className="form-group">
                <label>Genre</label>
                <select className="form-control" onChange={this.handleChange} name="genre">
                  <option value="">---Select---</option>
                  <option value="Mystery Thriller">Mystery Thriller</option>
                  <option value="Fiction">Fiction</option>
                  <option value="Non-Fiction">Non-Fiction</option>
                </select>
                <div className="text-danger">{this.state.formErrorMessage.genre}</div>
              </div>

              <div className="form-group">
                <label>Summary</label>
                <textarea className="form-control" name="summary" onChange={this.handleChange}></textarea>
                <div className="text-danger">{this.state.formErrorMessage.summary}</div>
              </div>

              <button className="btn btn-success" type="submit" disabled={!this.state.formValidity.buttonActive}>Add Book</button>
              <br />
              <br />

            </form>
            <div className="text-success">{this.state.successMessage}</div>
            <div className="text-danger">{this.state.errorMessage}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default connect()(AddBook);