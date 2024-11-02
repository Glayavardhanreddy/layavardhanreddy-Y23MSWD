import React from 'react';

const Courses = () => {
  const courseList = [
    { title: 'Quantum Physics', description: 'Explore the fundamentals of quantum mechanics and their applications.' },
    { title: 'Computer Science', description: 'An introduction to computer science principles and programming.' },
    { title: 'Database Management Systems (DBMS)', description: 'Learn about relational databases, SQL, and data modeling.' },
    { title: 'Mathematics for Scientists', description: 'Advanced topics in calculus, algebra, and statistics.' },
    { title: 'Data Science', description: 'An in-depth look into data analysis, machine learning, and data visualization.' },
    { title: 'Network Security', description: 'Understand network security principles and practices for safe data transmission.' },
    { title: 'Software Development', description: 'Learn software engineering principles, development, and testing.' },
    { title: 'Operating Systems', description: 'Study OS concepts, including memory management and file systems.' },
    { title: 'Artificial Intelligence', description: 'Explore AI techniques such as machine learning, NLP, and robotics.' },
    { title: 'Project Management', description: 'Principles and tools for managing software development projects.' },
  ];

  return (
    <div>
      <h2>Courses</h2>
      <p>Browse our available courses.</p>
      <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
        {courseList.map((course, index) => (
          <li key={index} style={{ padding: '10px', border: '1px solid #333', borderRadius: '5px', marginBottom: '10px' }}>
            <strong>{course.title}</strong>
            <p>{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
