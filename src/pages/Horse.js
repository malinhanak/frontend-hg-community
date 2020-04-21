import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

function Horse(props) {
  const params = useParams();
  console.log('params', params);
  if (!params.slug) {
    return 'No horse found';
  }

  return `Found horse ${params.slug}`;
}

export default Horse;
