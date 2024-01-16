import "./Colors.css";
import Input from "../../Input"

const Colors = ({handleChange}) => {
    return (
        <>
            <div>
                <h2 className="sidebar-title color-title">Colors</h2>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test1" />
                    <span className="checkmark all"></span> All
                </label>
                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="black"
                        title="Black"
                        name="test1"
                    />
                    <span className="checkmark" style={{background: "black"}}></span> Black
                </label>
                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="green"
                        title="Green"
                        name="test1"
                    />
                    <span className="checkmark" style={{background: "green"}}></span> Black
                </label>
                <label className="sidebar-label-container">
                    <input
                        onChange={handleChange}
                        type="radio"
                        value="red"
                        title="Red"
                        name="test1"
                    />
                    <span className="checkmark" style={{background: "red"}}></span> Black
                </label>
                <label className="sidebar-label-container">
                    <span
                        className="checkmark"
                        style={{ background: "white", border: "2px solid black" }}
                    ></span>
                    White
                </label>
            </div>
        </>
    );
};

export default Colors;