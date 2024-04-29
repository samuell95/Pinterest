import { ScrollView, View } from 'react-native';

import { styles } from './styles';
import { Post, PostProps } from '@/components/Post';

type PostsProps = {
  posts: PostProps[];
}

export function Posts({ posts }: PostsProps) {
  function postsByColumn(column: 'right' | "left") {
    const rest = column === "left" ? 0: 1

    return posts.filter((_, index) => index % 2 === rest).map((post) => (
      <Post 
        key={post.id} 
        id={post.id}
        image={post.image}
        title={post.title}
      />
    ))
  }
  return (
   <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.list}>
    <View style={styles.container}>
      <View style={styles.column}>
        {postsByColumn("left")}
      </View>
      <View style={styles.column}>
        {postsByColumn("right")}
      </View>
      </View>
   </ScrollView>
  );
}