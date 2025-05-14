import {AppBar, TitlePortal, InspectorButton} from 'react-admin';


export const MyAppBar = () => (
    <AppBar color="primary">
        <TitlePortal />
        <InspectorButton />
    </AppBar>
);