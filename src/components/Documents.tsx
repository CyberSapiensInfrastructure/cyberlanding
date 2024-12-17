"use client";

import React, { useState } from 'react';
import { FiSearch, FiChevronRight } from "react-icons/fi";

interface Document {
  id: number;
  title: string;
  content: string;
  category: string;
  sections: {
    title: string;
    content: string;
    subsections?: {
      title: string;
      content: string;
    }[];
  }[];
}

const DOCUMENTS: Document[] = [
  {
    id: 1,
    title: "Getting Started",
    content: "Complete guide to Cybersapiens Blockchain Infrastructure setup and usage",
    category: "Basics",
    sections: [
      {
        title: "Installation & Setup",
        content: "Learn how to integrate Cybersapiens infrastructure into your gaming project",
        subsections: [
          {
            title: "Prerequisites",
            content: "```bash\n# Required dependencies\nnpm install @cybersapiens/core @cybersapiens/wallet @cybersapiens/carbon\n\n# Optional utilities\nnpm install @cybersapiens/utils @cybersapiens/testing\n```"
          },
          {
            title: "Basic Configuration",
            content: "```typescript\nimport { CyberSapiens, WalletConfig } from '@cybersapiens/core';\n\nconst config: WalletConfig = {\n  chainId: 1337,\n  entryPointAddress: '0x...',\n  paymasterAddress: '0x...',\n};\n\nconst cybersapiens = new CyberSapiens(config);\n```"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Smart Contract Wallet",
    content: "Cybersapiens Smart Contract Wallet (CSCW) ile kullanıcı katılımını en verimli hale getirmiştir. Oyuncular oyun oynarken Blockchain'e gönderilecek olan Transaction'lar için hiçbir oyun içi kesintiyle karşılaşmazlar.",
    category: "Infrastructure",
    sections: [
      {
        title: "Game Name Service (GNS)",
        content: "Oyuncular, oyuna kayıt olurken Smart Contract Wallet adresleriyle birlikte On-Chain bir kullanıcı ismi alırlar. Kullanıcı isimleri Blockchain üzerine GNS Sözleşmesi ile kaydedilir ve GNS adının sahipliği o kullanıcıya aittir ve değiştirilemezdir."
      },
      {
        title: "Multi Signature",
        content: "Oyuncular Çoklu İmzalama desteğini kullanabilmektedir. Her oyuncu farklı kurallarla Çoklu İmzalama işlemi yapabilir. Oyuncular isterlerse işlemler için imza yetkilerini farklı GNS sahiplerine verebilirler."
      },
      {
        title: "Wallet Recovery",
        content: "Oyuncular Çoklu İmza yapısında olduğu gibi SCW kurtarma işlemleri için farklı Wallet adreslerini (Guardian) tanımlayabilirler. Bu sayede herhangi bir güvenlik sorununda Guardian adresi tarafından Wallet'in gerçek sahibine geri verilmesi sağlanır."
      }
    ]
  },
  {
    id: 3,
    title: "Nested Asset Structure",
    content: "Carbon'lar oyunlar içerisinde kullanılan ve oyuncu varlıklarının yönetilmesini sağlayan bir mimaridir. Oyun içerisinde ki Resource, Item ve Blueprint'ler bu mimari ile oluşturulmaktadır.",
    category: "Infrastructure",
    sections: [
      {
        title: "Resource Management",
        content: "Resource'lar Fungible Token'lardır ve yapıları aynıdır. Fakat Item ve Blueprint'ler Semi Non-Fungible Token'lardır. İlk üretildiklerinde özellikleri aynı olsa da Sub ID'lerle birbirinden ayrılmaktadır."
      },
      {
        title: "Crafting System",
        content: "Oyun içerisinde ki Crafting işlemleri On-Chain olarak yapılmaktadır. Oyuncunun sahip olduğu Blueprint'ler hangi Item'ları üretebileceklerini ve ne kadar Resource'a sahip olduklarında Crafting işlemini başlatabileceklerini tanımlayan Semi-Fungible Token'lardır."
      }
    ]
  }
];

const CodeBlock = ({ content }: { content: string }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(content.replace(/```\w*\n/, '').replace(/```$/, ''));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
        <div className="flex items-center justify-between mb-2">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <button
            onClick={copyToClipboard}
            className="text-gray-400 hover:text-gray-300 text-sm"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="text-gray-300 overflow-x-auto">
          {content.replace(/```\w*\n/, '').replace(/```$/, '')}
        </pre>
      </div>
    </div>
  );
};

const Documents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const filteredDocs = DOCUMENTS.filter(doc => 
    doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    doc.sections.some(section => 
      section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      section.content.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <section id="documents" className="py-20 bg-transparent font-poppins">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          {'<'}<span className="text-cyan-500">Documents</span>{' />'}
        </h2>

        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search documents..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-800 rounded-lg px-4 py-2 pl-10 text-gray-200 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sol taraf - Döküman listesi */}
          <div className="md:col-span-1 bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-4 text-gray-200">Documents</h3>
            <div className="space-y-2">
              {filteredDocs.map(doc => (
                <div key={doc.id}>
                  <button
                    onClick={() => {
                      setSelectedDoc(doc);
                      setSelectedSection(null);
                    }}
                    className={`w-full text-left px-3 py-2 rounded flex items-center justify-between ${
                      selectedDoc?.id === doc.id 
                        ? 'bg-cyan-500 text-black' 
                        : 'hover:bg-gray-700 text-gray-300'
                    }`}
                  >
                    <span>{doc.title}</span>
                    <FiChevronRight />
                  </button>
                  
                  {selectedDoc?.id === doc.id && (
                    <div className="ml-4 mt-2 space-y-1">
                      {doc.sections.map(section => (
                        <button
                          key={section.title}
                          onClick={() => setSelectedSection(section.title)}
                          className={`w-full text-left px-3 py-1 rounded text-sm ${
                            selectedSection === section.title
                              ? 'text-cyan-400'
                              : 'text-gray-400 hover:text-gray-300'
                          }`}
                        >
                          {section.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sağ taraf - Seçili döküman içeriği */}
          <div className="md:col-span-3 bg-gray-800 rounded-lg p-6">
            {selectedDoc ? (
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-gray-200">
                    {selectedDoc.title}
                  </h3>
                  <div className="text-gray-400 mb-4">
                    Category: <span className="text-cyan-500">{selectedDoc.category}</span>
                  </div>
                  <p className="text-gray-300 mb-8">{selectedDoc.content}</p>
                </div>

                {selectedDoc.sections.map(section => (
                  <div 
                    key={section.title}
                    id={section.title}
                    className={`pb-6 border-b border-gray-700 ${
                      selectedSection === section.title ? 'scroll-mt-6' : ''
                    }`}
                  >
                    <h4 className="text-xl font-semibold mb-3 text-gray-200">
                      {section.title}
                    </h4>
                    <p className="text-gray-300 mb-4">{section.content}</p>
                    
                    {section.subsections?.map(subsection => (
                      <div key={subsection.title} className="ml-4 mb-4">
                        <h5 className="text-lg font-semibold mb-2 text-gray-300">
                          {subsection.title}
                        </h5>
                        {subsection.content.startsWith('```') ? (
                          <CodeBlock content={subsection.content} />
                        ) : (
                          <p className="text-gray-400 whitespace-pre-line">
                            {subsection.content}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-400 py-12">
                Select a document to view its content
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Documents; 