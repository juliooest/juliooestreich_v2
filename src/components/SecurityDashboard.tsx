"use client";

import { useState } from 'react';
import Terminal from "./Terminal";
import Siem, { LogEntry } from "./Siem";

export default function SecurityDashboard() {
  const [logs, setLogs] = useState<LogEntry[]>([]);

  const handleCommandExecuted = (log: Omit<LogEntry, 'id' | 'timestamp'>) => {
    const newLog: LogEntry = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
      ...log
    };
    
    setLogs(prev => [...prev, newLog].slice(-10));
  };

  return (
    <div className="space-y-8">
      <Terminal onCommandExecuted={handleCommandExecuted} />
      <Siem logs={logs} />
    </div>
  );
}