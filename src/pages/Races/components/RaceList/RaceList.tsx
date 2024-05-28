import { DataGrid } from "@mui/x-data-grid";
import { Race } from "../../../../api/race/types";
import { useEffect, useState } from "react";
import { useSocket } from "../../../../context/SocketContext";

const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name" },
    { field: "started_at", headerName: "Started At" },
    {
        field: "players",
        headerName: "Player",
        valueGetter: (_, row: Race) =>
            row.players
                .map((player) => `${player.horse.name}(${player.lane_number})`)
                .join(","),
        width: 200,
    },
];

export const RaceList = () => {
    const { socket } = useSocket();

    const [races, setRaces] = useState<Race[]>([]);

    useEffect(() => {
        if (socket) {
            socket.emit("raceMessage", { type: "GET_RACES" });
        }

        return () => {
            if (socket) {
                socket.emit("raceMessage", { type: "DISCONNECT_RACES" });
            }
        };
    }, [socket]);

    socket?.on("raceMessage", (res) => {
        const { data } = res;
        setRaces(data || []);
    });

    return (
        <div>
            <DataGrid rows={races} columns={columns} />
        </div>
    );
};
