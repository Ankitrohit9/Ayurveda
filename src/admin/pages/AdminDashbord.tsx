import { useNavigate } from "react-router-dom";
import "./design/admindashbord.css";

function AdminDashboard() {
  const navigate = useNavigate();

  const adminEmail = localStorage.getItem("adminEmail");

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");

    localStorage.removeItem("adminEmail");

    alert("Admin Logout Successful");

    navigate("/admin/login");
  };

  return (
    <div className="admin-dashbord-page">
      <div className="admin-dashbord-container">
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Acme&family=Anta&family=Carter+One&family=Farro:wght@300;400;500;700&family=Goblin+One&family=Michroma&family=Squada+One&family=Ubuntu+Sans:ital,wght@0,100..800;1,100..800&display=swap');{" "}
        </style>
        <h1>Admin Dashboard</h1>

        <p>Welcome Admin</p>

        <h3>{adminEmail}</h3>

        <hr />
        <div className="admin-menu">
          <h2>Dashboard Menu</h2>

          <ul>
            <li>Total Users</li>

            <li>Reports</li>

            <li>Analytics</li>

            <li>Settings</li>
          </ul>

          <br />

          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
