import { DatagridConfigurable, EmailField, List, ReferenceField, TextField } from 'react-admin';
import {listFilters} from "@/components/ListFilters";
import {ListActions} from "@/components/ListActions";

export const CommentList = () => {
    const filters = listFilters(["id", "email", "name", "body"]);
    return (
        <List actions={<ListActions />} filters={filters}>
            <DatagridConfigurable>
                <ReferenceField source="postId" reference="posts" />
                <TextField source="id" />
                <TextField source="name" />
                <EmailField source="email" />
                <TextField source="body" />
            </DatagridConfigurable>
        </List>
    )
};