import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaView, Text } from 'react-native';
import PostListScreen from '../React-Native/src/screens/postListScreen';


const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
        <PostListScreen />
    </QueryClientProvider>
  );
};

export default App;
