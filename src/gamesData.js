export const games = [
  { id: 'platform', name: 'Hub', visits: 23456, up: 1842, down: 112, thumb: '/null_plainsky512_ft.jpeg', author: 'Chirpless Admin' },
  { id: 'chirpless_hunt', name: 'Chirpless Hunt 2026', visits: 8720, up: 710, down: 35, thumb: '/null_plainsky512_up.jpeg', author: 'Chirpless Admin' },
  { id: 'lucky_world', name: 'Lucky World', visits: 42100, up: 4021, down: 200, thumb: '/null_plainsky512_ft.jpeg', author: 'Chirpless Admin' },
  { id: 'sillyville', name: 'SillyVille V1', visits: 5321, up: 410, down: 22, thumb: '/null_plainsky512_dn.jpeg', author: 'Chirpless Admin' },
  { id: 'chirpcity', name: 'ChirpCity 1.1V', visits: 123456, up: 9812, down: 412, thumb: '/noFilter.png', author: 'Chirpless Admin' },
  { id: 'memories', name: 'Memories', visits: 4123, up: 302, down: 12, thumb: '/null_plainsky512_bk.jpg', author: 'Chirpless Admin' },
  { id: 'easter_2026', name: 'Easter 2026', visits: 7432, up: 612, down: 28, thumb: '/null_plainsky512_ft.jpeg', author: 'Chirpless Admin' },
  { id: 'blocks', name: 'Blocks', visits: 15890, up: 1201, down: 76, thumb: '/studs.png', author: 'Chirpless Admin' },
  { id: 'rocket_olympics', name: 'Rocket Olympics', visits: 9021, up: 812, down: 90, thumb: '/null_plainsky512_lf.jpg', author: 'Chirpless Admin' },
  { id: 'home', name: 'Home', visits: 2100, up: 160, down: 6, thumb: '/Wall.png', author: 'Chirpless Admin' }
];

// Compute like percentage (0..100) from up/down; if no votes, show 100% by default (or 0 if both zero)
export function likePercentage(g) {
  const up = Math.max(0, Math.floor(g.up || 0));
  const down = Math.max(0, Math.floor(g.down || 0));
  const total = up + down;
  if (total === 0) return 100;
  return Math.round((up / total) * 100);
}

// Sorting helpers
export function getFilteredGames({ filter = 'popular', search = '' } = {}) {
  const q = (search || '').trim().toLowerCase();
  let list = games.slice();

  // Filter by query
  if (q.length > 0) {
    list = list.filter(g => g.name.toLowerCase().includes(q) || g.id.toLowerCase().includes(q));
  }

  // Apply sort filter
  switch (filter) {
    case 'most_upvoted':
      list.sort((a,b) => (b.up - a.up) || (b.visits - a.visits));
      break;
    case 'most_downvoted':
      list.sort((a,b) => (b.down - a.down) || (b.visits - a.visits));
      break;
    case 'popular':
    default:
      // Popular: visits primary, then upvotes
      list.sort((a,b) => (b.visits - a.visits) || (b.up - a.up));
      break;
  }
  return list;
}