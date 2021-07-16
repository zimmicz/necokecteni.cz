import React  from 'react';
import _ from 'lodash';
import styles from './index.module.css';
import { BlockLink } from '../BlockLink';

export const AuthorList = ({ authors }: { authors: Record<string, Array<Author>> }): React.ReactElement | null => {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);

  React.useEffect(() => {
    if (open) {
      document.body.classList.add('no-scrollbar');
    } else {
      document.body.classList.remove('no-scrollbar');
    }
  }, [open]);

  if (!authors) {
    return null;
  }

  if (!open) {
    return <button className={styles.button} onClick={toggle}>Autoři</button>;
  }

  const sortedLetters = Object.keys(authors).sort((a, b) => a.localeCompare(b, 'cs'));

  return (
    <div onClick={toggle} className={styles.container}>
      <div className={styles.head}>
        <h3>Autoři</h3>
        <button className={styles.button} onClick={toggle}>&times;</button>
      </div>
      <div className={styles.list}>
        {sortedLetters.map(letter => (
          <div key={letter}>
            <h4>{letter}</h4>
            <ul>
              {authors[letter].map(author => (
                <li key={author.author}>
                  <BlockLink to={`/autori/${author.id}`}>{author.author}</BlockLink>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
