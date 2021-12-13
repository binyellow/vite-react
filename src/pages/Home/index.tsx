import React from 'react';
import { Cascader } from 'antd';

const Home = () => {
  const options = [
    {
      label: 'Light',
      value: 'light',
      children: new Array(20)
        .fill(null)
        .map((_, index) => ({ label: `Number ${index}`, value: index })),
    },
    {
      label: 'Bamboo',
      value: 'bamboo',
      children: [
        {
          label: 'Little',
          value: 'little',
          children: [
            {
              label: 'Toy Fish',
              value: 'fish',
            },
            {
              label: 'Toy Cards',
              value: 'cards',
            },
            {
              label: 'Toy Bird',
              value: 'bird',
            },
          ],
        },
      ],
    },
  ];
  return (
    <Cascader options={options} defaultValue={['bamboo']} />
  );
};

export default Home;