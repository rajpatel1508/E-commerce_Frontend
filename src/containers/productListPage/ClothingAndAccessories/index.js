import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsBySlug } from "../../../actions";
import Card from "../../../components/UI/card";
import { BiRupee } from "react-icons/bi";
import { Link, useSearchParams } from "react-router-dom";
import "./style.css";

const ClothingAndAccessories = (props) => {
    const [searchParams] = useSearchParams();
    const product = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsBySlug(searchParams.get('slug')));
    }, []);

    return (
        <div style={{ padding: "10px" }}>
            <Card
                style={{
                    boxSizing: "border-box",
                    padding: "10px",
                    display: "flex",
                }}
            >
                {product.products.map((product) => (
                    <div className="caContainer">
                        <Link
                            className="caImgContainer"
                            to={`/${product.slug}/${product._id}/p`}
                        >
                            <img src={product.productPictures[0].img} />
                        </Link>
                        <div>
                            <div className="caProductName">{product.name}</div>
                            <div className="caProductPrice">
                                <BiRupee />
                                {product.price}
                            </div>
                        </div>
                    </div>
                ))}
            </Card>
        </div>
    );
};

export default ClothingAndAccessories;