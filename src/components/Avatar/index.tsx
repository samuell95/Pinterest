import { Image, ImageProps } from 'react-native';
import { styles } from './styles';

type AvatarProps = ImageProps & {
  selected: boolean
}

export function Avatar({selected, ...rest}: AvatarProps) {
  return (
   <Image style={[styles.image, selected && styles.selected]} {...rest}/>
  );
}