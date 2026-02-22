import { Search } from 'lucide-react';
import { useLanguage } from '../../utils/LanguageContext';

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const { t } = useLanguage();

  return (
    <div className="filter-group">
      <label className="filter-label">{t.products.search}</label>
      <div className="search-input-wrapper">
        <Search className="search-icon" size={20} />
        <input
          type="text"
          className="search-input"
          placeholder={t.products.searchPlaceholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchInput;
