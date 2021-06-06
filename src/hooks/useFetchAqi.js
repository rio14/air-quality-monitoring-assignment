import { useState, useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
const ENDPOINT = "wss://city-ws.herokuapp.com/";

function useFetchAqi() {
  const [aqiList, setAqiList] = useState([]);
  const { lastMessage, readyState } = useWebSocket(ENDPOINT, { share: true });

  useEffect(() => {
    if (lastMessage) {
      setAqiList(JSON.parse(lastMessage.data));
    }
  }, [lastMessage]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];
  return { aqiList, connectionStatus };
}

export default useFetchAqi;
