const socket = io();

function send(cmd)
{
    socket.emit("remote-command", cmd);
}
