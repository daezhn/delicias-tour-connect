import { tourCategories } from "@/data/tours";
import { useLocale } from "@/hooks/use-locale";
import { Search } from "lucide-react";

interface TourFiltersProps {
  search: string;
  category: string;
  minPrice: string;
  maxPrice: string;
  duration: string;
  date: string;
  availableDates: string[];
  light?: boolean;
  onSearch: (value: string) => void;
  onCategory: (value: string) => void;
  onMinPrice: (value: string) => void;
  onMaxPrice: (value: string) => void;
  onDuration: (value: string) => void;
  onDate: (value: string) => void;
  onSubmit?: () => void;
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
  date,
  availableDates,
  light = false,
  onSearch,
  onCategory,
  onMinPrice,
  onMaxPrice,
  onDuration,
  onDate,
  onSubmit,
}: TourFiltersProps) => {
  const { locale } = useLocale();

  const label = (es: string, en: string) => (locale === "es" ? es : en);

  const labelClass = light ? "flex flex-col gap-2 text-sm font-semibold text-white" : "flex flex-col gap-2 text-sm font-semibold text-muted-foreground";
  const selectClass = light
    ? "rounded-full border border-white/40 bg-white/85 px-4 py-2 text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    : "rounded-full border border-input bg-background px-4 py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";
  const inputClass = selectClass;
  const miniLabel = light ? "flex flex-col text-xs font-semibold text-white" : "flex flex-col text-xs font-semibold text-muted-foreground";
  const miniInput = light
    ? "rounded-md border border-white/40 bg-white/10 px-2 py-1 text-sm text-white placeholder-white/60 focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
    : "rounded-md border border-input px-2 py-1 text-sm focus-visible:ring-2 focus-visible:ring-primary";
  const miniWrapper = light
    ? "grid grid-cols-2 gap-3 rounded-full border border-white/40 bg-white/10 px-4 py-2"
    : "grid grid-cols-2 gap-3 rounded-full border border-input bg-background px-4 py-2";

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <label className={labelClass}>
        {label("Buscar tours", "Search tours")}
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder={label("Nombre, palabra clave", "Name, keyword")}
          className={inputClass}
        />
      </label>

      <label className={labelClass}>
        {label("Categoría", "Category")}
        <select
          value={category}
          onChange={(e) => onCategory(e.target.value)}
          className={selectClass}
        >
          <option value="">{label("Todas", "All")}</option>
          {tourCategories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </label>

      <div className={miniWrapper}>
        <label className={miniLabel}>
          {label("Precio mínimo", "Min price")}
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(e) => onMinPrice(e.target.value)}
            className={miniInput}
          />
        </label>
        <label className={miniLabel}>
          {label("Precio máximo", "Max price")}
          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(e) => onMaxPrice(e.target.value)}
            className={miniInput}
          />
        </label>
      </div>

      <label className={labelClass}>
        {label("Duración", "Duration")}
        <select
          value={duration}
          onChange={(e) => onDuration(e.target.value)}
          className={selectClass}
        >
          {durationOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {label(opt.es, opt.en)}
            </option>
          ))}
        </select>
      </label>

      <label className={labelClass}>
        {label("Fecha disponible", "Available date")}
        <select
          value={date}
          onChange={(e) => onDate(e.target.value)}
          className={selectClass}
        >
          <option value="">{label("Cualquiera", "Any")}</option>
          {availableDates.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </label>

      <div className="flex items-end">
        <button
          type="button"
          onClick={onSubmit}
          className={`flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition ${
            light
              ? "bg-white text-secondary shadow-lg hover:bg-white/90"
              : "bg-primary text-white shadow-md hover:bg-primary/90"
          }`}
        >
          <Search className="h-4 w-4" />
          {label("Buscar", "Search")}
        </button>
      </div>
    </div>
  );
};
