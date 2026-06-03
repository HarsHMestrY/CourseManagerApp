import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [courses, setCourses] = useState([])

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = () => {

        axios.get('http://localhost:5000/course')

            .then((res) => {
                setCourses(res.data)
            })

            .catch((err) => {
                console.log(err)
            })
    }

    const deleteCourse = (id) => {

        axios.delete(`http://localhost:5000/course/${id}`)

            .then(() => {
                getCourses()
            })

            .catch((err) => {
                console.log(err)
            })
    }

    return (

        <div className="container mt-4">

            <div className="row">

                {
                    courses.map((course) => (

                        <div className="col-md-4 mb-3" key={course._id}>

                            <div className="card">

                                <img
                                    src={course.thumbnail}
                                    className="card-img-top"
                                    height="200"
                                />

                                <div className="card-body">

                                    <h5>
                                        {course.courseName}
                                    </h5>

                                    <p>
                                        Instructor:
                                        {course.instructor}
                                    </p>

                                    <p>
                                        Category:
                                        {course.category}
                                    </p>

                                    <p>
                                        Duration:
                                        {course.duration} Hours
                                    </p>

                                    <p>
                                        Level:
                                        {course.level}
                                    </p>

                                    <NavLink
                                        className="btn btn-warning me-2"
                                        to={`/edit/${course._id}`}
                                    >
                                        Edit
                                    </NavLink>

                                    <button
                                        className="btn btn-danger"
                                        onClick={() =>
                                            deleteCourse(course._id)
                                        }
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))
                }

            </div>

        </div>
    )
}

export default Home