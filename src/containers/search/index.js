import React, { useEffect, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import Layout from '../../components/Layout';
import Price from '../../components/UI/Price';
import Rating from '../../components/UI/Rating';
import axiosIntance from '../../helpers/axios';
import { generatePublicUrl } from '../../urlConfig';
import './style.css';

export default function Search() {
    let { text } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        const temporary = async () => {
            const products = async () => {
                const res = await axiosIntance.get(`/search/products/${text}`);
                if (res.status == 200) {
                    const { results } = res.data;
                    return results;
                }
            }
            const result = await products();
            setData(result);
        }
        temporary();
    }, []);
    return (
        <Layout>
            <div style={{ marginLeft: '20px', display: "flex", height: 'auto', overflow: 'hidden', flexWrap: 'wrap',justifyContent: 'flex-start'}}>
                {data.map((product, key) => {
                    return (
                        <Link
                            to={`/${product.slug}/${product._id}/p`}
                            style={{
                                display: "block",
                                textDecoration: "none",
                                color: "#000",
                                padding: '10px'
                            }}
                            className="productContainer"
                        >
                            <div className="productImgContainer">
                                <img src={generatePublicUrl(product.productPictures[0].img)} alt="" />
                            </div>
                            <div className="productInfo">
                                <div style={{ margin: "10px 0" }}>{product.name}</div>
                                <div>
                                    <Rating value="4.3" />
                                    &nbsp;&nbsp;
                                    <span
                                        style={{
                                            color: "#777",
                                            fontWeight: "500",
                                            fontSize: "12px",
                                        }}
                                    >
                                        (3353)
                                    </span>
                                </div>
                                <Price value={product.price} />
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Layout>
    )
}
