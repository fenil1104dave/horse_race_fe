import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getAllHorses } from "../../../../api";
import { Horse } from "../../../../api/horse/types";
import { useEffect } from "react";
import { useSocket } from "../../../../context/SocketContext";

const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name" },
];

export const HorseList = () => {
    const { socket } = useSocket();

    const { data = [], isLoading } = useQuery<Horse[]>({
        queryKey: ["horses"],
        queryFn: getAllHorses,
    });

    useEffect(() => {
        if (socket) {
            socket.on("message", (message: string) => {
                console.log({ message });
            });
        }

        // return () => {
        //   if (socket) {
        //     socket.off("message");
        //   }
        // };
    }, [socket]);

    const handleRowClick = () => {
        if (socket) {
            console.log({ socket });
            socket.emit("raceMessage", { type: "GET_RACES" });
        }
    };

    return (
        <DataGrid
            rows={data}
            loading={isLoading}
            getRowId={(row) => row._id}
            columns={columns}
            onCellClick={handleRowClick}
        />
    );
};
