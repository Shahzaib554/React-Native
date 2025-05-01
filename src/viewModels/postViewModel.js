import { useQuery } from '@tanstack/react-query';
import { fetchAllPosts } from '../services/postService';
import { PostModel } from '../models/postModel';

export const PostViewModel = () => {
  const {
    data: posts = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchAllPosts,
    select: (data) => data.map(post => new PostModel(post.id, post.userId, post.title, post.body)),
  });

  return { posts, error, isLoading };
};
