
import "./adminhome.css";

function AdminHome() {
  return (
    <div className="admin-home">

      {/* Welcome Section */}
      <div className="admin-hero">
        <div className="container">
          <span className="admin-badge">ADMIN PANEL</span>

          <h1>Welcome Admin! 👋</h1>

          <p>
            Manage your website, monitor activities, and
            keep everything running smoothly.
          </p>
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="container admin-content">
        <h2 className="dashboard-title">Dashboard Overview</h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="admin-card">
              <div className="admin-card-icon">👥</div>
              <h5>Total Users</h5>
              <h2>120</h2>
              <p>Registered users</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-card">
              <div className="admin-card-icon">📊</div>
              <h5>Activities</h5>
              <h2>85</h2>
              <p>Total activities</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="admin-card">
              <div className="admin-card-icon">⚙️</div>
              <h5>System Status</h5>
              <h2 className="status-text">Active</h2>
              <p>Website running smoothly</p>
            </div>
          </div>

        </div>

        {/* Quick Information */}
        <div className="admin-info mt-5">
          <h4>Admin Information</h4>
          <p>
            As an administrator, you can manage website
            activities, monitor registered users, and
            maintain the overall website functionality.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AdminHome;
