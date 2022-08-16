import printPropsHOC from "./HigherOrderComponentPattern/PrintPropsHOC";
import {UserInfo} from "./HigherOrderComponentPattern/UserInfo";
import withUserHOC from "./HigherOrderComponentPattern/WithUserHOC";
import UserInfoForm from "./HigherOrderComponentPattern/UserInfoForm";

const UserInfoWrapped = printPropsHOC(UserInfo);

const UserInfoWithLoader = withUserHOC(UserInfo, '987');

function App() {
	return (
        <>
            <UserInfoWrapped user={{
                name: 'John Doe',
                age: 54,
                hairColor: 'brown',
                hobbies: ['swimming', 'bicycling', 'video games'],
            }} />

            <UserInfoWithLoader />

            <UserInfoForm />
        </>
	);
}

export default App;