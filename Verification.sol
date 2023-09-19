// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract YourContract {
    mapping(bytes32 => bool) private certificates;

    // Function to add a certificate hash to the mapping
    function addCertificate(bytes32 certificateHash) public {
        certificates[certificateHash] = true;
    }

    // Function to check if a certificate hash exists in the mapping
    function certificateExists(bytes32 certificateHash) public view returns (bool) {
        return certificates[certificateHash];
    }
}
