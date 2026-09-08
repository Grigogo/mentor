import { Task01_FocusInput } from "../components/refs/Task01_FocusInput";
import { Task02_ScrollToBlock } from "../components/refs/Task02_ScrollToBlock";
import { Task03_ReadInputValue } from "../components/refs/Task03_ReadInputValue";
import { Task08_IgnoreRepeatedClick } from "../components/refs/Task08_IgnoreRepeatedClick";
import { TaskCard } from "../components/TaskCard";

export function RefsPage() {
  return (
    <section className="page">
      <h1 className="page-title">Refs</h1>

      <TaskCard
        num="01"
        title="Фокус на поле ввода"
      >
        <Task01_FocusInput />
      </TaskCard>

      <TaskCard
        num="02"
        title="Прокрутка к блоку"
      >
        <Task02_ScrollToBlock />
      </TaskCard>

      <TaskCard
        num="03"
        title="Чтение значения инпута"
      >
        <Task03_ReadInputValue />
      </TaskCard>

      <TaskCard
        num="08"
        title="Игнорировать повторный клик"
      >
        <Task08_IgnoreRepeatedClick />
      </TaskCard>
    </section>
  );
}
