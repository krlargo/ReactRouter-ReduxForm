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
      </div>
    )
  }

  render() {
    return (
      <div>
        <form>
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
        </form>
      </div>
    )
  }
}

function validate(values) {
  const errors = {};

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
