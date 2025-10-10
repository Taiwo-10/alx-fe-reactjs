import { useQuery } from '@tanstack/react-query';

export default function PostsComponent() {
  // Fetch function
  const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  };

  // React Query hook
  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ['posts'], // cache key
    queryFn: fetchPosts,
    staleTime: 30000, // 30 seconds: keeps data fresh for a while before refetching
  });

  // Loading state
  if (isLoading) return <p>Loading posts...</p>;

  // Error state
  if (isError) return <p style={{ color: 'red' }}>Error: {error.message}</p>;

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <button
          onClick={() => refetch()}
          disabled={isFetching}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          {isFetching ? 'Refreshing...' : 'Refetch Posts'}
        </button>
      </div>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.slice(0, 10).map((post) => (
          <li
            key={post.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              marginBottom: '1rem',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
