import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditCourse = () => {

    const [course, setCourse] = useState({
        courseName: "",
        instructor: "",
        category: "",
        duration: "",
        level: "",
        thumbnail: ""
    })

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:5000/course/${id}`)

            .then((res) => {
                setCourse(res.data)
            })

            .catch((err) => {
                console.log(err)
            })

    }, [])

    const handleSubmit = (e) => {

        e.preventDefault()

        axios.put(
            `http://localhost:5000/course/${id}`,
            course
        )

        .then(() => {
            navigate("/")
        })

        .catch((err) => {
            console.log(err)
        })
    }

    return (

        <div className="container mt-4">

            <div className="card p-4">

                <h2 className="mb-4">
                    Edit Course
                </h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Course Name"
                        value={course.courseName}
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                courseName: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Instructor"
                        value={course.instructor}
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                instructor: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Category"
                        value={course.category}
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                category: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        className="form-control mb-3"
                        placeholder="Duration"
                        value={course.duration}
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                duration: e.target.value
                            })
                        }
                    />

                    <select
                        className="form-control mb-3"
                        value={course.level}
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                level: e.target.value
                            })
                        }
                    >
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>

                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Thumbnail URL"
                        value={course.thumbnail}
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                thumbnail: e.target.value
                            })
                        }
                    />

                    <button
                        type="submit"
                        className="btn btn-warning"
                    >
                        Save Changes
                    </button>

                </form>

            </div>

        </div>
    )
}

export default EditCourse