import { Box, Card, CardHeader, CardContent, Typography } from "@mui/material";
import {
    EditButton,
    useListContext,
    RecordContextProvider,
    Loading,
    TextField,
    EmailField
} from 'react-admin';

export const UserMobileGrid = () => {
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
                                    <TextField
                                        color='primary'
                                        source="id"
                                        variant="body1"
                                    />&nbsp;
                                    <TextField
                                        color='primary'
                                        source="name"
                                        variant="body1"
                                    />
                                </>
                            }
                            titleTypographyProps={{ variant: 'body1' }}
                            action={<EditButton />}
                        />
                        <CardContent sx={{ pt: 0 }}>
                            <Typography variant="body2" gutterBottom>
                                Username:&nbsp;<TextField source="username" color='success' />
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                <EmailField source="email"/>
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                Phone:&nbsp;<TextField source="phone" color='secondary' />
                            </Typography>
                        </CardContent>
                    </Card>
                </RecordContextProvider>
            ))}
        </Box>
    );
};
