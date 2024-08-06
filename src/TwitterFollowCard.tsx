import { useState } from 'react'
import './TwitterFollowCard.css'

const TwitterFollowCard = ({user}) => {
  const [isFollowing, setIsFollowing] = useState(user.isFollowing)

  const followText = isFollowing ? 'Siguiendo' : 'Seguir';
  const followDecoration = isFollowing ? 'user-card__container_siguiendo' : 'user-card__container_seguir'

  const updateFollowing = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className='user-card'>
      <img src={user.imgUrl} alt="user image" className='user-card__img'/>
      <div className='user-card__container'>
        <div className='user-card__container__names'>
          <span className='user-card__container__names__name'>{user.name}</span>
          <span className='user-card__container__names__tag'>{user.tag}</span>
        </div>
        <div className={followDecoration} onClick={updateFollowing}>
          <span className='prueba2'>{followText}</span>
          <span className='prueba'>Dejar de seguir</span>
        </div>
      </div>
    </div>
  )
}

export default TwitterFollowCard