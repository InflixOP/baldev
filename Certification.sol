// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

contract CertificateVerifier {
    mapping(uint256 => bool) public certificateExists;

    event CertificateVerified(address indexed verifier, uint256 certificateHash);

    function verifyCertificate(uint256 certificateHash) public {
        require(!certificateExists[certificateHash], "Certificate already verified");
        certificateExists[certificateHash] = true;
        emit CertificateVerified(msg.sender, certificateHash);
    }
}
