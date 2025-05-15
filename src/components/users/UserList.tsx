import {
    DatagridConfigurable,
    EmailField,
    List,
    TextField,
} from 'react-admin';
import {listFilters} from '../ListFilters';
import {ListActions} from '../ListActions';
import {UserMobileGrid} from "@/components/users/UserMobileGrid";
import { useMediaQuery, Theme } from '@mui/material';

export const UserList = () => {
    const filters = listFilters(["id", "name", "email", "phone"]);
    const isMedium = useMediaQuery<Theme>(theme =>
        theme.breakpoints.down('md')
    );
    return (
        <List actions={<ListActions />} filters={filters}>
            {isMedium ? (
                <UserMobileGrid />
            ) : (
                <DatagridConfigurable>
                    <TextField source="id" />
                    <TextField source="name" />
                    <TextField source="username" />
                    <EmailField source="email" />
                    <TextField source="address.street" />
                    <TextField source="phone" />
                    <TextField source="website" />
                    <TextField source="company.name" />
                </DatagridConfigurable>
            )}
         </List>
    )
};