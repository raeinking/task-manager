import React, { Component } from 'react'
import '../style/dashbord.css'

function Dashbord() {
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

                <table className="table text-black mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Team Member</th>
                      <th scope="col">Task</th>
                      <th scope="col">Priority</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    <tr className="fw-normal">
                      <th>
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                          alt="avatar 1"
                          style={{ width: '45px', height: 'auto' }}
                        />
                        <span className="ms-2">Alice Mayer</span>
                      </th>
                      <td className="align-middle">
                        <span>Call Sam For payments</span>
                      </td>
                      <td className="align-middle">
                        <h6 className="mb-0">
                          <span className="badge bg-danger">High priority</span>
                        </h6>
                      </td>
                      <td className="align-middle">
                        <i className="fas fa-check fa-lg text-success me-3" title="Done"></i>
                        <i className="fas fa-trash-alt fa-lg text-warning" title="Remove"></i>
                      </td>
                    </tr>
                    Repeat more rows as needed
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
  
export default Dashbord;