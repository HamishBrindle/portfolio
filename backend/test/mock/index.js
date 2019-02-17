import faker from 'faker';
import { util } from '../../api/tools';

export const fakeHexColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16);

export const fakeRgbColor = () => {
  const num = Math.round(0xffffff * Math.random());

  const r = num >> 16;
  const g = num >> 8 & 255;
  const b = num & 255;

  return `rgb(${r}, ${g}, ${b})`
}

export const fakeColor = () => {
  const types = [
    'PRIMARY',
    'SECONDARY',
    'SUCCESS',
    'DANGER',
    'WARNING',
    'INFO',
    'LIGHT',
    'DARK',
    'MUTED',
    'WHITE',
    'MISC'
  ];

  const shades = [
    'LIGHT',
    'DARK'
  ];

  let hex;
  let rgb;
  while (!hex || !rgb) {
    hex = fakeHexColor();
    rgb = util.hexToRgb(hex);
  }

  return {
    id: null,
    type: util.sample(types),
    shade: util.sample(shades),
    hex,
    rgb
  }
};

export const fakeTechnology = () => ({
  id: null,
  name: faker.commerce.productName(),
  image: {
    url: faker.image.imageUrl(),
    title: faker.random.words(),
    caption: faker.lorem.sentence()
  },
  color: fakeColor()
});

export const fakeStyle = (numColor = 1) => {
  const shapes = [
    'JAGGED',
    'ROUND',
    'SQUARE'
  ];

  const style = {
    id: null,
    name: faker.hacker.noun(),
    shape: util.sample(shapes),
    color: {}
  };

  for (let i = 0; i < numColor; i++) {
    style.color[i] = fakeColor()
  }
  
  return style;
};