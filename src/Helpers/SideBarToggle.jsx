export default function SidebarToggle({ onClick }) {
  return (
    <button
      type="button"
      id="sidebarToggle"
      onClick={onClick}
      aria-label="Toggle sidebar"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
      </svg>
    </button>
  )
}