import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { Category } from '@/models/Category'

type CategoriesListProps = {
   categories: Category[]
   selectedCategory: string
   handleCategoryChange: (categoryName: string) => void
   categoriesLoading: boolean
}

const buttonStyle = 'bg-primary/20 border-primary hover:bg-primary/50'

function CategoriesList({
   categories,
   selectedCategory,
   handleCategoryChange,
   categoriesLoading,
}: CategoriesListProps) {
   return (
      <div className='flex flex-wrap items-center gap-2 sm:gap-6'>
         {!categoriesLoading ? (
            <>
               <Button
                  variant='outline'
                  onClick={() => handleCategoryChange('')}
                  className={cn('min-w-32', selectedCategory === '' && buttonStyle)}
               >
                  All
               </Button>
               {categories.map(c => (
                  <Button
                     key={c.id}
                     variant='outline'
                     onClick={() => handleCategoryChange(c.name)}
                     className={cn('min-w-32', selectedCategory === c.name && buttonStyle)}
                  >
                     {c.name}
                  </Button>
               ))}
            </>
         ) : (
            <>
               {Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton key={index} className='w-32 h-10 rounded' />
               ))}
            </>
         )}
      </div>
   )
}

export default CategoriesList
