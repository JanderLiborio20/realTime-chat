import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import ForwardedTailwindStyledInput from '../Input';

interface ChatProps {
  socket: any;
}

interface SocketResponse {
  author: string;
  authorId: string;
  text: string;
}

export function Chat({ socket }: ChatProps) {
  const [messageList, setMessageList] = useState<SocketResponse[]>([]);

  const bottomRef = useRef<HTMLInputElement>(null);

  const messageRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    socket.on('receive_message', (data: SocketResponse) => {
      setMessageList((currentValue) => [...currentValue, data]);
    });

    return () => socket.off('receive_message');
  }, [socket]);

  const scrollDown = () => {
    bottomRef.current!.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  function clearInput() {
    messageRef.current!.value = '';
  }

  const focusInput = () => {
    messageRef.current!.focus();
  };

  function handleSubmit() {
    const message = messageRef.current!.value;

    if (!message.trim()) return;

    socket.emit('message', message);
    clearInput();
    focusInput();
  }

  const getEnterKey = (e: any) => {
    if (e.key === 'Enter') handleSubmit();
  };

  return (
    <div>
      <div className=" h-[600px] w-[400px] bg-white shadow-md hover:shadow-lg ">
        <div className="p-0 px-5 text-black flex flex-col overflow-y-auto h-[530px] pb-4">
          {messageList.map((message, index) => (
            <div
              key={index}
              className={cn(
                `max-w-[250px] bg-gray-300 mt-5 rounded-7 self-start break-words p-3`,
                message.authorId === socket.id && 'self-end bg-blue-400'
              )}
            >
              <div>
                <strong>{message.author}</strong>
              </div>
              <div>{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className="w-full p-0 px-10 box-border flex items-center justify-center h-[60px]">
          <ForwardedTailwindStyledInput
            ref={messageRef}
            label="Mensagem"
            onKeyDown={(e) => getEnterKey(e)}
            fullWidth
          />
          <SendIcon
            sx={{ m: 1, cursor: 'pointer' }}
            onClick={() => handleSubmit()}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}
