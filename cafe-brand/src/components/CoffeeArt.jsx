export default function CoffeeArt({ type = 'cream', hero = false }) {
  return (
    <div
      aria-hidden="true"
      className={`coffee-art ${hero ? 'hero-art' : ''} art-${type}`}
    >
      <div className="art-shadow" />
      <div className="saucer" />

      <div className="cup">
        <div className="drink">
          <span className="foam" />
        </div>
        <span className="cup-label">onyu</span>
      </div>

      {hero && (
        <>
          <span className="art-caption">
            SLOW DOWN.
            <br />
            SIP THE MOMENT.
          </span>
          <span className="art-stamp">
            온유
            <br />
            <small>한 잔의 여유</small>
          </span>
        </>
      )}
    </div>
  );
}