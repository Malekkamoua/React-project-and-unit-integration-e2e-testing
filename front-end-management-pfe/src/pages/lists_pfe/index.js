import React from "react";
import MyBoostrap from "../../components/mybootstrap";
import "../../assets/css/style.css";

const ListPfe = () => {
  return (
    <div>
      <MyBoostrap />
      <div className="main-content">
        <section className="section">
          <div className="section-header">
            <h1>Pfe</h1>
            <div className="section-header-breadcrumb">
              <div className="breadcrumb-item active">
                <a href="#">Dashboard</a>
              </div>
              <div className="breadcrumb-item">
                <a href="#">Components</a>
              </div>
              <div className="breadcrumb-item">Table</div>
            </div>
          </div>

          <div className="section-body">
            <h2 className="section-title">Table</h2>
            <p className="section-lead">
              Example of some Bootstrap table components.
            </p>

            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Sortable Table</h4>
                    <div className="card-header-action">
                      <form>
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search"
                          />
                          <div className="input-group-btn">
                            <button className="btn btn-primary">
                              <i className="fas fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table
                        className="table table-striped"
                        id="sortable-table"
                      >
                        <thead>
                          <tr>
                            <th className="text-center">
                              <i className="fas fa-th"></i>
                            </th>
                            <th>Task Name</th>
                            <th>Progress</th>
                            <th>Due Date</th>
                            <th>Status</th>
                            <th></th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Create a mobile app</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100"
                                ></div>
                              </div>
                            </td>
                            <td></td>
                            <td>2018-01-20</td>
                            <td>
                              <div className="badge badge-success">
                                Completed
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Redesign homepage</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="0%"
                              >
                                <div
                                  className="progress-bar"
                                  data-width="0"
                                ></div>
                              </div>
                            </td>
                            <td></td>
                            <td>2018-04-10</td>
                            <td>
                              <div className="badge badge-info">Todo</div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Backup database</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="70%"
                              >
                                <div
                                  className="progress-bar bg-warning"
                                  data-width="70"
                                ></div>
                              </div>
                            </td>
                            <td></td>
                            <td>2018-01-29</td>
                            <td>
                              <div className="badge badge-warning">
                                In Progress
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="sort-handler">
                                <i className="fas fa-th"></i>
                              </div>
                            </td>
                            <td>Input data</td>
                            <td className="align-middle">
                              <div
                                className="progress"
                                data-height="4"
                                data-toggle="tooltip"
                                title="100%"
                              >
                                <div
                                  className="progress-bar bg-success"
                                  data-width="100"
                                ></div>
                              </div>
                            </td>
                            <td></td>
                            <td>2018-01-16</td>
                            <td>
                              <div className="badge badge-success">
                                Completed
                              </div>
                            </td>
                            <td>
                              <a href="#" className="btn btn-secondary">
                                Detail
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

ListPfe.propTypes = {};

export default ListPfe;
