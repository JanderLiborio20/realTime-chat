import { useRef } from 'react';
import * as io from 'socket.io-client';
import TailwindStyledButton from '../Button';
import TailwindStyledInput from '../Input';

interface JoinProps {
  onClickButtom(value: boolean): void;
  onSocket(socket: any): void;
}

export function Join({ onClickButtom, onSocket }: JoinProps) {
  const usernameRef = useRef<HTMLInputElement>(null);

  async function handleSubmit() {
    const username = usernameRef.current!.value;

    if (!username.trim()) return;
    const socket = await io.connect('http://localhost:3001/');

    socket.emit('set_username', username);

    onSocket(socket);
    onClickButtom(true);
  }

  return (
    <div className="bg-white text-[#000] w-[400px] h-52 flex flex-col justify-center items-center shadow-md gap-4">
      <h2 className="text-2xl font-bold">Chat em tempo real</h2>

      <div className="w-[250px]">
        <TailwindStyledInput label="Nome de usuário" ref={usernameRef} />
      </div>

      <TailwindStyledButton onClick={handleSubmit} className="mt-2 w-[100px]">
        Entrar
      </TailwindStyledButton>
    </div>
  );
}
