import Link from "next/link";
import { Plus, FileText, MoreVertical, Download, Edit } from "lucide-react";

export default function MyResumesPage() {
  // ডামি ডাটা (পরে এখানে Supabase থেকে ডাটা আসবে)
  const resumes = [
    { id: 1, title: "Software Engineer Resume", updatedAt: "2 hours ago", atsScore: 85 },
    { id: 2, title: "Frontend Developer CV", updatedAt: "Yesterday", atsScore: 92 },
    { id: 3, title: "Product Manager Resume", updatedAt: "3 days ago", atsScore: 78 },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Resumes</h1>
          <p className="text-gray-500">Manage and edit your saved resumes.</p>
        </div>
        <Link 
          href="/dashboard/resumes/new" 
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={20} />
          Create New
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumes.map((resume) => (
          <div key={resume.id} className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                <FileText size={24} />
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreVertical size={20} />
              </button>
            </div>
            
            <h3 className="font-semibold text-lg text-gray-900 mb-1">{resume.title}</h3>
            <p className="text-sm text-gray-500 mb-4">Last edited: {resume.updatedAt}</p>
            
            <div className="mt-auto">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">ATS Score</span>
                <span className={`text-sm font-bold ${resume.atsScore >= 80 ? 'text-green-600' : 'text-orange-500'}`}>
                  {resume.atsScore}/100
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className={`h-2 rounded-full ${resume.atsScore >= 80 ? 'bg-green-500' : 'bg-orange-500'}`} 
                  style={{ width: `${resume.atsScore}%` }}
                ></div>
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 rounded-lg text-sm font-medium">
                  <Edit size={16} /> Edit
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white py-2 rounded-lg text-sm font-medium">
                  <Download size={16} /> PDF
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}