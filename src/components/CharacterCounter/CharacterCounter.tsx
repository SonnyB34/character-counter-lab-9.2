import { useState, useCallback } from 'react';
import TextInput from '../TextInput/TextInput';
import StatsDisplay from '../StatsDisplay/StatsDisplay';
import type { CharacterCounterProps, TextStats } from '../../types';

const WORDS_PER_MINUTE = 250;

function calculateStats(text: string): TextStats {
  const trimmed = text.trim();
  const wordCount = trimmed === '' ? 0 : trimmed.split(/\s+/).length;
  return {
    characterCount: text.length,
    wordCount,
    readingTime: wordCount / WORDS_PER_MINUTE,
  };
}

export default function CharacterCounter({
  minWords = 25,
  maxWords = 500,
  targetReadingTime,
}: CharacterCounterProps) {
  const [stats, setStats] = useState<TextStats>(calculateStats(''));

  const handleTextChange = useCallback((text: string) => {
    setStats(calculateStats(text));
  }, []);

  const { wordCount } = stats;
  const tooFew = wordCount < minWords;
  const tooMany = wordCount > maxWords;
  const status = tooFew ? 'low' : tooMany ? 'high' : 'good';

  // progress bar: 0% -> 100% of maxWords
  const percent = Math.min(100, (wordCount / maxWords) * 100);

  return (
    <div className="counter">
      <TextInput onTextChange={handleTextChange} />

      <div className="card">
        <StatsDisplay stats={stats} showReadingTime={true} />

        <div className="hint">
          Min: <span className="hint-value">{minWords}</span> | Max:{' '}
          <span className="hint-value">{maxWords}</span>
        </div>

        <div
          className="bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={maxWords}
          aria-valuenow={wordCount}>
          <div
            className={`bar-fill ${status}`}
            style={{ width: `${percent}%` }}
          />
        </div>

        <p className={`message ${status}`}>
          {tooFew &&
            `Write ${minWords - wordCount} more word(s) to reach the minimum.`}
          {tooMany &&
            `${wordCount - maxWords} word(s) over the limit. Trim it down.`}
          {status === 'good' && "Nice! You're in the sweet spot."}
        </p>

        {targetReadingTime !== undefined && (
          <p className="hint">
            {stats.readingTime >= targetReadingTime
              ? 'Reading-time goal reached.'
              : `Goal: ${targetReadingTime} min read`}
          </p>
        )}
      </div>
    </div>
  );
}
