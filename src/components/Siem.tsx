"use client";
import { useState, useEffect } from 'react';

export interface LogEntry {
  id: number;
  timestamp: string;
  command: string;
  result: string;
  sourceIP: string;
}

interface SiemProps {
  logs?: LogEntry[];
}

export default function Siem({ logs = [] }: SiemProps) {
  const [internalLogs, setInternalLogs] = useState<LogEntry[]>([]);

  // Simula log inicial do whoami
  useEffect(() => {
    const initialLog: LogEntry = {
      id: Date.now(),
      timestamp: new Date().toLocaleTimeString(),
      command: 'whoami',
      result: 'Sucesso',
      sourceIP: '192.168.1.100'
    };
    
    setInternalLogs([initialLog]);
  }, []);

  // Atualiza logs quando recebe novas entradas
  useEffect(() => {
    if(logs.length > 0) {
      const newLogs = logs.map(log => ({
        ...log,
        id: Date.now(),
        timestamp: new Date().toLocaleTimeString()
      }));
      
      setInternalLogs(prev => [...prev, ...newLogs].slice(-10));
    }
  }, [logs]);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 max-w-6xl mx-auto">
      {/* Texto Explicativo */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Simulador SIEM
        </h2>
        <div className="text-gray-600 space-y-4">
          <p>
            O SIEM (Security Information and Event Management) simula o monitoramento
            em tempo real dos comandos executados no terminal.
          </p>

          <p>
            Ele registra eventos e exibe logs, ajudando a entender a importância
            da análise de segurança.
          </p>

          <p className="text-sm bg-blue-50 p-3 rounded-md border border-blue-200">
            Experimente digitando <code className="font-mono">whoami</code> no
            simulador de terminal Linux. <br />
            (O IP é gerado aleatoriamente, não se preocupe com isso!)
          </p>
        </div>
      </div>

      {/* Painel de Logs */}
      <div className="w-full md:w-1/2 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="mb-4 h-96 overflow-y-auto">
          <div className="text-sm space-y-4">
            {logs.map(log => (
              <div key={log.id} className="p-3 bg-white rounded-md shadow-sm">
                <div className="flex justify-between text-gray-500 mb-1">
                  <span>{log.timestamp}</span>
                  <span>{log.sourceIP}</span>
                </div>
                <div className="font-mono">
                  <span className="text-green-600">$ {log.command}</span>
                  <div className="text-gray-600 mt-1">{log.result}</div>
                </div>
              </div>
            ))}
            
            {logs.length === 0 && (
              <div className="text-gray-400 text-center py-8">
                Aguardando atividades do terminal...
              </div>
            )}
          </div>
        </div>

        <div className="text-sm text-gray-400 mt-4">
          Monitorando conexões com o terminal...
        </div>
      </div>
    </div>
  );
}