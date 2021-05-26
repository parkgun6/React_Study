import { useSelector } from "react-redux";

const PageHeader = () => {

    const username = useSelector(state => state.loginReducer.username)

    return (
        <div>
            <h1>안녕하세요.{username}</h1>
        </div>
    );
}
 
export default PageHeader;