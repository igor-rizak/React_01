import css from './Statistics.module.css';

export const Statistics = ({ data, title }) => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.statLlist}>
        {data.map(d => (
          <li className={css.item} id={d.id}>
            <span className={css.label}>{d.label}</span>
            <span className={css.percentage}>{d.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
