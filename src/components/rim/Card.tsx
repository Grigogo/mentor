import type { Result } from "./RimMain.types";
import styles from "./RimMain.module.scss";

export const Card = (cardInfo: Result) => {
  return (
    <div
      className={styles.card}
      key={cardInfo.id}
      data-character-id={cardInfo.id}
    >
      <div>
        <img
          className={styles.card__image}
          src={cardInfo.image}
          alt={cardInfo.name}
        />
      </div>
      <div className={styles.card__info}>
        <h2 className={styles.card__header}>
          {cardInfo.name}
        </h2>
        <p>{cardInfo.species}</p>
        <p>{cardInfo.status}</p>
      </div>
    </div>
  );
};
