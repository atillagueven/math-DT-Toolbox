export class EvaluationService {
    static evaluate(body: { answers: Record<number, number>; tools: any[] }) {
      try {
        console.log('Request body received in EvaluationService:', JSON.stringify(body));
  
        const { answers, tools } = body;
        if (!answers || !tools) {
          console.error('Missing answers or tools in the request body');
          throw new Error('Answers or tools are missing from the request body');
        }
  
        const scores = this.evaluateScores(answers);
        console.log('Scores:', scores);
  
        const recommendations = this.recommendTools(scores, tools);
        console.log('Recommendations:', recommendations);
  
        return { scores, recommendations };
      } catch (error) {
        console.error('Error in EvaluationService:', error.message);
        throw new Error('Internal Service Error');
      }
    }
  
    private static evaluateScores(answers: Record<number, number>) {
      const pillars: Record<string, number[]> = {
        'Technology and Infrastructure': [1, 2, 3, 4, 5, 6],
        'Process Automation and Optimization': [7, 8],
        'Cybersecurity and Governance': [9, 10, 11, 12, 13],
        'Data and Analytics': [14, 15, 16],
        'Digital Skills and Training': [17, 18, 19],
        'Business Model Innovation': [20, 21, 22, 23],
        'Customer Experience': [24, 25],
        'Digital Leadership and Culture': [26, 27, 28, 29],
      };
  
      const scores = Object.entries(pillars).map(([pillar, questionIds]) => {
        const total = questionIds.reduce((sum, id) => sum + (answers[id] || 0), 0);
        const avg = total / questionIds.length;
        return { pillar, score: avg };
      });
  
      return {
        labels: scores.map((s) => s.pillar),
        values: scores.map((s) => s.score),
      };
    }
  
    private static recommendTools(scores: { labels: string[]; values: number[] }, tools: any[]) {
      const sortedScores = scores.values
        .map((score, index) => ({ pillar: scores.labels[index], score }))
        .sort((a, b) => a.score - b.score);
  
      return sortedScores.slice(0, 2).flatMap((weakPillar) => {
        return tools.filter((tool) => tool.pillar === weakPillar.pillar);
      });
    }
  }
  