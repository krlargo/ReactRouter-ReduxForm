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
            labelText="Tags"
            name="tags"
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

export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);
