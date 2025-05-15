import {Box, Card, CardHeader, CardContent, Typography} from "@mui/material";
import {
    EditButton,
    useListContext,
    RecordContextProvider,
    Loading,
    TextField, ReferenceField, EmailField,
} from 'react-admin';

export const CommentMobileGrid = () => {
    const { data, error, isPending } = useListContext();

    if (isPending) {
        return <Loading />;
    }

    if (error) {
        return <Box>Error: {error.message}</Box>;
    }

    if (!data || data.length === 0) {
        return <Box>No records found</Box>;
    }

    return (
        <Box>
            {data.map(record => (
                <RecordContextProvider key={record.id} value={record}>
                    <Card sx={{ margin: '0.5rem 0' }}>
                        <CardHeader
                            title={
                                <>
                                    <Typography>
                                        <TextField
                                            color={"success"}
                                            source="name"
                                            variant="body1"
                                        />
                                    </Typography>
                                    <Typography>
                                        <EmailField source="email"/>
                                    </Typography>
                                </>
                            }
                            titleTypographyProps={{
                                variant: 'body1',
                            }}
                            action={<EditButton />}
                        />
                        <CardContent sx={{ pt: 0 }}>
                            <Typography>
                                <TextField source="body" />
                            </Typography>
                            <ReferenceField source="postId" reference="posts" color='primary' />
                        </CardContent>
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};
