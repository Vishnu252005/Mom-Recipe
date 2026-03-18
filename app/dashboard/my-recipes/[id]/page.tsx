import { RecipeCard } from "@/components/recipe/recipe-card"
import { getRecipePrivate } from "@/lib/supabase-queries"
import { type Metadata } from "next"
import { notFound } from "next/navigation"

import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"

export default function MyRecipePage() {
  return <div>Recipe details unavailable (Clerk removed)</div>
}
