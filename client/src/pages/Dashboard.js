import React, { useEffect, useState } from "react";
import { MDBInputGroup, MDBBtn } from "mdb-react-ui-kit";
import "../style/dashbord.css";
import axios from "../api/axios";

function Dashbord() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);

  const handleAddTask = async () => {
    if (!newTask.trim()) return; // Prevent empty task

    try {
      const response = await axios.post("/tasks", { title: newTask });
      // Add new task safely:
      if (response.data && response.data.task) {
        setTasks((prevTasks) => [...prevTasks, response.data.task]);
      } else if (response.data) {
        // fallback if no .task in response:
        setTasks((prevTasks) => [...prevTasks, response.data]);
      }
      setNewTask("");
    } catch (err) {
      setError("Failed to add task.");
      console.error(err);
    }
  };
  const handleDelete = async (taskId) => {
    try {
      await axios.delete(`/tasks/${taskId}/`);
      // Remove deleted task from state
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Failed to delete task:", error);
      setError("Failed to delete task.");
    }
  };

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("/tasks");
        let tasksFromApi = [];

        if (Array.isArray(response.data.tasks)) {
          tasksFromApi = response.data.tasks;
        } else if (response.data.tasks) {
          tasksFromApi = [response.data.tasks];
        } else if (Array.isArray(response.data)) {
          tasksFromApi = response.data;
        } else if (response.data) {
          tasksFromApi = [response.data];
        }

        // Filter out invalid or undefined tasks
        tasksFromApi = tasksFromApi.filter((task) => task && task.title);

        setTasks(tasksFromApi);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, [handleDelete]);

  return (
    <section className="vh-100 gradient-custom-2">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-12 col-xl-10">
            <div className="card mask-custom">
              <div className="card-body p-4 text-black">
                <div className="text-center pt-3 pb-2">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                    alt="Check"
                    width="60"
                  />
                  <h2 className="my-4">Task List</h2>
                </div>

                <div className="table-wrapper">
                  <div
                    className="d-flex justify-content-center mb-4"
                    style={{ maxWidth: "500px", margin: "0 auto" }}
                  >
                    <MDBInputGroup>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter new task"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                      />
                      <MDBBtn
                        color="primary"
                        style={{ maxWidth: "110px" }}
                        onClick={handleAddTask}
                      >
                        Add Task
                      </MDBBtn>
                    </MDBInputGroup>
                  </div>

                  {error && (
                    <div className="text-danger text-center mb-3">{error}</div>
                  )}

                  <table className="table text-black mb-0 ">
                    <thead>
                      <tr>
                        <th>Task</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                  </table>
                  <div className="tbody-scroll">
                    <table className="table text-black mb-0">
                      <tbody className="Tbody">
                        {tasks.map((task, index) =>
                          task && task.title ? (
                            <tr key={task._id || index} className="fw-normal">
                              <td className="align-middle">
                                <span>{task.title}</span>
                              </td>
                              <td>
                                <i
                                  className="fas fa-check fa-lg text-success me-3"
                                  title="Done"
                                ></i>
                                <i
                                  className="fas fa-trash-alt fa-lg text-warning m-3"
                                  title="Remove"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => handleDelete(task._id)}
                                ></i>
                              </td>
                            </tr>
                          ) : null
                        )}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashbord;
