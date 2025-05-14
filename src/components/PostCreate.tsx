import {useNotify, useRedirect, Create, SimpleForm, TextInput, ReferenceInput} from 'react-admin';

export const PostCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = (data) => {
        notify(`Changes saved`);
        redirect(`/posts`);
    };

    return (
        <Create
            title="Post Create"
            mutationOptions={{ onSuccess }}
        >
            <SimpleForm>
                <ReferenceInput label="User" source="userId" reference="users" />
                <TextInput source="title" label="Title" />
                <TextInput source="body" label="Body" />
            </SimpleForm>
        </Create>
    );
}