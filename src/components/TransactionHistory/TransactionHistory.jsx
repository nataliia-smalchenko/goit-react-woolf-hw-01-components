import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css['transaction-history']}>
      <thead className={css.head}>
        <tr>
          <th className={css['head-cell']}>Type</th>
          <th className={css['head-cell']}>Amount</th>
          <th className={css['head-cell']}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={css.row}>
              <td className={css['cell']}>{type}</td>
              <td className={css['cell']}>{amount}</td>
              <td className={css['cell']}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
