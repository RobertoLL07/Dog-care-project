import { FC } from "react";
import { useDispatch } from "react-redux";
import "./styles.css";

const Tips: FC = () => {
  const dispatch = useDispatch();

  return (
    <div className="urdog-container">
      <div className="urdog-top">
        <p className="urdog-title">Tips</p>
        <p className="urdog-description">
          Here are some tips on dogs general care.
        </p>
      </div>
      <div className="urdog-zipcode"></div>
      <div>
        <p className="tips-text-title">GENERAL DOG CARE</p> <br />
        <p className="tips-text">
          A dog can be a wonderful addition to any home, but whether you're an
          experienced pet parent or a first-time adopter, it's important to keep
          your canine companion's health and happiness a top priority. Below are
          some useful tips for all dog parents.
        </p>
        <br />
        <br />
        <p className="tips-text-title">Feeding</p> <br />
        <p className="tips-text">
          Puppies eight to 12 weeks old need four meals a day. Feed puppies
          three to six months old three meals a day. Feed puppies six months to
          one year two meals a day. When your dog reaches his first birthday,
          one meal a day is usually enough. For some dogs, including larger
          canines or those prone to bloat, it's better to feed two smaller
          meals. Premium-quality dry food provides a well-balanced diet for
          adult dogs and may be mixed with water, broth or canned food. Your dog
          may enjoy cottage cheese, cooked egg or fruits and vegetables, but
          these additions should not total more than ten percent of his daily
          food intake. Puppies should be fed a high-quality, brand-name puppy
          food (large breed puppy foods for large breeds). Please limit "people
          food," however, because it can result in vitamin and mineral
          imbalances, bone and teeth problems and may cause very picky eating
          habits and obesity. Clean, fresh water should be available at all
          times, and be sure to wash food and water dishes frequently.
        </p>
      </div>
    </div>
  );
};

export default Tips;
