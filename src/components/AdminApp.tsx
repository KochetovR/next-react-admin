"use client";
import { Admin, Resource } from "react-admin";
import { UserList } from "@/components/UserList";
import { PostList } from "@/components/PostList";
import { CommentList } from "@/components/CommentList";
import { CommentEdit } from "@/components/CommentEdit";
import { UserEdit } from "@/components/UserEdit";
import { PostEdit } from "@/components/PostEdit";
import { MyLayout } from "@/layout/MyLayout";
import {authProvider} from "@/app/api/auth/authProvider";
import {myDataProvider} from "@/app/api/dataProvider";
import { MyLogin } from "@/components/MyLogin";
import { UserCreate } from "@/components/UserCreate";
import {PostCreate} from "@/components/PostCreate";
import {CommentCreate} from "@/components/CommentCreate";


const AdminApp = () => {
    return (
        <Admin
            authProvider={authProvider}
            dataProvider={myDataProvider}
            layout={MyLayout}
            loginPage={MyLogin}
            requireAuth

        >
            <Resource
                name="users"
                list={UserList}
                edit={UserEdit}
                recordRepresentation="name"
                create={UserCreate}
            />
            <Resource
                name="posts"
                list={PostList}
                edit={PostEdit}
                recordRepresentation="title"
                create={PostCreate}
            />
            <Resource
                name="comments"
                list={CommentList}
                edit={CommentEdit}
                create={CommentCreate}
            />
        </Admin>
    )
};

export default AdminApp;