import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {

    const [course, setCourse] = useState({
        courseName: "",
        instructor: "",
        category: "",
        duration: "",
        level: "",
        thumbnail: ""
    });

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post("http://localhost:5000/course/add", course)
            .then(() => {
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container mt-4">

            <div className="card p-4">

                <h2>Add Course</h2>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        placeholder="Course Name"
                        className="form-control mb-3"
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                courseName: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Instructor"
                        className="form-control mb-3"
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                instructor: e.target.value
                            })
                        }
                    />

                    <input
                        type="text"
                        placeholder="Category"
                        className="form-control mb-3"
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                category: e.target.value
                            })
                        }
                    />

                    <input
                        type="number"
                        placeholder="Duration"
                        className="form-control mb-3"
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                duration: e.target.value
                            })
                        }
                    />

                    <select
                        className="form-control mb-3"
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                level: e.target.value
                            })
                        }
                    >
                        <option>Select Level</option>
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Thumbnail URL"
                        className="form-control mb-3"
                        onChange={(e) =>
                            setCourse({
                                ...course,
                                thumbnail: e.target.value
                            })
                        }
                    />

                    <button
                        type="submit"
                        className="btn btn-success"
                    >
                        Add Course
                    </button>

                </form>

            </div>

        </div>
    );
};

export default AddCourse;