import { Link, useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  const loadedData = useLoaderData();
  const { _id } = useParams();

  const currentItem = loadedData.find((item) => item.id === _id);
  const { image, itemName, price, rating, shortDescription } = currentItem;

  console.log(currentItem);
  return (
    <div>
      <h1>this is details page</h1>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{itemName}</h2>
          <p>{price}</p>
          <p>{rating}</p>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <Link to={"/allArtAndCraft"}>
              <button className="btn">Go Back</button>
            </Link>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
