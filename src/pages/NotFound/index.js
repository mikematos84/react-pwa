import React from 'react';
import '../../App.scss';
import { currentPage } from '../../services/routerHelper';

const NotFound = props => {
  return (
    <div className={currentPage(props.location)}>
      <div>Not Found</div>
    </div>
  )
}

export default NotFound;