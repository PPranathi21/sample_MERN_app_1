
import "./emphome.css";

function EmpHome() {
  return (
    <div className="emp-home">

      {/* Welcome Section */}
      <section className="emp-hero">
        <div className="container">
          <span className="emp-badge">EMPLOYEE DASHBOARD</span>

          <h1>Welcome Employee! 👋</h1>

          <p>
            Welcome to your workspace. Stay organized,
            manage your tasks, and track your daily activities.
          </p>
        </div>
      </section>

      {/* Dashboard Content */}
      <section className="container emp-content">

        <h2 className="emp-section-title">My Dashboard</h2>

        <div className="row g-4">

          {/* My Tasks */}
          <div className="col-md-4">
            <div className="emp-card">
              <div className="emp-card-icon">📋</div>
              <h5>My Tasks</h5>
              <h2>12</h2>
              <p>Assigned tasks</p>
            </div>
          </div>

          {/* Completed Tasks */}
          <div className="col-md-4">
            <div className="emp-card">
              <div className="emp-card-icon">✅</div>
              <h5>Completed Tasks</h5>
              <h2>8</h2>
              <p>Successfully completed</p>
            </div>
          </div>

          {/* Pending Tasks */}
          <div className="col-md-4">
            <div className="emp-card">
              <div className="emp-card-icon">⏳</div>
              <h5>Pending Tasks</h5>
              <h2>4</h2>
              <p>Tasks remaining</p>
            </div>
          </div>

        </div>

        {/* Employee Information */}
        <div className="emp-info mt-5">
          <h4>Employee Information</h4>

          <p>
            As an employee, you can view your assigned tasks,
            monitor your work progress, and keep track of your
            daily responsibilities through this dashboard.
          </p>
        </div>

        {/* Quick Tips */}
        <div className="emp-tips mt-4">
          <h4>💡 Quick Reminder</h4>
          <p className="mb-0">
            Stay focused, complete your assigned tasks on time,
            and keep your work progress updated.
          </p>
        </div>

      </section>
    </div>
  );
}

export default EmpHome;
