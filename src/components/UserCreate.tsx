import {useNotify, useRedirect, Create, SimpleForm, TextInput} from 'react-admin';

export const UserCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = (data) => {
        console.log('data:', data)
        notify(`Changes saved`);
        redirect(`/users`);
    };

    return (
        <Create
            title="User Create"
            mutationOptions={{ onSuccess }}
        >
            <SimpleForm>
                <TextInput source="name" label="Name" />
                <TextInput source="username" label="Username" />
                <TextInput source="email" label="Email" />
                <TextInput source="phone" label="Phone" />
                <TextInput source="website" label="Website" />
                <TextInput source="company" label="Company name" />
                <TextInput source="address" label="Address street" />
            </SimpleForm>
        </Create>
    );
}