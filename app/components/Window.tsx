import { WindowData } from "~/utils/types";

export const Window = ({ title, content, children, classname }: WindowData) => {
  return (
    <section className={`my-2 border border-white divide-y divide-white ${classname || ''}`}>
      <h2 className="font-bold text-xs p-2">{title}</h2>
      {content !== null && (
        <p className="text-xs p-2">{content}</p> // Renderiza solo si content no es null
      )}
      {children}
    </section>
  );
} 
