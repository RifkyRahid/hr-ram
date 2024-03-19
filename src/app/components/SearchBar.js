import React from 'react';
import { styled, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '4px',
  padding: '2px 4px',
  marginRight: '8px',
  marginLeft: '20px',
  marginBotton: '-20%'

});

const SearchInput = styled(InputBase)({
  marginLeft: '4px',
  flex: 1,
});

export default function SearchBar() {
  return (
    <SearchWrapper>
      <SearchIcon />
      <SearchInput placeholder="Cari..." />
    </SearchWrapper>
  );
}
