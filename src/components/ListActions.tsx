import {
    CreateButton,
    ExportButton,
    FilterButton,
    SelectColumnsButton,
    TopToolbar,
} from "react-admin";
import { Theme, useMediaQuery } from "@mui/material";

export const ListActions = (): JSX.Element => {
    const isNotMedium = useMediaQuery<Theme>((theme) =>
        theme.breakpoints.up("md")
    );

    return (
        <TopToolbar>
            {isNotMedium && <SelectColumnsButton />}
            <FilterButton />
            <CreateButton />
            <ExportButton />
        </TopToolbar>
    );
};
