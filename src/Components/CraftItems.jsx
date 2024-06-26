import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
const CraftItems = ({ item }) => {
  const { _id, image, itemName, price, shortDescription, selectedCustomize } =
    item;

  return (
    <div>
      <Fade delay={300}>
        <div className="card  bg-base-100 shadow-xl h-[35rem] cursor-pointer">
          <figure>
            <img
              className="h-[15rem] hover:scale-125 transition-all"
              src={image}
              alt="image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{itemName}</h2>
            <p className="font-bold text-orange-600">Price: ${price}</p>

            <p>{shortDescription}</p>
            <div className="card-actions">
              <Link to={`/detailspage/${_id}`} className="w-full">
                <button className="btn bg-[#00b38c] hover:bg-[#00b38c] text-white w-full ">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default CraftItems;
