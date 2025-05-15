import { DatagridConfigurable, EmailField, List, ReferenceField, TextField } from 'react-admin';
import {listFilters} from "@/components/ListFilters";
import {ListActions} from "@/components/ListActions";
import {Theme, useMediaQuery} from "@mui/material";
import {CommentMobileGrid} from "@/components/comments/CommentMobileGrid";

export const CommentList = () => {
    const filters = listFilters(["id", "email", "name", "body"]);
    const isMedium = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('md')
    );
    return (
        <List actions={<ListActions />} filters={filters}>
            {isMedium ? (
                <CommentMobileGrid />
            ) : (
                <DatagridConfigurable>
                    <ReferenceField source="postId" reference="posts" />
                    <TextField source="id" />
                    <TextField source="name" />
                    <EmailField source="email" />
                    <TextField source="body" />
                </DatagridConfigurable>
            )}
        </List>
    )
};