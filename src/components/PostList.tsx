import { DatagridConfigurable, List, ReferenceField, TextField } from 'react-admin';
import {listFilters} from "@/components/ListFilters";
import {ListActions} from "@/components/ListActions";

export const PostList = () => {
    const filters = listFilters(["id", "title", "body"]);
    return (
        <List actions={<ListActions />} filters={filters}>
            <DatagridConfigurable>
                <ReferenceField source="userId" reference="users" />
                <TextField source="id" />
                <TextField source="title" />
                <TextField source="body" />
            </DatagridConfigurable>
        </List>
    )
};