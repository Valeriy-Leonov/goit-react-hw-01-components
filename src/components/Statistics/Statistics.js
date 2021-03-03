import PropTypes from 'prop-types';
import './Statistics.scss';
const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>

      <ul className="stat-list">
        {stats.map(val => (
          <li key={val.id} className="item">
            <span className="label">{val.label}</span>
            <span className="percentage">{val.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
