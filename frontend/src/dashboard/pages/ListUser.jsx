import { List, Datagrid, TextField, EmailField, Title } from "react-admin";

export const UserList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);

export const Add = () => {
  return (
    <div>
      <Title title="My Page" />
      <div>...</div>
    </div>
  );
};
