import css from './Friends.module.css';

export const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(f => {
        const statusClass = f.isOnline
          ? `${css.status} ${css.online}`
          : `${css.status} ${css.offline}`;
        return (
          <li key={f.id} className={css.item}>
            <span className={statusClass}></span>
            <img
              className={css.avatar}
              src={f.avatar}
              alt={f.name}
              width="48"
            />
            <p className={css.name}>{f.name}</p>
          </li>
        );
      })}
    </ul>
  );
};
