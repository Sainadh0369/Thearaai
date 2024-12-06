import { nlpProcessor } from './nlpProcessor';
import { delay } from '../utils';

interface ExtractedContent {
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
  qualifications: string[];
  benefits: string[];
  metadata: Record<string, any>;
}

class ContentExtractor {
  private readonly CONTENT_PATTERNS = {
    requirements: /requirements|qualifications|what you'll need/i,
    benefits: /benefits|perks|what we offer/i,
    experience: /experience|years|background/i
  };

  public async extractJobContent(html: string): Promise<ExtractedContent> {
    try {
      // Simulate content extraction
      await delay(500);

      const rawContent = this.parseHTML(html);
      const structuredContent = await this.structureContent(rawContent);
      const enrichedContent = await this.enrichContent(structuredContent);

      return enrichedContent;
    } catch (error) {
      console.error('Error extracting job content:', error);
      throw error;
    }
  }

  private parseHTML(html: string): Record<string, string> {
    // Simulate HTML parsing
    return {
      title: 'Senior Frontend Developer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA',
      description: 'We are looking for an experienced frontend developer...',
      rawText: 'Full job posting content...'
    };
  }

  private async structureContent(
    rawContent: Record<string, string>
  ): Promise<ExtractedContent> {
    const sections = this.identifySections(rawContent.rawText);
    const requirements = this.extractList(sections.requirements);
    const qualifications = this.extractList(sections.qualifications);
    const benefits = this.extractList(sections.benefits);

    return {
      title: rawContent.title,
      company: rawContent.company,
      location: rawContent.location,
      description: sections.description,
      requirements,
      qualifications,
      benefits,
      metadata: {}
    };
  }

  private identifySections(text: string): Record<string, string> {
    // Simulate section identification
    return {
      description: 'Main job description...',
      requirements: '• React\n• TypeScript\n• Node.js',
      qualifications: '• 5+ years experience\n• Bachelor\'s degree',
      benefits: '• Competitive salary\n• Remote work'
    };
  }

  private extractList(text: string): string[] {
    return text
      .split('\n')
      .map(item => item.replace(/^[•\-\*]\s*/, '').trim())
      .filter(Boolean);
  }

  private async enrichContent(
    content: ExtractedContent
  ): Promise<ExtractedContent> {
    // Process with NLP
    const description = await nlpProcessor.processText(content.description);
    
    // Add metadata
    content.metadata = {
      keywords: description.keywords,
      entities: description.entities,
      sentiment: description.sentiment,
      experienceLevel: this.detectExperienceLevel(content),
      employmentType: this.detectEmploymentType(content),
      remote: this.detectRemoteWork(content)
    };

    return content;
  }

  private detectExperienceLevel(content: ExtractedContent): string {
    const text = content.description.toLowerCase();
    if (text.includes('senior') || text.includes('lead')) return 'senior';
    if (text.includes('mid') || text.includes('intermediate')) return 'mid';
    return 'entry';
  }

  private detectEmploymentType(content: ExtractedContent): string {
    const text = content.description.toLowerCase();
    if (text.includes('full-time')) return 'full-time';
    if (text.includes('part-time')) return 'part-time';
    if (text.includes('contract')) return 'contract';
    return 'full-time';
  }

  private detectRemoteWork(content: ExtractedContent): boolean {
    const text = content.description.toLowerCase();
    return text.includes('remote') || text.includes('work from home');
  }
}

export const contentExtractor = new ContentExtractor();