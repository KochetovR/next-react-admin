import {CreateButton, ExportButton, FilterButton, SelectColumnsButton, TopToolbar} from "react-admin";

export const ListActions = () => (
    <TopToolbar>
        <SelectColumnsButton />
        <FilterButton/>
        <CreateButton/>
        <ExportButton/>
    </TopToolbar>
);