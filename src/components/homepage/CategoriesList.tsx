import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Category } from '@/models/Category'

type CategoriesListProps = {
   categories: Category[]
   selectedCategory: string
   handleCategoryChange: (categoryName: string) => void
}

const buttonStyle = 'bg-primary/20 border-primary hover:bg-primary/50'

function CategoriesList({
   categories,
   selectedCategory,
   handleCategoryChange,
}: CategoriesListProps) {
   return (
      <div className='flex flex-wrap items-center gap-6'>
         <Button
            variant='outline'
            onClick={() => handleCategoryChange('')}
            className={cn(selectedCategory === '' && buttonStyle)}
         >
            All
         </Button>
         {categories.map(c => (
            <Button
               key={c.id}
               variant='outline'
               onClick={() => handleCategoryChange(c.name)}
               className={cn(selectedCategory === c.name && buttonStyle)}
            >
               {c.name}
            </Button>
         ))}
      </div>
   )
}

export default CategoriesList
