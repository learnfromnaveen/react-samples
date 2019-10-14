import React from "react";
import "./course.css";

import { connect } from "react-redux";
import createCourse from "./redux/actions/create-course-action";
import { bindActionCreators } from "redux";

class Course extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: {
        title: ""
      }
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course: course });
  }

  onSubmit(event) {
    event.preventDefault();

    debugger;
    this.props.createCourse(this.state.course);
  }
  render() {
    const courses = this.props.courses.map(course => {
      return <div key={course.title}>{course.title}</div>;
    });

    return (
      <div className="course-container">
        <div className="label">
          <span>Enter course name:</span>
        </div>
        <div className="course-control">
          <input type="text" onChange={this.onChange} />
          <button type="button" onClick={this.onSubmit}>
            Add Course
          </button>
        </div>
        <div className="courses">{courses}</div>
      </div>
    );
  }
}

function mapStateToProps(state, ownedProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    createCourse: bindActionCreators(createCourse, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Course);
