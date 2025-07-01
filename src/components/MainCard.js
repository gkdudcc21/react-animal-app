const MainCard = ({ src, alt, handleHeartClick, choiceFavorite }) => {
  const heartIcone = choiceFavorite ? '💘' : '🤍'

  return (
    <div className="main-card">
      <img src={src} alt={alt} width="400px" />
      <button onClick={handleHeartClick}>{heartIcone}</button>
    </div>
  );
} 

export default MainCard;
