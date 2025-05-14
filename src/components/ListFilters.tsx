import {SearchInput} from "react-admin";

export const listFilters = (filters: string[]) => {
    return filters.map(source => (
        <SearchInput
            key={source}
            source={source}
            placeholder={`Search by ${source}`}
            alwaysOn={source === "id"}
        />
    ));
};