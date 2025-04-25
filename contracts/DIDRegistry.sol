// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DIDRegistry {
    mapping(address => string) public didRegistry;

    function registerDID(string memory did) public {
        didRegistry[msg.sender] = did;
    }

    function getDID(address user) public view returns (string memory) {
        return didRegistry[user];
    }
}
