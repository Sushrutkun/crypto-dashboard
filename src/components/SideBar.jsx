import '../pages/Dashboard.css';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="sidebar__container" style={{maxHeight:'944px',width:'280px'}}>
      <h1 className="board__logo">Board.</h1>

      <ul className="nav__links">
        <li className="nav__link">
          <a
            // href="http://"
            target="blank"
            className="active"
            rel="noopener noreferrer"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <i className="ri-pie-chart-line"></i>Dashboard
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="ri-price-tag-3-line"></i>Transactions
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="ri-calendar-line"></i>Schedules
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="ri-user-3-line"></i>Users
          </a>
        </li>
        <li className="nav__link">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <i className="ri-settings-3-line"></i>Settings
          </a>
        </li>
      </ul>

      <div className="sidebar__footer">
        <a href="http://" target="blank" rel="noopener noreferrer">
          Help
        </a>
        <a href="http://" target="blank" rel="noopener noreferrer">
          Contact Us
        </a>
      </div>
    </div>
  );
}

export default SideBar;