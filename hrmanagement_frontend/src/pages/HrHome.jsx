
import "./hrhome.css";

function HrHome() {
  return (
    <div className="hr-home">

      {/* Welcome Section */}
      <section className="hr-hero">
        <div className="container">
          <span className="hr-badge">HR DASHBOARD</span>

          <h1>Welcome HR! 👋</h1>

          <p>
            Manage employees, monitor attendance, and
            coordinate recruitment activities efficiently.
          </p>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="container hr-content">

        <h2 className="hr-section-title">HR Dashboard Overview</h2>

        <div className="row g-4">

          {/* Total Employees */}
          <div className="col-md-4">
            <div className="hr-card">
              <div className="hr-card-icon">👥</div>
              <h5>Total Employees</h5>
              <h2>150</h2>
              <p>Registered employees</p>
            </div>
          </div>

          {/* Attendance */}
          <div className="col-md-4">
            <div className="hr-card">
              <div className="hr-card-icon">📅</div>
              <h5>Present Today</h5>
              <h2>125</h2>
              <p>Employees present</p>
            </div>
          </div>

          {/* Recruitment */}
          <div className="col-md-4">
            <div className="hr-card">
              <div className="hr-card-icon">💼</div>
              <h5>Open Positions</h5>
              <h2>8</h2>
              <p>Available job openings</p>
            </div>
          </div>

        </div>

        {/* HR Responsibilities */}
        <div className="hr-info mt-5">
          <h4>HR Responsibilities</h4>

          <p>
            The HR department manages employee records,
            monitors attendance, handles recruitment,
            and supports employee development.
            This dashboard helps HR manage these activities
            in one place.
          </p>
        </div>

        {/* Quick Reminder */}
        <div className="hr-reminder mt-4">
          <h4>💡 HR Reminder</h4>

          <p className="mb-0">
            Keep employee information updated, monitor
            attendance regularly, and ensure a positive
            working environment.
          </p>
        </div>

      </section>
    </div>
  );
}

export default HrHome;
