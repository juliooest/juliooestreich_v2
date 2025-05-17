// components/Terminal.tsx
"use client";
import { useState, FormEvent } from 'react';

interface CommandOutput {
  command: string;
  output: string;
}

interface TerminalProps {
  onCommandExecuted?: (log: {
    command: string;
    result: string;
    sourceIP: string;
  }) => void;
}

export default function Terminal({ onCommandExecuted }: TerminalProps) {
  const [command, setCommand] = useState<string>('');
  const [outputs, setOutputs] = useState<CommandOutput[]>([]);

  const commands: { [key: string]: () => string } = {
    help: () => "Comandos disponíveis:\n- help\n- whoami\n- clear",
    whoami: () => "Muito prazer, meu nome é Júlio Oestreich, 22 anos\nEstudante de Defesa cibernética na FIAP\nCTF Player, estudando pentesting e SOC\nAtualmente Desenvolvedor Frontend na AmBev Grandourados\n",
    clear: () => {
      setOutputs([]);
      return "Terminal limpo.";
    }
  };

  const generateIP = () => `192.168.1.${Math.floor(Math.random() * 255)}`;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!command.trim()) return;

  const output = commands[command]?.() || `Comando inválido: ${command}`;

  if (output !== "__CLEAR__") {
    setOutputs(prev => [...prev, { 
      command: `user@portfolio:~$ ${command}`, 
      output: output 
    }]);
  }


  if(onCommandExecuted) {
    onCommandExecuted({
      command,
      result: output.includes("inválido") ? "Falha" : "Sucesso",
      sourceIP: generateIP()
    });
  }
  
  setCommand('');
};

  return (
    <div className="flex flex-col md:flex-row gap-10 p-4 max-w-6xl mx-auto">
      <div className="w-full md:w-1/2 bg-black text-green-500 p-6 rounded-lg shadow-xl font-mono">
        <div className="mb-4 h-64 overflow-y-auto">
          {outputs.map((item, index) => (
            <div key={index} className="mb-3">
              <div className="text-yellow-400">{item.command}</div>
              <div className="whitespace-pre-line">{item.output}</div>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleSubmit} className="flex items-center border-t border-green-800 pt-4">
          <span className="text-yellow-400">user@portfolio:~$</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="bg-black text-green-500 flex-grow ml-2 focus:outline-none"
            autoFocus
          />
        </form>
      </div>

      <div className="w-full md:w-1/2">
      <h2 className="text-2xl font-semibold text-green-800 mb-4">
        Sobre o Terminal
      </h2>
      <p className="text-green-600">
        Este é um terminal interativo que simula comandos Linux básicos:
      </p>
      
      <ul className="list-disc pl-6 mt-3 space-y-2 text-green-600">
        <li><span className="font-medium">help</span> - Lista comandos disponíveis</li>
        <li><span className="font-medium">whoami</span> - Exibe informações profissionais</li>
        <li><span className="font-medium">clear</span> - Limpa o histórico</li>
      </ul>

      <p className="mt-4 text-sm text-green-500">
        Experimente digitar os comandos no terminal ao lado.
      </p>
    </div>
  </div>
  );
}