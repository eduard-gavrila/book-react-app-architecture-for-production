import { useRouter } from 'next/router';

// import { useUser } from './api';

const UserProfile = () => {
  const router = useRouter();
  const userId = router.query.userId;
  const { user, isLoading } = {
    user: { name: 'Max' },
    isLoading: false,
  }; //useUser(userId);

  if (!user && isLoading) return <div>Loading...</div>;

  if (!user) return <div>User not found!</div>;

  return <div>User: {user.name}</div>;
};
