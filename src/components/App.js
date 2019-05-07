import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { getBooksRequest } from "../actions/books";
import BookForm from "./bookForm";
import BookList from "./bookList";
import Login from "./login";
import NewUserForm from "./newUser";
import Nav from "./nav";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../custom.css";
import "react-toastify/dist/ReactToastify.min.css";
// import { toast } from 'react-toastify';

class App extends Component {
  state = {
    color: "",
    navColor: ""
  };

  componentDidMount() {
    try {
      this.props.getBooksRequest();
      toast.success("Your book list has been loaded");
    } catch (err) {
      toast.danger("Error has occured");
    }
  }
  render() {
    const bookList = this.props.books.bookList;

    return (
      <>
        <Nav color={this.state.navColor} />
        <div className="container-fluid">
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnVisibilityChange
          />
          <Switch>
            <Route path="/new-book" component={BookForm} />
            {/* <Route path="/login" component={Login} /> */}
            {/* <Route path="/sign-up" component={NewUserForm} /> */}
            <Route path="/" render={() => <BookList bookList={bookList} />} />
          </Switch>
        </div>
      </>
    );
  }
}

export default withRouter(
  connect(
    ({ books }) => ({ books }),
    {
      getBooksRequest
    }
  )(App)
);
