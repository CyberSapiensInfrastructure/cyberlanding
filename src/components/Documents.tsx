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
    content: "Comprehensive guide to Cybersapiens Smart Contract Wallet (CSCW) infrastructure",
    category: "Infrastructure",
    sections: [
      {
        title: "Overview",
        content: "Cybersapiens Smart Contract Wallet (CSCW) provides seamless user onboarding for blockchain-integrated games. Players experience uninterrupted gameplay without blockchain transaction confirmations.",
        subsections: [
          {
            title: "In-Game Wallet Structure",
            content: "Every blockchain-verified asset appears in the player's wallet (inventory). Players can perform:\n- On-Chain Crafting (combining resources and blueprints - true Nested NFTs)\n- Refining (converting resources to different properties)\n- Marketplace trading"
          },
          {
            title: "Technical Architecture",
            content: "CSCW utilizes ERC4337 (Account Abstraction) architecture. Key components:\n- Custom Account Abstraction for each player\n- Smart Contract Wallet deployment on blockchain\n- Complete asset ownership verification"
          }
        ]
      },
      {
        title: "Core Features",
        content: "The infrastructure includes EntryPoint and Paymaster contracts with flexible fee handling options.",
        subsections: [
          {
            title: "Game Name Service (GNS)",
            content: "```solidity\ncontract GameNameService {\n    mapping(string => address) private nameToWallet;\n    mapping(address => string) private walletToName;\n    \n    function registerName(string memory name) external {\n        require(nameToWallet[name] == address(0), \"Name taken\");\n        nameToWallet[name] = msg.sender;\n        walletToName[msg.sender] = name;\n    }\n}\n```\n\nGNS provides on-chain username registration linked to SCW addresses."
          },
          {
            title: "Multi-Signature Support",
            content: "Example multi-sig configuration:\n```typescript\ninterface MultiSigRule {\n  threshold: number;     // Amount threshold\n  requiredSignatures: number;  // Required signatures\n  guardians: string[];   // Authorized signers\n}\n\nconst rules: MultiSigRule[] = [\n  { threshold: 10, requiredSignatures: 1, guardians: [ownerAddress] },\n  { threshold: 100, requiredSignatures: 2, guardians: [ownerAddress, guardianAddress] },\n  { threshold: 1000, requiredSignatures: 3, guardians: [ownerAddress, guardian1, guardian2] }\n];\n```"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Nested Asset Structure (Carbon)",
    content: "Learn about Cybersapiens' innovative Nested Asset Structure for managing in-game assets",
    category: "Assets",
    sections: [
      {
        title: "Carbon Architecture",
        content: "Carbon is a comprehensive asset management system for handling game assets (mint, claim, combine, separate, transfer, metadata attributes, historical data).",
        subsections: [
          {
            title: "Asset Types",
            content: "- Resources: Fungible Tokens\n- Items: Semi Non-Fungible Tokens\n- Blueprints: Semi Non-Fungible Tokens with crafting rules"
          },
          {
            title: "Metadata Management",
            content: "Example of on-chain metadata structure:\n```solidity\ncontract CarbonMetadata {\n    struct ItemMetadata {\n        uint256 tokenId;\n        uint256 subId;\n        string name;\n        uint256 level;\n        string[] attributes;\n        string[] historicalData;\n    }\n    \n    mapping(uint256 => ItemMetadata) private itemMetadata;\n    \n    function getMetadataAsJSON(uint256 tokenId) \n        external \n        view \n        returns (string memory) \n    {\n        ItemMetadata memory metadata = itemMetadata[tokenId];\n        return generateJSONFormat(metadata);\n    }\n}\n```"
          }
        ]
      },
      {
        title: "Crafting System",
        content: "On-chain crafting system for combining resources using blueprints",
        subsections: [
          {
            title: "Blueprint Implementation",
            content: "```solidity\ncontract CraftingSystem {\n    function craft(\n        uint256 blueprintId,\n        uint256[] memory resourceIds,\n        uint256[] memory amounts\n    ) external returns (uint256 newItemId) {\n        // Verify blueprint ownership\n        require(ownerOf(blueprintId) == msg.sender, \"Not owner\");\n        \n        // Verify and burn resources\n        for(uint i = 0; i < resourceIds.length; i++) {\n            burnResource(msg.sender, resourceIds[i], amounts[i]);\n        }\n        \n        // Burn blueprint\n        _burn(blueprintId);\n        \n        // Mint new item\n        return _mintItem(msg.sender);\n    }\n}\n```"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Technical Infrastructure",
    content: "Detailed technical overview of Cybersapiens infrastructure",
    category: "Technical",
    sections: [
      {
        title: "Mempool Architecture",
        content: "The infrastructure uses a custom mempool with horizontally scalable sequencers",
        subsections: [
          {
            title: "Sequencer Implementation",
            content: "Example sequencer processing:\n```typescript\ninterface UserOperation {\n  sender: string;\n  nonce: number;\n  callData: string;\n  signature: string;\n}\n\nclass Sequencer {\n  async processTransaction(tx: Transaction): Promise<void> {\n    // Convert to UserOp\n    const userOp = this.createUserOp(tx);\n    \n    // Simulate via EntryPoint\n    await this.simulateViaEntryPoint(userOp);\n    \n    // Handle sponsorship via Paymaster\n    await this.handleSponsorship(userOp);\n    \n    // Submit to blockchain\n    await this.submitToChain(userOp);\n  }\n}\n```"
          }
        ]
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
    <section id="documents" className="py-20">
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