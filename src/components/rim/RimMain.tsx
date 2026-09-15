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
  const [activeCard, setActiveCard] = useState(
    {},
  );
  const [page, setPage] = useState(1);
  const [data, setData] =
    useState<DataRim>(EMPTY_DATA);
  const ref = useRef<HTMLInputElement>(null);

  const fetchData = async (
    search: string,
    page: number,
  ) => {
    setStatus("load");
    const params = new URLSearchParams({
      name: search,
      page: page.toString(),
    });
    try {
      const response = await fetch(
        `${API_URL}${params}`,
      );
      if (response.status === 404) {
        setStatus("notFound");
        return EMPTY_DATA;
      }
      if (!response.ok) {
        setStatus("error");
        return EMPTY_DATA;
      }
      const json = await response.json();
      setStatus("ready");
      return json;
    } catch (error) {
      setStatus("error");
      console.error(error);
      return EMPTY_DATA;
    }
  };

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData(
        search,
        page,
      );
      setData(fetchedData);
    };
    getData();
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
            !(event.target instanceof HTMLElement)
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

      {status !== "notFound" && (
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
