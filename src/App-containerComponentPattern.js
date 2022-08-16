import CurrentUserLoader from "./containerComponentPattern/CurrentUserLoader";
import { UserInfo } from "./containerComponentPattern/UserInfo";
import UserLoader from "./containerComponentPattern/UserLoader";
import ResourceLoader from "./containerComponentPattern/ResourceLoader";
import DataSource from "./containerComponentPattern/DataSource";
import axios from 'axios';

const getServerData = async(url) => {
    const response = await axios.get(url);
    return response.data;
}

// const getLocalStorageData = (key) => {
//     return JSON.parse(localStorage.getItem(key));
// }

function App() {
	return (
        <>
            <CurrentUserLoader>
                <UserInfo />
            </CurrentUserLoader>

            <UserLoader userId="780">
                <UserInfo />
            </UserLoader>

            <UserLoader userId="124">
                <UserInfo />
            </UserLoader>
            <ResourceLoader resourceUrl="/users/987" resourceName="user">
                <UserInfo />
            </ResourceLoader>

            <DataSource getDataFunc={() => getServerData('/users/124')} resourceName="user">
                <UserInfo />
            </DataSource>
        </>
	);
}

export default App;