import styles from "./RimMain.module.scss";
interface IPaginationProps {
  info: {
    next: string | null;
    prev: string | null;
    pages: number;
  };
  currentPage: number;
  setPageFn: (curPage: number) => void;
}

export const Pagination = (
  props: IPaginationProps,
) => {
  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__wrap}>
        <button
          className={styles.pagination__btn}
          disabled={!props.info.prev}
          onClick={() =>
            props.setPageFn(props.currentPage - 1)
          }
        >
          Назад
        </button>
        <button
          className={styles.pagination__btn}
          disabled={!props.info.next}
          onClick={() =>
            props.setPageFn(props.currentPage + 1)
          }
        >
          Вперед
        </button>
      </div>
      <div>
        Страница {props.currentPage} из{" "}
        {props.info.pages}
      </div>
    </div>
  );
};
