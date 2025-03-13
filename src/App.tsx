import React, { useEffect } from 'react';
import { Github, Twitter, Globe, PodcastIcon as Mastodon, Fish } from 'lucide-react';

interface Profile {
  username: string;
  displayName: string;
  bio: string;
  pfp: string;
  socials: {
    platform: string;
    url: string;
    icon: React.ReactNode;
  }[];
}

const profiles: Record<string, Profile> = {
  nobleskye: {
    username: "nobleskye",
    displayName: "NobleSkye",
    bio: "Full Stack Developer & UI/UX Designer\n\nBuilding beautiful, accessible, and performant web applications. Focused on React, TypeScript, and modern web technologies.",
    pfp: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=400",
    socials: [
      { platform: "GitHub", url: "https://github.com/nobleskye", icon: <Github className="w-5 h-5" /> },
      { platform: "Twitter", url: "https://twitter.com/nobleskye", icon: <Twitter className="w-5 h-5" /> },
      { platform: "Website", url: "https://nobleskye.dev", icon: <Globe className="w-5 h-5" /> }
    ]
  }
};

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center space-x-2 text-blue-500 hover:text-blue-600 transition-colors">
            <Fish className="w-8 h-8" />
            <span className="font-bold text-xl">blahaj.bio</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-100 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="text-gray-600 mb-4 sm:mb-0">
            Made with 💙 by{' '}
            <a 
              href="https://nobleskye.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-colors"
            >
              NobleSkye
            </a>
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/nobleskye/blahaj.bio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://nobleskye.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ProfilePage({ profile }: { profile: Profile }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      <Header />
      <main className="flex-grow p-6 pt-24">
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative h-32 bg-gradient-to-r from-blue-400 to-indigo-500">
            <div className="absolute -bottom-16 left-6">
              <img
                src={profile.pfp}
                alt={profile.displayName}
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover"
              />
            </div>
          </div>
          
          <div className="pt-20 pb-8 px-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profile.displayName}</h1>
                <p className="text-gray-600">@{profile.username}</p>
              </div>
            </div>
            
            <div className="prose prose-blue max-w-none mb-6">
              {profile.bio.split('\n').map((line, i) => (
                <p key={i} className="text-gray-700">{line}</p>
              ))}
            </div>

            <div className="flex space-x-4">
              {profile.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function IndexPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
      <Header />
      <main className="flex-grow p-6 pt-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=400"
              alt="Blåhaj"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mx-auto mb-6"
            />
            <h1 className="text-4xl font-bold text-gray-900 mb-4">blahaj.bio</h1>
            <p className="text-xl text-gray-600 mb-8">Your shark-friendly bio page 🦈</p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Your Profile</h2>
            <p className="text-gray-600 mb-6">
              Get your own profile page at blahaj.bio/@username in minutes!
            </p>
            <a
              href="https://github.com/nobleskye/blahaj.bio/issues/new?template=profile.yml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Create Your Profile
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.values(profiles).map((profile) => (
              <a
                key={profile.username}
                href={`/@${profile.username}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <img
                  src={profile.pfp}
                  alt={profile.displayName}
                  className="w-20 h-20 rounded-full border-2 border-white shadow mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900">{profile.displayName}</h3>
                <p className="text-gray-600">@{profile.username}</p>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const pathname = window.location.pathname;

  // Handle redirection from /username to /@username
  useEffect(() => {
    if (pathname.length > 1 && !pathname.startsWith('/@')) {
      window.location.replace(`/@${pathname.slice(1)}`);
    }
  }, [pathname]);

  // Return early if we're redirecting
  if (pathname.length > 1 && !pathname.startsWith('/@')) {
    return null;
  }

  // Handle normal routing
  if (pathname === '/') {
    return <IndexPage />;
  }

  const username = pathname.slice(2); // Remove '/@' prefix
  const profile = profiles[username];

  if (!profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
        <Header />
        <main className="flex-grow p-6 pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              The profile you're looking for doesn't exist... yet!
            </p>
            <a
              href="/"
              className="text-blue-500 hover:text-blue-600 font-semibold"
            >
              Return Home
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return <ProfilePage profile={profile} />;
}

export default App;