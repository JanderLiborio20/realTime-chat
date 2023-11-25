import { useState } from 'react';
import { Chat } from './components/Chat/Chat';
import { Join } from './components/Join/Join';

function App() {
  const [chatVisibility, setChatVisibility] = useState(false);
  const [socket, setSocket] = useState(null);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-screen flex justify-center items-center">
      {chatVisibility ? (
        <Chat socket={socket} />
      ) : (
        <Join onClickButtom={setChatVisibility} onSocket={setSocket} />
      )}
    </div>
  );
}

export default App;
