import Groq from 'groq-sdk';
import dotenv from 'dotenv';

dotenv.config();

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

const MODEL = process.env.GROQ_MODEL || 'mixtral-8x7b-32768';

/**
 * AI Service for code completion, chat, and analysis
 */
class AIService {
  /**
   * Get code completion suggestions
   * @param {string} code - Current code context
   * @param {string} language - Programming language
   * @param {number} cursorPosition - Current cursor position
   */
  async getCompletion(code, language, cursorPosition) {
    try {
      const prompt = `You are an expert code completion assistant. Given the following ${language} code, suggest the next line or completion:

\`\`\`${language}
${code}
\`\`\`

Cursor position: ${cursorPosition}

Provide only the code completion, no explanations. Be concise and relevant.`;

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a code completion assistant. Provide only code suggestions, no explanations.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        model: MODEL,
        temperature: 0.3,
        max_tokens: 150
      });

      return {
        suggestion: completion.choices[0]?.message?.content || '',
        success: true
      };
    } catch (error) {
      console.error('AI completion error:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Chat with AI about code
   * @param {Array} messages - Chat history
   * @param {Object} projectContext - Project file structure and content
   */
  async chat(messages, projectContext = {}) {
    try {
      const systemPrompt = `You are an expert programming assistant integrated into a cloud IDE. You have access to the user's project structure and can help with:
- Code explanations and debugging
- Suggesting improvements and best practices
- Writing new code and features
- Refactoring existing code
- Answering programming questions

${projectContext.files ? `Current project files:\n${JSON.stringify(projectContext.files, null, 2)}` : ''}

Be concise, helpful, and provide code examples when relevant.`;

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          ...messages
        ],
        model: MODEL,
        temperature: 0.7,
        max_tokens: 2000
      });

      return {
        response: completion.choices[0]?.message?.content || '',
        success: true
      };
    } catch (error) {
      console.error('AI chat error:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Analyze and refactor code
   * @param {string} code - Code to analyze
   * @param {string} language - Programming language
   * @param {string} action - Action to perform (fix, explain, optimize)
   */
  async refactor(code, language, action) {
    try {
      let prompt;
      
      switch (action) {
        case 'fix':
          prompt = `Analyze this ${language} code and fix any bugs or issues:\n\`\`\`${language}\n${code}\n\`\`\`\n\nProvide the fixed code with comments explaining the changes.`;
          break;
        case 'explain':
          prompt = `Explain this ${language} code in detail:\n\`\`\`${language}\n${code}\n\`\`\`\n\nProvide a clear explanation of what the code does.`;
          break;
        case 'optimize':
          prompt = `Optimize this ${language} code for better performance and readability:\n\`\`\`${language}\n${code}\n\`\`\`\n\nProvide the optimized code with explanations.`;
          break;
        default:
          prompt = `Analyze this ${language} code:\n\`\`\`${language}\n${code}\n\`\`\``;
      }

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are an expert code analyzer and refactoring assistant.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        model: MODEL,
        temperature: 0.5,
        max_tokens: 2000
      });

      return {
        result: completion.choices[0]?.message?.content || '',
        success: true
      };
    } catch (error) {
      console.error('AI refactor error:', error);
      return { success: false, error: error.message };
    }
  }

  /**
   * Analyze entire project structure
   * @param {Object} projectFiles - Project file tree with content
   */
  async analyzeProject(projectFiles) {
    try {
      const prompt = `Analyze this project structure and provide insights:

${JSON.stringify(projectFiles, null, 2)}

Provide:
1. Overview of the project architecture
2. Potential issues or improvements
3. Best practices recommendations
4. Security concerns if any`;

      const completion = await groq.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a senior software architect analyzing code projects.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        model: MODEL,
        temperature: 0.7,
        max_tokens: 3000
      });

      return {
        analysis: completion.choices[0]?.message?.content || '',
        success: true
      };
    } catch (error) {
      console.error('AI project analysis error:', error);
      return { success: false, error: error.message };
    }
  }
}

export default new AIService();