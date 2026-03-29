import React from 'react';

export default function TransactionFilters({ children, onNew }: any) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div className="flex items-center gap-2">
        <div className="text-sm font-medium">Mês</div>
        <select className="rounded border p-1 text-sm">
          <option>Mar 2026</option>
        </select>
        <input className="ml-3 rounded border p-1 text-sm" placeholder="Buscar" />
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => onNew && onNew()} className="rounded bg-primary px-3 py-1 text-sm text-primary-foreground">Nova transação</button>
      </div>
    </div>
  );
}
