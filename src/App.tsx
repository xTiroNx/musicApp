

export function App() {
  const tracks = [
    { id: 1, title: 'Song 1', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack.mp3' },
    { id: 2, title: 'Song 2', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' },
    { id: 3, title: 'Song 3', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' },
    { id: 4, title: 'Song 4', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' },
    { id: 5, title: 'Song 5', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' },
    { id: 5, title: 'Song 5', src: 'https://musicfun.it-incubator.app/api/samurai-way-soundtrack-instrumental.mp3' }
  ];

  return (
    <>
      <h1>Music player</h1>
      <ul>
        {
          tracks.map((track) => {
            return (
              <li key={track.id}>
                <h4>{track.title}</h4>
                <audio controls src={track.src}></audio>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}
