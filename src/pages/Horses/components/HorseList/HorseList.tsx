import { DataGrid } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { getAllHorses } from "../../../../api";
import { Horse } from "../../../../api/horse/types";

const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name" },
];

export const HorseList = () => {
    // TODO: Add long polling
    const { data = [], isLoading } = useQuery<Horse[]>({
        queryKey: ["horses"],
        queryFn: getAllHorses,
    });

    return (
        <div style={{ height: "500px" }}>
            <DataGrid rows={data} loading={isLoading} columns={columns} />
        </div>
    );
};
