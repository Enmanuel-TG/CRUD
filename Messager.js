let msgs = [];

function createMsg(msg) {
  msgs = [...msgs, msg];
}
function readMsg() {
  return msgs;
}

function UpDataMsg(id, newMsg) {
  msgs = msgs.map((msg) => {
    if (msg.id === id) {
      return {
        ...msg,
        ...newMsg,
      };
    } else {
      return msg;
    }
  });
}

function deleteMsg(id) {
  msgs = msgs.filter((msg) => msg.id !== id);
}

createMsg({
  id: 1,
  name: "Enmanuel",
  context: "Hola",
  date: "12/5/2023",
});
createMsg({
  id: 2,
  name: "Petruco",
  context: "NOSE",
  date: "11/15/2023",
});
UpDataMsg(2, {
  id: 3,
  name: "Jose",
  context: "MenosY0",
  date: "11/16/2023",
});
deleteMsg(3);
readMsg();
