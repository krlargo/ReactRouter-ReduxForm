import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.labelText}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        {field.meta.touched ? field.meta.error : ''}
      </div>
    )
  }

  // Gets called AFTER validation
  onSubmit(values) {
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    // .bind(this) so that callback is executed within our component's context
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            labelText="Title"
            name="title"
            component={this.renderField}
          />

          <Field
            labelText="Categories"
            name="categories"
            component={this.renderField}
          />

          <Field
            labelText="Content"
            name="content"
            component={this.renderField}
          />

          <button type="submit" className="btn btn-primary">
            submit
          </button>

        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

  // errors.NAME; NAME must be equivalent to a <Field> name
  if(!values.title) {
    errors.title = "Please enter a title."
  }
  if(!values.categories) {
    errors.categories = "Please enter some categories."
  }
  if(!values.content) {
    errors.content = "Please enter some content."
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
