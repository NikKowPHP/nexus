// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: Create prompt templates for different assessment types
export const assessmentPrompts = {
  coding: `Evaluate the following code submission. Provide specific feedback on:
- Code quality and readability
- Algorithm efficiency
- Error handling
- Best practices
- Potential improvements

Code:
{userCode}`,

  essay: `Analyze this essay submission. Consider:
- Clarity of thesis statement
- Logical flow and structure
- Use of supporting evidence
- Grammar and vocabulary
- Overall persuasiveness

Essay:
{userEssay}`,

  quiz: `Review these quiz answers. Provide:
- Correct answers for incorrect responses
- Explanation of concepts behind each question
- Areas of strength and weakness
- Recommended study resources

Quiz Responses:
{userAnswers}`
};
// ROO-AUDIT-TAG :: 2.3_ai_assessment_loop.md :: END