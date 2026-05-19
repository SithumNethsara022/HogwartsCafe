'use server';
/**
 * @fileOverview A Genkit flow for the Hogwarts Cafe menu suggestion tool.
 *
 * - sortingHatMenuSuggestion - A function that generates personalized food recommendations.
 * - SortingHatMenuSuggestionInput - The input type for the sortingHatMenuSuggestion function.
 * - SortingHatMenuSuggestionOutput - The return type for the sortingHatMenuSuggestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const MenuItemSchema = z.object({
  name: z.string().describe('The name of the menu item.'),
  description: z.string().describe('A brief description of the menu item.'),
  category: z.string().describe('The category the menu item belongs to.'),
});

const SortingHatMenuSuggestionInputSchema = z.object({
  mood: z.string().optional().describe('The user\'s current mood (e.g., "adventurous", "comfort-seeking", "energetic").'),
  cravings: z.string().optional().describe('Specific food cravings the user has (e.g., "something sweet", "spicy", "light").'),
  fullMenuJson: z.string().describe('A JSON string representation of the entire Hogwarts Cafe menu.'),
});
export type SortingHatMenuSuggestionInput = z.infer<typeof SortingHatMenuSuggestionInputSchema>;

const SortingHatMenuSuggestionOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      name: z.string().describe('The name of the recommended menu item.'),
      description: z.string().describe('A brief description of the recommended menu item.'),
      reason: z.string().describe('The magical reason for recommending this item.'),
    })
  ).describe('A list of personalized menu suggestions.'),
});
export type SortingHatMenuSuggestionOutput = z.infer<typeof SortingHatMenuSuggestionOutputSchema>;

export async function sortingHatMenuSuggestion(
  input: SortingHatMenuSuggestionInput
): Promise<SortingHatMenuSuggestionOutput> {
  return sortingHatMenuSuggestionFlow(input);
}

const sortingHatPrompt = ai.definePrompt({
  name: 'sortingHatMenuPrompt',
  input: { schema: SortingHatMenuSuggestionInputSchema },
  output: { schema: SortingHatMenuSuggestionOutputSchema },
  prompt: `You are the magical Sorting Hat, serving as a master of ceremonies and menu recommender for the Hogwarts Cafe.
Your task is to provide personalized food recommendations from our menu based on the user's mood or cravings.
Suggest 3 distinct menu items. For each recommendation, provide the item's name, its description, and a short, magical reason why it suits the user's vibe.

User Preferences:
{{#if mood}}Mood: {{{mood}}}
{{/if}}{{#if cravings}}Cravings: {{{cravings}}}
{{/if}}
If no specific preferences are provided, make general, enchanting recommendations that highlight the cafe's premium offerings like Butterbeer or Special Rice.

Full Menu:
{{{fullMenuJson}}}`,
});

const sortingHatMenuSuggestionFlow = ai.defineFlow(
  {
    name: 'sortingHatMenuSuggestionFlow',
    inputSchema: SortingHatMenuSuggestionInputSchema,
    outputSchema: SortingHatMenuSuggestionOutputSchema,
  },
  async (input) => {
    const { output } = await sortingHatPrompt(input);
    if (!output) {
      throw new Error('The Sorting Hat is currently silent. Please try again.');
    }
    return output;
  }
);