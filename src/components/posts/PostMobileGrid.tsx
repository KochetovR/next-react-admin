import {Box, Card, CardHeader, CardContent, Typography} from "@mui/material";
import {
    EditButton,
    useListContext,
    RecordContextProvider,
    Loading,
    TextField, ReferenceField,
} from 'react-admin';

export const PostMobileGrid = () => {
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
                                <TextField
                                    color='success'
                                    source="title"
                                    variant="h5"
                                />
                            }
                            titleTypographyProps={{
                                variant: 'body1',
                                sx: { textAlign: 'center' },
                            }}
                            action={<EditButton />}
                        />
                        <CardContent sx={{ pt: 0 }}>
                            <Typography>
                                <TextField source="body" />
                            </Typography>
                            <ReferenceField source="userId" reference="users" />
                        </CardContent>
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};
