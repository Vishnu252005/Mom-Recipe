"use client"

import React, { useCallback, useEffect, useState } from "react"
// import { useChat } from "ai" // Not available in ai v6+
import { toast } from "sonner"

import { defaultValues, Recipe, type FormData } from "@/types/types"
import { saveGeneration } from "@/lib/actions"
import { generatePrompt } from "@/lib/generate-prompt"
import { cn } from "@/lib/utils"
import { RecipeForm } from "@/components/form/recipe-form"
import { RecipeCard } from "@/components/recipe/recipe-card"
import { RecipeCardSkeleton } from "@/components/recipe/recipe-card-skeleton"

export function GenerateRecipe() {
  const [isRecipeVisible, setIsRecipeVisible] = useState<boolean>(false)
  const [formValues, setFormValues] = useState<FormData>(defaultValues)
  const [recipe, setRecipe] = useState<Recipe | null>(null)


  useEffect(() => {
    if (recipe) {
      saveGeneration(recipe)
    }
  }, [recipe])

  const onSubmit = useCallback(
    async (values: FormData, e: React.FormEvent) => {
      const prompt = generatePrompt(values)
      setFormValues(values)
      // handle response parsing as needed
      try {
        // Find the latest message from the AI
      } catch (error) {
        console.error("Error parsing JSON:", error)
        toast.error("Uh oh! Failed to generate recipe. Try again.")
      }
    },
    []
  )

  return (
    <div className="pb-24">
      <div
        className={cn("mx-auto space-y-6 md:space-x-6 md:space-y-0", {
           "md:flex": isRecipeVisible,
           "max-w-2xl": !isRecipeVisible,
        })}
      >
        <div
          className={cn({
            "md:flex md:w-1/3": isRecipeVisible,
          })}
        >
          <RecipeForm onSubmit={onSubmit} isLoading={false} />
        </div>
        <div
          className={cn({
            "md:flex md:flex-col md:w-2/3": isRecipeVisible,
          })}
        >
          <div className="md:flex">
            {recipe && <RecipeCard recipe={recipe} />}
          </div>
        </div>
      </div>
    </div>
  )
}
