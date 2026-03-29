import React from 'react';
import DayGroup from './DayGroup';

export default function TransactionsList({ groups = {}, onUpdated }: any) {
  const dates = Object.keys(groups || {}).sort((a: string, b: string) => (a < b ? 1 : -1));
  return (
    <div className="space-y-4">
      {dates.length === 0 ? (
        <div className="text-sm text-muted-foreground">Nenhuma transação.</div>
      ) : (
        dates.map((d) => <DayGroup key={d} date={d} transactions={groups[d]} onUpdated={onUpdated} />)
      )}
    </div>
  );
}
