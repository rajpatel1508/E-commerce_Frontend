import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllCategory } from '../../actions';
import './style.css'

export default function MenuHeader() {
  const category = useSelector(state => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const renderCategories = (categories) => {
    let mycategories = [];
    for (let category of categories) {
      mycategories.push(
        <li key={category.name}>
          {
            category.parentId ? <Link to={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</Link> :
              <span>{category.name}</span>
          }
          {category.children.length > 0 ? (<ul>{renderCategories(category.children)} </ul>) : null}
        </li>
      );
    }
    return mycategories;
  }
  
  return (
    <div className='menuheader'>
      <ul>
        {category.categories.length > 0 ? renderCategories(category.categories) : null}
      </ul>
    </div>
  )
}
