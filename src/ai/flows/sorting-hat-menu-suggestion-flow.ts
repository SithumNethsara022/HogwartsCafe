'use server';
/**
 * @fileOverview A Genkit flow for the Sorting Hat menu suggestion tool.
 *
 * - sortingHatMenuSuggestion - A function that generates personalized food recommendations.
 * - SortingHatMenuSuggestionInput - The input type for the sortingHatMenuSuggestion function.
 * - SortingHatMenuSuggestionOutput - The return type for the sortingHatMenuSuggestion function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

// Define the schema for a single menu item (simplified for the prompt's consumption)
// This schema helps define the expected structure within the fullMenuJson string.
const MenuItemSchema = z.object({
  name: z.string().describe('The name of the menu item.'),
  description: z.string().describe('A brief description of the menu item.'),
  category: z.string().describe('The category the menu item belongs to (e.g., Bites, Rice, Pasta).'),
});

// Define the full menu structure (conceptual, as fullMenuJson is a string)
const MenuCategorySchema = z.object({
  category: z.string().describe('The name of the menu category.'),
  items: z.array(MenuItemSchema).describe('A list of menu items in this category.'),
});
export type MenuCategory = z.infer<typeof MenuCategorySchema>;

const SortingHatMenuSuggestionInputSchema = z.object({
  mood: z.string().optional().describe('The user\'s current mood (e.g., "adventurous", "comfort-seeking", "energetic").'),
  housePreference: z.string().optional().describe('The user\'s preferred Hogwarts House (e.g., "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff").'),
  cravings: z.string().optional().describe('Specific food cravings the user has (e.g., "something sweet", "spicy", "light").'),
  fullMenuJson: z.string().describe('A JSON string representation of the entire Hogwarts Cafe menu, including categories and items.'),
});
export type SortingHatMenuSuggestionInput = z.infer<typeof SortingHatMenuSuggestionInputSchema>;

const SortingHatMenuSuggestionOutputSchema = z.object({
  suggestions: z.array(
    z.object({
      name: z.string().describe('The name of the recommended menu item.'),
      description: z.string().describe('A brief description of the recommended menu item.'),
      reason: z.string().describe('The reason for recommending this item based on the user\'s preferences.'),
    })
  ).describe('A list of personalized menu suggestions.'),
});
export type SortingHatMenuSuggestionOutput = z.infer<typeof SortingHatMenuSuggestionOutputSchema>;

// Exported wrapper function for the flow, simplifying its usage from client-side code.
export async function sortingHatMenuSuggestion(
  input: SortingHatMenuSuggestionInput
): Promise<SortingHatMenuSuggestionOutput> {
  return sortingHatMenuSuggestionFlow(input);
}

// Defines the Genkit prompt for generating menu suggestions.
const sortingHatPrompt = ai.definePrompt({
  name: 'sortingHatMenuPrompt',
  input: { schema: SortingHatMenuSuggestionInputSchema },
  output: { schema: SortingHatMenuSuggestionOutputSchema },
  prompt: `You are the magical Sorting Hat, now serving as a menu recommender for the Hogwarts Cafe.
Your task is to provide personalized food recommendations from the provided menu based on the user's mood, Hogwarts House preference, or cravings.
Aim to suggest 3-5 distinct menu items. For each recommendation, provide the item's name, its description, and a short, magical reason why it suits the user's preferences.

Here are the user's preferences:
{{#if mood}}Mood: {{{mood}}}
{{/if}}{{#if housePreference}}Hogwarts House Preference: {{{housePreference}}}
{{/if}}{{#if cravings}}Cravings: {{{cravings}}}
{{/if}}
If no specific preferences are provided, make general, enchanting recommendations that highlight the cafe's magical offerings.

Here is the full Hogwarts Cafe menu in JSON format:
{{{fullMenuJson}}}

Provide your recommendations as a JSON object with a single key 'suggestions', which contains an array of objects. Each object in the 'suggestions' array must have 'name', 'description', and 'reason' fields.
Example Output:
{
  "suggestions": [
    {
      "name": "Butterbeer",
      "description": "A delightful, frothy drink popular in the wizarding world.",
      "reason": "Perfect for a celebratory mood, as it's a staple at any wizarding gathering!"
    },
    {
      "name": "Pumpkin Pasties",
      "description": "Flaky pastries filled with sweet pumpkin.",
      "reason": "A comforting classic, ideal for a quiet afternoon of study or simply to soothe any craving for something warm and sweet."
    }
  ]
}
`,
});

// Defines the Genkit flow that orchestrates the menu suggestion process.
const sortingHatMenuSuggestionFlow = ai.defineFlow(
  {
    name: 'sortingHatMenuSuggestionFlow',
    inputSchema: SortingHatMenuSuggestionInputSchema,
    outputSchema: SortingHatMenuSuggestionOutputSchema,
  },
  async (input) => {
    // Call the prompt with the user's input to get personalized recommendations.
    const { output } = await sortingHatPrompt(input);
    if (!output) {
      throw new Error('Failed to get recommendations from the Sorting Hat.');
    }
    return output;
  }
);
