import {
    DatagridConfigurable,
    EmailField,
    List,
    TextField,
} from 'react-admin';
import {listFilters} from './ListFilters';
import {ListActions} from './ListActions';

export const UserList = () => {
    const filters = listFilters(["id", "name", "email", "phone"]);
    return (
        <List actions={<ListActions />} filters={filters}>
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
         </List>
    )
};