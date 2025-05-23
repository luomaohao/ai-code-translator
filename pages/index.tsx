import React, { useState } from 'react';
import TabList from '../components/TabList';
import Switch from '../components/Switch';
import { GridIcon, ListIcon, StarIcon, SendIcon, PlusIcon } from '../components/Icons'

 
export default function Home() {
  const [mainActiveTab, setMainActiveTab] = useState('grid');
  const [stashActiveTab, setStashActiveTab] = useState('about');
  const [aiActionsEnabled, setAiActionsEnabled] = useState(false);
  const [message, setMessage] = useState('');

  const mainTabs = [
    { id: 'grid', label: '', icon: <GridIcon /> },
    { id: 'list', label: '', icon: <ListIcon className="text-gray-600" /> },
  ];

  const stashTabs = [
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Features' },
    { id: 'security', label: 'Security' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-black">Agents</h1>
        <TabList
          tabs={mainTabs}
          activeTab={mainActiveTab}
          onTabChange={setMainActiveTab}
          className="w-25"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-col h-[calc(100vh-65px)]">
        {/* Top Section - Cult Prompt Stash */}
        <div className="flex-none p-12">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold bg-gradient-to-b from-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              Cult Prompt Stash
            </h2>
            
            <TabList
              tabs={stashTabs}
              activeTab={stashActiveTab}
              onTabChange={setStashActiveTab}
              className="mb-8 max-w-md"
            />
            
            <div className="text-gray-700 leading-relaxed">
              Prompt Stash is a local-first template built for storing and crafting prompts. Inspired<br />
              by the anthropic prompt eval tool.
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 opacity-50" />

        {/* Bottom Section - Prompt Agent & Chat */}
        <div className="flex-1 bg-white p-4">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full max-w-4xl mx-auto">
            {/* Agent Icon and Header */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 bg-gray-100 rounded-full flex items-center justify-center mr-6">
                <StarIcon className="text-gray-700" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-black mb-2">Prompt Agent</h2>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-black">Enable AI Actions</span>
                  <Switch
                    checked={aiActionsEnabled}
                    onChange={setAiActionsEnabled}
                  />
                </div>
              </div>
            </div>

            {/* Agent Tools Fieldset */}
            <div className="mb-8">
              <fieldset className="border border-gray-300 rounded-lg p-4 relative">
                <legend className="px-2 text-sm font-medium text-black bg-white">
                  Enabled Agent Tools
                </legend>
                <p className="text-sm text-black mt-2">
                  Use @ to select ai actions (all are on by default)
                </p>
              </fieldset>
            </div>

            {/* Chat Interface */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-end space-x-3">
                {/* Message Input */}
                <div className="flex-1 relative">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Send a message."
                    className="w-full h-24 p-4 text-sm border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col space-y-2">
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <SendIcon className="w-4 h-4 text-black" />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
                    <PlusIcon className="w-4 h-4 text-black" />
                  </button>
                </div>

                {/* Send Button */}
                <button
                  className={`px-6 py-2 bg-gray-100 text-black rounded-lg font-medium transition-all hover:bg-gray-200 ${
                    !message.trim() ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  disabled={!message.trim()}
                >
                  <SendIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
