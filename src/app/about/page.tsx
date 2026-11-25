import { Target, Zap, Shield, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            About <span className="text-blue-600">CVNova</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Empowering job seekers to build professional, ATS-friendly resumes with the power of Artificial Intelligence.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            At CVNova, we believe that everyone deserves a fair chance at their dream job. The hiring process is often automated, and many great candidates get filtered out by Applicant Tracking Systems (ATS). Our mission is to level the playing field by providing an intuitive, AI-powered platform that helps you create perfectly optimized resumes in minutes, not hours.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="bg-blue-100 text-blue-600 p-3 rounded-lg h-fit">
              <Zap size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered Writing</h3>
              <p className="text-gray-600 text-sm">Generate professional summaries and bullet points instantly using our advanced AI assistant.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="bg-green-100 text-green-600 p-3 rounded-lg h-fit">
              <Target size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ATS Optimization</h3>
              <p className="text-gray-600 text-sm">Real-time ATS scoring ensures your resume passes automated screening systems.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="bg-purple-100 text-purple-600 p-3 rounded-lg h-fit">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600 text-sm">Your data is encrypted and securely stored. We never sell your personal information.</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex gap-4">
            <div className="bg-orange-100 text-orange-600 p-3 rounded-lg h-fit">
              <Users size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Templates</h3>
              <p className="text-gray-600 text-sm">Choose from a variety of minimalist, modern, and professional resume templates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}