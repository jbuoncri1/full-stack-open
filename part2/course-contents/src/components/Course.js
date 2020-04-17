import React from 'react';
import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  return (
    <div>
      <Header 
        key={course.id}
        courseName={course.name}
      />
      <Content parts={course.parts} />

    </div>
  )
}

export default Course;