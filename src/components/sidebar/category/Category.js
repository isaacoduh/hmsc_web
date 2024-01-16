import './Category.css';
import Input from "../../Input";
function Category ({handleChange}) {
    return (
        <div>
            <h2 className="sidebar-title">Category</h2>
            <div >
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="" name="test" />
                    <span className="checkmark"></span>All
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="sneakers" name="test" />
                    <span className="checkmark"></span>Sneakers
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="electronics" name="test" />
                    <span className="checkmark"></span>Electronics
                </label>
                <label className="sidebar-label-container">
                    <input onChange={handleChange} type="radio" value="kitchen" name="test" />
                    <span className="checkmark"></span>Kitchen
                </label>

            </div>
        </div>
    );
}

export default Category;