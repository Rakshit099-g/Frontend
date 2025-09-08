import React, { useState, useEffect } from 'react';
import { Search, Clock, ExternalLink, Save, History, FileText, User, LogOut, Sparkles, Star } from 'lucide-react';

const Content = ({ userId = "user123" }) => {
  const [userName, setUserName] = useState("Alex Johnson");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentSearch, setCurrentSearch] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // Mock data for demonstration
  const mockSearchResults = {
    "react hooks": {
      topic: "React Hooks",
      summary: "React Hooks are functions that let you use state and other React features in functional components. They were introduced in React 16.8 and provide a more direct API to React concepts.",
      links: [
        { title: "Official React Hooks Documentation", url: "https://react.dev/reference/react" },
        { title: "useEffect Complete Guide", url: "https://overreacted.io/a-complete-guide-to-useeffect/" },
        { title: "Custom Hooks Tutorial", url: "https://react.dev/learn/reusing-logic-with-custom-hooks" }
      ]
    },
    "machine learning": {
      topic: "Machine Learning",
      summary: "Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every task.",
      links: [
        { title: "Machine Learning Crash Course by Google", url: "https://developers.google.com/machine-learning/crash-course" },
        { title: "Scikit-learn Documentation", url: "https://scikit-learn.org/stable/" },
        { title: "Deep Learning with Python", url: "https://www.manning.com/books/deep-learning-with-python" }
      ]
    },
    "javascript": {
      topic: "JavaScript",
      summary: "JavaScript is a high-level, dynamic programming language primarily used for web development. It enables interactive web pages and is an essential part of web applications.",
      links: [
        { title: "MDN JavaScript Guide", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" },
        { title: "JavaScript.info Tutorial", url: "https://javascript.info/" },
        { title: "Eloquent JavaScript Book", url: "https://eloquentjavascript.net/" }
      ]
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setUserName("Alex Johnson");
    }, 500);
  }, [userId]);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    setIsSearching(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    const searchKey = Object.keys(mockSearchResults).find(key => 
      searchTerm.toLowerCase().includes(key.toLowerCase())
    );

    const result = searchKey ? mockSearchResults[searchKey] : {
      topic: searchTerm,
      summary: `Search results for "${searchTerm}". This is a mock response showing how the interface would display search results with relevant information and links.`,
      links: [
        { title: "Related Article 1", url: "#" },
        { title: "Documentation", url: "#" },
        { title: "Tutorial Guide", url: "#" }
      ]
    };

    setCurrentSearch({ ...result, query: searchTerm, timestamp: new Date() });
    setSearchTerm("");
    setIsSearching(false);
  };


  const handleSavePDF = () => {
    if (!currentSearch) return;

    const pdfContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <title>Search Results - ${currentSearch.topic}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 40px; line-height: 1.8; color: #f0f0f0; background-color: #1f2937; }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 3px solid #e91e63; padding-bottom: 20px; }
          .topic { color: #e91e63; font-size: 28px; font-weight: bold; margin-bottom: 10px; }
          .timestamp { color: #ccc; font-size: 14px; }
          .summary { margin: 30px 0; padding: 25px; background: #374151; border-left: 5px solid #e91e63; border-radius: 8px; color: #f0f0f0; }
          .links { margin-top: 30px; }
          .links h3 { color: #f0f0f0; margin-bottom: 20px; font-size: 20px; }
          .link-item { margin: 15px 0; padding: 15px; border: 2px solid #4b5563; border-radius: 8px; background: #374151; color: #f0f0f0; }
          .link-title { color: #e91e63; font-weight: bold; font-size: 16px; }
          .footer { margin-top: 50px; text-align: center; color: #ccc; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1 class="topic">${currentSearch.topic}</h1>
          <p class="timestamp">Generated on: ${new Date().toLocaleString()}</p>
          <p class="timestamp">Original search: ${currentSearch.timestamp.toLocaleString()}</p>
        </div>
        <div class="summary">
          <h3>Summary</h3>
          <p>${currentSearch.summary}</p>
        </div>
        <div class="links">
          <h3>Related Resources</h3>
          ${currentSearch.links.map(link => `
            <div class="link-item">
              <div class="link-title">${link.title}</div>
              <div style="color: #ccc; font-size: 14px; margin-top: 5px;">${link.url}</div>
            </div>
          `).join('')}
        </div>
        <div class="footer">
          <p>Generated by SearchHub - Your Knowledge Companion</p>
        </div>
      </body>
      </html>
    `;

    const blob = new Blob([pdfContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `search-results-${currentSearch.topic.replace(/\s+/g, '-').toLowerCase()}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadHistoryItem = (item) => {
    setCurrentSearch(item);
    setSearchTerm(item.query);
    setShowHistory(false);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    setShowHistory(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-48 h-48 bg-white/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-32 left-48 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-20 w-36 h-36 bg-white/12 rounded-full blur-xl animate-pulse delay-500"></div>
        {/* Animated Stars */}
        <div className="absolute inset-0">
          <Star className="absolute top-1/4 left-1/4 w-4 h-4 text-white/40 animate-pulse" />
          <Star className="absolute top-1/3 right-1/4 w-3 h-3 text-white/30 animate-pulse delay-700" />
          <Star className="absolute bottom-1/3 left-1/3 w-2 h-2 text-white/50 animate-pulse delay-1500" />
          <Sparkles className="absolute top-1/2 right-1/3 w-5 h-5 text-white/40 animate-pulse delay-300" />
        </div>
      </div>

      {/* Enhanced Header */}
      <nav className="relative z-10 bg-white/10 backdrop-blur-md border-b border-white/20 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/20 backdrop-blur-sm rounded-xl">
              <Search className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">AI Research Agent</h1>
              <p className="text-white/80 text-sm">Knowledge at your fingertips</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 bg-white/15 rounded-full px-4 py-2 backdrop-blur-sm">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-medium hidden sm:block">{userName}</span>
            </div>
            <button className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors">
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className={`relative z-10 flex flex-col ${currentSearch ? 'pt-20' : 'justify-center min-h-[calc(100vh-80px)]'} transition-all duration-700`}>
        <div className="max-w-6xl mx-auto px-6 w-full">

          {/* Welcome Message */}
          {!currentSearch && (
            <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Welcome, <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">{userName}</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Discover knowledge, explore ideas, and find answers to your questions with our intelligent search platform
              </p>
              <div className="flex items-center justify-center space-x-2 text-white/80">
                <Sparkles className="w-5 h-5" />
                <span className="text-sm">Powered by AI • Instant Results • Save & Share</span>
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          )}

          {/* Search Results Card */}
          {currentSearch && (
            <div className="mb-12 animate-in slide-in-from-top-4 duration-700">
              <div className="bg-gray-900/90 rounded-2xl shadow-2xl border border-gray-700 p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {currentSearch.topic}
                  </h2>
                  <span className="text-sm text-gray-400 flex items-center bg-gray-800 px-3 py-1 rounded-full">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentSearch.timestamp.toLocaleTimeString()}
                  </span>
                </div>

                <div className="bg-gray-800/80 rounded-xl p-6 mb-6">
                  <p className="text-gray-100 leading-relaxed text-lg">
                    {currentSearch.summary}
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-100 text-xl mb-4 flex items-center">
                    <ExternalLink className="w-5 h-5 mr-2 text-purple-400" />
                    Related Resources
                  </h3>
                  <div className="grid gap-3">
                    {currentSearch.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 border border-gray-700 hover:border-purple-400 transition-all group shadow-sm hover:shadow-md"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                          <ExternalLink className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <span className="text-gray-100 font-medium group-hover:text-purple-400 transition-colors">
                            {link.title}
                          </span>
                          <p className="text-gray-400 text-sm truncate">{link.url}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 text-center space-x-4">
            
                
                <button
                  onClick={handleSavePDF}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white rounded-xl hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Save as PDF
                </button>
              </div>
            </div>
          )}

          {/* Enhanced Search Input */}
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center bg-gray-800 rounded-3xl px-4 py-4 shadow-lg">
              <Search className="w-6 h-6 text-gray-400 mr-4" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="What would you like to explore today?"
                className="w-full bg-transparent text-gray-100 placeholder-gray-400 outline-none text-lg"
                disabled={isSearching}
              />
              <button
                onClick={handleSearch}
                disabled={isSearching || !searchTerm.trim()}
                className="ml-4 px-6 py-2 bg-gray-700 hover:bg-gray-600 rounded-2xl text-white shadow-md disabled:bg-gray-500 transition-all"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  "Search"
                )}
              </button>
            </div>

            {/* History Button */}
            {searchHistory.length > 0 && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setShowHistory(!showHistory)}
                  className="inline-flex items-center px-6 py-3 bg-white/20 backdrop-blur-sm text-white border border-white/30 rounded-xl hover:bg-white/30 transition-all"
                >
                  <History className="w-4 h-4 mr-2" />
                  Search History ({searchHistory.length})
                </button>
              </div>
            )}
          </div>

          {/* Enhanced Search History */}
          {showHistory && (
            <div className="mt-8 max-w-5xl mx-auto bg-gray-900/90 rounded-2xl shadow-2xl border border-gray-700 max-h-96 overflow-hidden animate-in slide-in-from-top-2 duration-500">
              <div className="p-6 border-b border-gray-700 flex justify-between items-center bg-gray-800">
                <h3 className="font-bold text-gray-100 text-xl">Search History</h3>
                <button
                  onClick={clearHistory}
                  className="text-sm text-red-600 hover:text-red-800 transition-colors font-medium"
                >
                  Clear All
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto">
                {searchHistory.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => loadHistoryItem(item)}
                    className="w-full text-left p-6 hover:bg-gray-800 border-b border-gray-700 last:border-b-0 transition-all group"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-semibold text-gray-100 group-hover:text-purple-400 transition-colors">
                          {item.topic}
                        </p>
                        <p className="text-gray-400 text-sm mt-1 line-clamp-2">
                          {item.summary.substring(0, 100)}...
                        </p>
                      </div>
                      <span className="text-xs text-gray-400 ml-4 bg-gray-800 px-2 py-1 rounded-full">
                        {item.savedAt.toLocaleDateString()}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Loading Overlay */}
      {isSearching && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl max-w-sm w-full mx-4">
            <div className="flex items-center justify-center space-x-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
              <div className="text-center">
                <p className="text-gray-100 font-medium">Searching for results...</p>
                <p className="text-sm text-gray-400 mt-1">This may take a few moments</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
