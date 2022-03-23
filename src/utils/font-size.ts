import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 360;

export function actuatedNormalize(size: number) {
  const newSize = size * scale;
  return PixelRatio.roundToNearestPixel(newSize);
}
