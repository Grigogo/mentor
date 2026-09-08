import { TaskTitle } from "../components/effects/TaskTitle";
import { TaskCard } from "../components/TaskCard";

export function EffectsPage() {
  return (
    <section className="page">
      <h1 className="page-title">Effects</h1>

      <TaskCard
        num="01"
        title="Task 03 — Title Sync"
      >
        <TaskTitle />
      </TaskCard>
    </section>
  );
}
