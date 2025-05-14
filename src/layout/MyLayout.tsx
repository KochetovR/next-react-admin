import { Layout } from 'react-admin';
import { MyAppBar } from "@/components/MyAppBar"
import {MyMenu} from "@/components/MyMenu";

export const MyLayout = ({ children }) => (
    <Layout appBar={MyAppBar} menu={MyMenu}>
        {children}
    </Layout>
);