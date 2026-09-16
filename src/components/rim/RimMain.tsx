import {
  useEffect,
  useRef,
  useState,
} from "react";
import type {
  DataRim,
  Status,
} from "./RimMain.types";
import styles from "./RimMain.module.scss";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

const API_URL =
  "https://rickandmortyapi.com/api/character/?";
const EMPTY_DATA = {
  info: {
    count: 0,
    pages: 0,
    next: null,
    prev: null,
  },
  results: [],
};

const RimMain = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] =
    useState<Status>("");
  const [activeCardId, setActiveCardId] =
    useState({});
  const [page, setPage] = useState(1);
  const [data, setData] =
    useState<DataRim>(EMPTY_DATA);
  const ref = useRef<HTMLInputElement>(null);

  const fetchData = async (
    search: string,
    page: number,
    signal: AbortSignal,
  ) => {
    setStatus("load");
    const params = new URLSearchParams({
      name: search,
      page: page.toString(),
    });
    try {
      const response = await fetch(
        `${API_URL}${params}`,
        { signal },
      );
      if (response.status === 404) {
        setStatus("notFound");
        setData(EMPTY_DATA);
        return;
      }
      if (!response.ok) {
        setStatus("error");
        setData(EMPTY_DATA);
        return;
      }
      const json = await response.json();
      setData(json);
      setStatus("ready");
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === "AbortError") return;
      }
      setStatus("error");
      console.error(error);
      setData(EMPTY_DATA);
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    fetchData(search, page, controller.signal);

    return () => {
      controller.abort();
    };
  }, [search, page]);

  return (
    <div>
      <input
        ref={ref}
        className={styles.search}
        type="text"
        placeholder="Введите имя персонажа"
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />
      {status === "load" && (
        <p className={styles.status}>
          Загрузка...
        </p>
      )}
      {status === "error" && (
        <p className={styles.status}>
          Ошибка при загрузке данных
        </p>
      )}
      {status === "notFound" && (
        <p className={styles.status}>
          Персонаж не найден
        </p>
      )}
      <div
        className={styles.cards}
        onClick={(event) => {
          if (!(event.target instanceof Element))
            return;
          const currentCard =
            event.target.closest(
              "[data-character-id]",
            );
          if (
            !(currentCard instanceof HTMLElement)
          )
            return;
          const id = Number(
            currentCard?.dataset.userId,
          );
          console.log(id);
        }}
      >
        {data.results?.map((item) => (
          <Card key={item.id} {...item} />
        ))}
      </div>

      {status !== "notFound" &&
        status !== "error" && (
          <Pagination
            info={data.info}
            currentPage={page}
            setPageFn={setPage}
          />
        )}
    </div>
  );
};

export default RimMain;
