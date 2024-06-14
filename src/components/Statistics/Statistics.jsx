import css from './Statistics.module.css';
import stats from '../Json/data.json';

export const Statistics = ({ id, label, percentage, stats }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {stats.map(stat => (
          <li className={css.item} id={id}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}</span>
          </li>
        ))}
        {/*               
        <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li> */}
      </ul>
    </section>
  );
};
