export default function Documents() {
  return (
    <section id="documents" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center font-mono">
          {'<'}<span className="text-cyan-500">Documentation</span>{' />'}
        </h2>
        <div className="bg-[#1A1A1A] rounded p-6 border border-gray-800">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-sm font-mono">
            <code className="text-gray-300">
{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CyberSapiensProtocol {
    mapping(address => uint256) public balances;
    
    event Transfer(address indexed from, address indexed to, uint256 value);
    
    function transfer(address to, uint256 amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
        balances[to] += amount;
        emit Transfer(msg.sender, to, amount);
    }

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }
}`}
            </code>
          </pre>
        </div>
      </div>
    </section>
  )
} 