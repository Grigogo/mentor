import type { ReactNode } from "react";

export function TaskCard({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="task-card">
      <h2>
        <span className="task-card-num">
          {num}
        </span>
        {title}
      </h2>
      {children}
    </article>
  );
}
