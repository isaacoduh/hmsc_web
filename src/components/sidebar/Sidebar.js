import Category from "./category/Category";
import "./Sidebar.css"
import Colors from "./colors/Colors";
import Price from "./price/Price";

const Sidebar = ({handleChange}) => {
    return (
        <>
            <section className="sidebar">
                <div className="logo-container">
                    <h1>🛒</h1>
                </div>
                <Category handleChange={handleChange}/>
                <Price handleChange={handleChange}/>
                <Colors handleChange={handleChange} />
            </section>
        </>
    );
}

export default Sidebar;