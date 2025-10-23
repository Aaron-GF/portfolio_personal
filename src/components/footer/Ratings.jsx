const STAR_PATH =
  "M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z";

const STAR_COUNT = 5;
const FILLED_STARS = 4;
const RATING_VALUE = 4.95;
const TOTAL_REVIEWS = "1,745";

const RATINGS_SUMMARY = [
  { label: "5 stars", percentage: 70 },
  { label: "4 stars", percentage: 17 },
  { label: "3 stars", percentage: 8 },
  { label: "2 stars", percentage: 4 },
  { label: "1 star", percentage: 1 },
];

function StarIcon({ filled }) {
  const baseClass = "size-5";
  const colorClass = filled
    ? "text-primary"
    : "text-border";

  return (
    <svg
      className={`${baseClass} ${colorClass}`}
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

export default function Ratings() {
  return (
    <div id="Ratings" className="flex flex-col gap-1 w-80">
      <div className="flex items-center gap-1">
        {Array.from({ length: STAR_COUNT }).map((_, index) => (
          <StarIcon key={index} filled={index < FILLED_STARS} />
        ))}
        <p>
          {RATING_VALUE} de {STAR_COUNT}
        </p>
      </div>
      <p>
        {TOTAL_REVIEWS} valoraciones
      </p>
      {RATINGS_SUMMARY.map(({ label, percentage }) => (
        <div className="flex items-center mt-4" key={label}>
          <span className="w-15">{label}</span>
          <div className="w-2/4 h-5 mx-4 bg-border rounded-sm drop-shadow-md">
            <div
              className="h-5 bg-primary rounded-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="w-10 text-center">
            {percentage}%
          </span>
        </div>
      ))}
    </div>
  );
}
