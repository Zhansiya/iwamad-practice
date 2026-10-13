import ProfileCard from '../components/ProfileCard';

export default function HomePage() {
  return (
      <ProfileCard
        name="Zhansiya Zheldybay"
        bio="Hi! I'm Zhansiya, a third-year IT Management student at KBTU. I'm interested in technology, digital products, and web development."
        avatarUrl={`${import.meta.env.BASE_URL}images.png`}
      />
  )
}