import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostsComponent from './components/PostsComponent';

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ textAlign: 'center', margin: '2rem' }}>
        <button
          onClick={() => setShowPosts(!showPosts)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {showPosts ? 'Hide Posts' : 'Show Posts'}
        </button>
      </div>
      {showPosts && <PostsComponent />}
    </QueryClientProvider>
  );
}

export default App;
