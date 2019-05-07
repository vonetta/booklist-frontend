import React, { Component } from "react";
import DatePicker from 'react-date-picker';
import { connect } from 'react-redux';
import { createBookRequest, updateBookRequest } from '../actions/books'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup';
import { toast } from 'react-toastify';
class BookForm extends Component {
  state = {
    dateStarted: "",
    edited: false
  };

  componentDidMount() {
    if (this.props.location.state !== undefined) {
      return this.handleEdit(this.props.location.state.book);
    }
  }

  onChange = date => {
    this.setState(prevState => ({
      ...prevState,
      dateStarted: date
    }));
  }

  formSubmission = (values) => {
    if (this.state.edited) {
      console.log(this.state)
      console.log(values)
      this.props.updateBookRequest({
        _id: values._id,
        bookName: values.bookName,
        totalPages: values.totalPages,
        currentPage: values.currentPage,
        dateStarted: this.state.dateStarted,
        edited: true
      })
      toast.success("Current Book has been updated")
    }
    else {
      this.props.createBookRequest({
        bookName: values.bookName,
        totalPages: values.totalPages,
        currentPage: values.currentPage,
        dateStarted: this.state.dateStarted
      })
      toast.success("New Book has been created")
    }
    window.location = "/";
  }

  handleEdit = bookData => {
    this.setState(prevState => ({
      ...prevState,
      dateStarted: bookData.dateStarted,
      edited: true
    }));
  };

  FormikDatePicker = ({
    name,
    value,
  }) => {
    return (
      <DatePicker
        id="dateStarted"
        name="dateStarted"
        className="form-control"
        onChange={this.onChange}
        value={this.state.dateStarted !== '' ? new Date(this.state.dateStarted) : null}
        maxDate={new Date()}

      />
    )
  }
  render() {
    const validationSchema = Yup.object().shape({
      bookName: Yup.string()
        .required("Please Enter a Book Name"),
      currentPage: Yup.string()
        .required("Please enter the page number you are on"),
      totalPages: Yup.string()
        .required("Please Enter total amount of pages the book has"),
    })
    return (
      <React.Fragment>
        <div className="container card mt-5 shadow-sm p-3 mb-5 bg-white rounded">
          <h1 className="text-center mt-3">New Book Entry</h1>
          <Formik initialValues={{
            _id: this.props.location.state !== undefined ? this.props.location.state.book._id : '',
            bookName: this.props.location.state !== undefined ? this.props.location.state.book.bookName : '',
            totalPages: this.props.location.state !== undefined ? this.props.location.state.book.totalPages : '',
            currentPage: this.props.location.state !== undefined ? this.props.location.state.book.currentPage : ''
          }} validationSchema={validationSchema} onSubmit={this.formSubmission}>
            {({ values, errors, touched, handleBlur }) => (
              <Form className="m-2 card-body">
                <div className="form-group">
                  <label htmlFor="bookName">Book Name</label>
                  <Field
                    type="text"
                    className="form-control"
                    name="bookName"
                    aria-describedby="emailHelp"
                    placeholder="Book Name"
                    value={values.bookName}
                  />
                  {errors.bookName && touched.bookName && (<div className="alert alert-danger">{errors.bookName}</div>)}
                </div>
                <div className="form-group">
                  <label htmlFor="currentPage">Current Pages</label>
                  <Field
                    type="number"
                    className="form-control"
                    name="currentPage"
                    placeholder="Current Page of Book"
                  />
                  {errors.currentPage && touched.currentPage && (<div className="alert alert-danger">{errors.currentPage}</div>)}
                </div>
                <div className="form-group">
                  <label htmlFor="totalPages">Total Pages</label>
                  <Field
                    type="number"
                    className="form-control"
                    name="totalPages"
                    placeholder="Total Pages of Book"
                  />
                  {errors.totalPages && touched.totalPages && (<div className="alert alert-danger">{errors.totalPages}</div>)}
                </div>
                <div className="form-group">
                  <label htmlFor="dateStarted">Date Started</label>
                  <Field component={this.FormikDatePicker} />
                </div>
                <button type="submit"
                  className="btn btn-primary">
                  Submit
          </button>
              </Form>
            )}
          </Formik>
        </div>
      </React.Fragment >
    );
  }
}

export default connect(({ books }) => ({ books }), {
  createBookRequest,
  updateBookRequest
})(BookForm)