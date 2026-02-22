import { useLanguage } from '../../utils/LanguageContext';
import { DropdownMenu, DropdownMenuItem } from './dropdown-menu';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const { t } = useLanguage();

  return (
    <div className="filter-group">
      <label className="filter-label">{t.products.filterByCategory}</label>
      <DropdownMenu
        trigger={
          <span>
            {selectedCategory === 'all'
              ? t.products.allCategories
              : categories.find((cat) => cat === selectedCategory) || t.products.allCategories}
          </span>
        }
        align="left"
      >
        <DropdownMenuItem
          active={selectedCategory === 'all'}
          onClick={() => onCategoryChange('all')}
        >
          {t.products.allCategories}
        </DropdownMenuItem>
        {categories.map((category) => (
          <DropdownMenuItem
            key={category}
            active={selectedCategory === category}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </DropdownMenuItem>
        ))}
      </DropdownMenu>
    </div>
  );
};

export default CategoryFilter;
