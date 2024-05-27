import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getAllRaces } from "../../../../api/race/raceAPI";
import { Race } from "../../../../api/race/types";

const columns = [
    { field: "_id", headerName: "ID", width: 200 },
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
    const { data = [], isLoading } = useQuery<Race[]>({
        queryKey: ["races"],
        queryFn: getAllRaces,
    });
    return (
        <DataGrid
            rows={data}
            loading={isLoading}
            getRowId={(row) => row._id}
            columns={columns}
        />
    );
};
