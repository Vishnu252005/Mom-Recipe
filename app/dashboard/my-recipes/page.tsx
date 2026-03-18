import { type Metadata } from "next"

import type { Tables } from "@/types/database.types"
import { supabaseClient } from "@/lib/supabase-client"
import { getRecipesByUserId } from "@/lib/supabase-queries"
import { columns, RecipeTable } from "@/components/dashboard/columns"
import { DataTable } from "@/components/dashboard/data-table"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { RecipeCardPreview } from "@/components/recipe/recipe-card-preview"

type Recipe = Tables<"recipes">

export const metadata: Metadata = {
  metadataBase: new URL("https://moms-recipe.app"),
  title: "Your Culinary Creations",
  description:
    "Explore your saved recipes in one place. Your culinary journey starts here!",
}

export default function RecipePage() {
  return <div>Recipe list unavailable (Clerk removed)</div>
}
