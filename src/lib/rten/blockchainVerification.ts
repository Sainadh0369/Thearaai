import Web3 from 'web3';
import { WorkExperience, Certification } from '../types/rten';

class BlockchainVerification {
  private web3;
  private contract;

  constructor() {
    this.web3 = new Web3(import.meta.env.VITE_BLOCKCHAIN_PROVIDER);
    // Initialize smart contract
    this.contract = new this.web3.eth.Contract(
      JSON.parse(import.meta.env.VITE_CONTRACT_ABI),
      import.meta.env.VITE_CONTRACT_ADDRESS
    );
  }

  public async verifyWorkExperience(experience: WorkExperience) {
    try {
      const hash = await this.contract.methods.verifyExperience({
        company: experience.company,
        role: experience.role,
        startDate: experience.startDate,
        endDate: experience.endDate
      }).call();

      return {
        ...experience,
        verified: true,
        blockchainRef: hash
      };
    } catch (error) {
      console.error('Error verifying work experience:', error);
      throw error;
    }
  }

  public async verifyCertification(certification: Certification) {
    try {
      const hash = await this.contract.methods.verifyCertification({
        name: certification.name,
        issuer: certification.issuer,
        date: certification.date,
        expiryDate: certification.expiryDate
      }).call();

      return {
        ...certification,
        verified: true,
        blockchainRef: hash
      };
    } catch (error) {
      console.error('Error verifying certification:', error);
      throw error;
    }
  }

  public async getVerificationHistory(userId: string) {
    try {
      const history = await this.contract.methods.getVerificationHistory(userId).call();
      return history;
    } catch (error) {
      console.error('Error fetching verification history:', error);
      throw error;
    }
  }
}

export const blockchainVerification = new BlockchainVerification();