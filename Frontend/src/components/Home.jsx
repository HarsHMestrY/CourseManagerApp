import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {

    const [courses, setCourses] = useState([])
    const [search, setSearch] = useState("")

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

    const filteredCourses = courses.filter((course) => {

        return (
            (course.courseName || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            (course.instructor || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            (course.category || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||

            (course.level || "")
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    })

    return (

        <div className="container mt-4">

            <div className="row mb-4">

                <div className="col-md-6 mx-auto">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search Course..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                </div>

            </div>

            {
                filteredCourses.length === 0 ? (

                    <h4 className="text-center">
                        No Courses Found
                    </h4>

                ) : (

                    <div className="row">

                        {
                            filteredCourses.map((course) => (

                                <div
                                    className="col-md-4 mb-3"
                                    key={course._id}
                                >

                                    <div className="card">

                                        <img
                                            src={course.thumbnail}
                                            alt={course.courseName}
                                            className="card-img-top"
                                            height="200"
                                        />

                                        <div className="card-body">

                                            <h5>
                                                {course.courseName}
                                            </h5>

                                            <p>
                                                <b>Instructor:</b> {course.instructor}
                                            </p>

                                            <p>
                                                <b>Category:</b> {course.category}
                                            </p>

                                            <p>
                                                <b>Duration:</b> {course.duration} Hours
                                            </p>

                                            <p>
                                                <b>Level:</b> {course.level}
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

                )
            }

        </div>
    )
}

export default Home