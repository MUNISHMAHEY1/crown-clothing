import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'; 

import { selectDirectorySections } from '../../redux/directory/DirectorySelector';
import MenuItem from '../menu-item/MenuItem';
import './directory.styles.scss';
// import 

const Directory = ({ sections }) => (
  <div className='directory-menu'>
      {sections.map(({id, ...othersectionProps}) => (
          <MenuItem key={id} {...othersectionProps} />
      ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);