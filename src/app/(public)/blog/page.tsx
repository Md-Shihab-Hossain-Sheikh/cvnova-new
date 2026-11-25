import Link from "next/link";

export default function BlogPage() {
  const posts = [
    { id: 1, title: "5 Tips to Beat the ATS in 2024", excerpt: "Learn how to optimize your resume to pass automated tracking systems and get noticed by recruiters.", date: "Oct 12, 2024" },
    { id: 2, title: "How AI is Changing the Job Market", excerpt: "Discover how artificial intelligence is reshaping resume writing and the recruitment process.", date: "Oct 05, 2024" },
    { id: 3, title: "The Ultimate Resume Format Guide", excerpt: "A comprehensive guide on choosing the right format for your resume, whether chronological or functional.", date: "Sep 28, 2024" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">CVNova Blog</h1>
      <p className="text-lg text-gray-600 text-center mb-12">Insights, tips, and news for job seekers.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600"></div>
            <div className="p-6 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
              <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
              <Link href="#" className="text-blue-600 font-medium hover:underline mt-auto">
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}