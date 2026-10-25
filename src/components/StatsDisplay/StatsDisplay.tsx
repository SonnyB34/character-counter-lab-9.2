import type { StatsDisplayProps } from "../../types/index";
 
// 1.5 minutes -> "1:30"
function formatTime(minutes: number): string {
  const totalSeconds = Math.round(minutes * 60);
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
 
export default function StatsDisplay({
  stats,
  showReadingTime = true,
}: StatsDisplayProps) {
  return (
    <div className="stats">
      <div className="stat">
        <span className="stat-label">Characters: </span>
        <span className="stat-value">{stats.characterCount.toLocaleString()}</span>
      </div>
      <div className="stat">
        <span className="stat-label">Words: </span>
        <span className="stat-value">{stats.wordCount.toLocaleString()}</span>
      </div>
      {showReadingTime && (
        <div className="stat">
          <span className="stat-label">Reading Time: </span>
          <span className="stat-value">{formatTime(stats.readingTime)}</span>
        </div>
      )}
    </div>
  );
}