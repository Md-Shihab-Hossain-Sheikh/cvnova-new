import { User, Bell, Shield, CreditCard } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Account Settings</h1>
        <p className="text-gray-500">Manage your profile and account preferences.</p>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 bg-gray-50 overflow-x-auto">
          <button className="flex items-center gap-2 px-6 py-4 border-b-2 border-blue-600 text-blue-600 font-medium whitespace-nowrap bg-white">
            <User size={18} /> Profile
          </button>
          <button className="flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-gray-900 font-medium whitespace-nowrap">
            <Bell size={18} /> Notifications
          </button>
          <button className="flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-gray-900 font-medium whitespace-nowrap">
            <Shield size={18} /> Security
          </button>
          <button className="flex items-center gap-2 px-6 py-4 text-gray-500 hover:text-gray-900 font-medium whitespace-nowrap">
            <CreditCard size={18} /> Billing
          </button>
        </div>

        {/* Profile Form Content */}
        <div className="p-6 space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold">
              U
            </div>
            <div>
              <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium mb-2">
                Change Avatar
              </button>
              <p className="text-xs text-gray-500">JPG, GIF or PNG. Max size of 800K</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input type="email" defaultValue="john@example.com" disabled className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg text-gray-500 outline-none" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              <textarea rows={3} placeholder="Tell us a little about yourself..." className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"></textarea>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex justify-end">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}