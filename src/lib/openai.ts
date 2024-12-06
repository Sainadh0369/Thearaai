import OpenAI from 'openai';

// Initialize OpenAI client
export const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

// Helper function for job matching
export async function matchJobWithCandidate(jobDescription: string, candidateProfile: any) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI recruitment assistant that analyzes job descriptions and candidate profiles to determine match percentage and provide insights."
        },
        {
          role: "user",
          content: `Job Description: ${jobDescription}\n\nCandidate Profile: ${JSON.stringify(candidateProfile)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error matching job with candidate:', error);
    throw error;
  }
}

// Helper function for generating interview questions
export async function generateInterviewQuestions(jobRole: string, candidateExperience: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI interviewer that generates relevant technical and behavioral questions based on the job role and candidate experience."
        },
        {
          role: "user",
          content: `Generate interview questions for a ${jobRole} position. Candidate experience: ${candidateExperience}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating interview questions:', error);
    throw error;
  }
}

// Helper function for resume analysis
export async function analyzeResume(resumeText: string, jobDescription: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI resume analyzer that provides insights and suggestions for improvement based on the target job description."
        },
        {
          role: "user",
          content: `Resume: ${resumeText}\n\nJob Description: ${jobDescription}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error analyzing resume:', error);
    throw error;
  }
}

// Helper function for generating communication templates
export async function generateCommunicationTemplate(type: string, context: any) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI communication expert that generates professional email templates for recruitment communication."
        },
        {
          role: "user",
          content: `Generate a ${type} email template with the following context: ${JSON.stringify(context)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error generating communication template:', error);
    throw error;
  }
}

// Helper function for skill assessment
export async function assessTechnicalSkills(candidateResponse: string, skillArea: string) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI technical assessor that evaluates candidate responses to technical questions."
        },
        {
          role: "user",
          content: `Evaluate this response for ${skillArea}:\n\n${candidateResponse}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error assessing technical skills:', error);
    throw error;
  }
}

// Helper function for career path recommendations
export async function getCareerRecommendations(profile: any) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI career advisor that provides personalized career path recommendations based on skills, experience, and interests."
        },
        {
          role: "user",
          content: `Provide career recommendations for:\n\n${JSON.stringify(profile)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error getting career recommendations:', error);
    throw error;
  }
}

// Helper function for automated job search
export async function optimizeJobSearch(preferences: any, jobMarketData: any) {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are an AI job search optimizer that provides strategies and recommendations for finding relevant job opportunities."
        },
        {
          role: "user",
          content: `Optimize job search with preferences: ${JSON.stringify(preferences)}\n\nJob market data: ${JSON.stringify(jobMarketData)}`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    return response.choices[0].message.content;
  } catch (error) {
    console.error('Error optimizing job search:', error);
    throw error;
  }
}