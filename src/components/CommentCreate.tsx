import {
    useNotify,
    useRedirect,
    Create,
    SimpleForm,
    TextInput,
    ReferenceInput,
    EmailField,
    FileInput, FileField
} from 'react-admin';

export const CommentCreate = () => {
    const notify = useNotify();
    const redirect = useRedirect();

    const onSuccess = (data) => {
        notify(`Changes saved`);
        redirect(`/comments`);
    };

    return (
        <Create
            title="Comment Create"
            mutationOptions={{ onSuccess }}
        >
            <SimpleForm>
                <ReferenceInput label="Post" source="postId" reference="posts" />
                <TextInput source="name" label="Name" />
                <TextInput source="email" label="Email" />
                <TextInput source="body" label="Body" />
                <FileInput source="attachments">
                    <FileField source="src" title="title" />
                </FileInput>
            </SimpleForm>
        </Create>
    );
}