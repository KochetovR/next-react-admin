import { DatagridConfigurable, List, ReferenceField, TextField } from 'react-admin';
import {listFilters} from "@/components/ListFilters";
import {ListActions} from "@/components/ListActions";
import {Theme, useMediaQuery} from "@mui/material";
import {PostMobileGrid} from "@/components/posts/PostMobileGrid";

export const PostList = () => {
    const filters = listFilters(["id", "title", "body"]);
    const isMedium = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('md')
    );
    return (
        <List actions={<ListActions />} filters={filters}>
            {isMedium ? (
                <PostMobileGrid />
            ) : (
                <DatagridConfigurable>
                    <ReferenceField source="userId" reference="users" />
                    <TextField source="id" />
                    <TextField source="title" />
                    <TextField source="body" />
                </DatagridConfigurable>
            )}
        </List>
    )
};