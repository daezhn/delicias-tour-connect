import { tourCategories } from "@/data/tours";
import { useLocale } from "@/hooks/use-locale";

interface TourFiltersProps {
  search: string;
  category: string;
  minPrice: string;
  maxPrice: string;
  duration: string;
  onSearch: (value: string) => void;
  onCategory: (value: string) => void;
  onMinPrice: (value: string) => void;
  onMaxPrice: (value: string) => void;
  onDuration: (value: string) => void;
}

const durationOptions = [
  { value: "", es: "Cualquier duración", en: "Any duration" },
  { value: "2", es: "Hasta 2h", en: "Up to 2h" },
  { value: "4", es: "Hasta 4h", en: "Up to 4h" },
  { value: "6", es: "Hasta 6h", en: "Up to 6h" },
];

export const TourFilters = ({
  search,
  category,
  minPrice,
  maxPrice,
  duration,
  onSearch,
  onCategory,
  onMinPrice,
  onMaxPrice,
  onDuration,
}: TourFiltersProps) => {
  const { locale } = useLocale();

  const label = (es: string, en: string) => (locale === "es" ? es : en);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <label className="flex flex-col gap-2 text-sm font-semibold text-muted-foreground">
        {label("Buscar tours", "Search tours")}
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={label("Nombre, palabra clave", "Name, keyword")}
          className="rounded-full border border-input bg-background px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        />
      </label>

      <label className="flex flex-col gap-2 text-sm font-semibold text-muted-foreground">
        {label("Categoría", "Category")}
        <select
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className="rounded-full border border-input bg-background px-4 py-2 focus-visible:ring-2 focus-visible:ring-primary"
        >
          <option value="">{label("Todas", "All")}</option>
          {tourCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <div className="grid grid-cols-2 gap-3 rounded-full border border-input bg-background px-4 py-2">
        <label className="flex flex-col text-xs font-semibold text-muted-foreground">
          {label("Precio mínimo", "Min price")}
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => onMinPrice(e.target.value)}
            className="rounded-md border border-input px-2 py-1 text-sm focus-visible:ring-2 focus-visible:ring-primary"
          />
        </label>
        <label className="flex flex-col text-xs font-semibold text-muted-foreground">
          {label("Precio máximo", "Max price")}
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => onMaxPrice(e.target.value)}
            className="rounded-md border border-input px-2 py-1 text-sm focus-visible:ring-2 focus-visible:ring-primary"
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-muted-foreground">
        {label("Duración", "Duration")}
        <select
          value={duration}
          onChange={(e) => onDuration(e.target.value)}
          className="rounded-full border border-input bg-background px-4 py-2 focus-visible:ring-2 focus-visible:ring-primary"
        >
          {durationOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {label(opt.es, opt.en)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
